import { useEffect, useId, useRef, useState, type FormEvent, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { chatSuggestions, getChatResponse, type ChatMessage } from '../data/chat';
import { Button } from './ui/Button';

type ChatWidgetProps = {
  open: boolean;
  onClose: () => void;
  /** Element to restore focus to after close (usually the open button). */
  returnFocusRef?: RefObject<HTMLElement | null>;
};

const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: 'Здравствуйте! Это интерактивный обзор возможностей Lexicom. Спросите о платформе, внедрении или выборе направления.',
};

export function ChatWidget({ open, onClose, returnFocusRef }: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!open) {
      if (dialog.open) dialog.close();
      document.body.classList.remove('chat-is-open');
      if (wasOpenRef.current) {
        const target = returnFocusRef?.current;
        if (target && typeof target.focus === 'function') {
          window.requestAnimationFrame(() => target.focus());
        }
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    document.body.classList.add('chat-is-open');
    if (!dialog.open) dialog.showModal();
    window.requestAnimationFrame(() => closeRef.current?.focus());

    const onCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener('cancel', onCancel);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      document.body.classList.remove('chat-is-open');
      if (dialog.open) dialog.close();
    };
  }, [open, onClose, returnFocusRef]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const botMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      role: 'bot',
      text: getChatResponse(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(input);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="chat-dialog"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="chat-panel" role="document">
        <header className="chat-panel__header">
          <div>
            <p className="chat-panel__title" id={titleId}>
              Интерактивный обзор возможностей
            </p>
            <p className="chat-panel__subtitle">Ответы по ключевым словам · до подключения ассистента</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="chat-panel__close"
            aria-label="Закрыть обзор"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="chat-panel__messages" ref={listRef}>
          {messages.map((message) => (
            <div key={message.id} className={`chat-bubble chat-bubble--${message.role}`}>
              {message.text}
            </div>
          ))}
        </div>

        <div className="chat-panel__suggestions">
          {chatSuggestions.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>

        <form className="chat-panel__form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="chat-input">
            Сообщение
          </label>
          <input
            id="chat-input"
            type="text"
            placeholder="Задайте вопрос о платформе..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
          />
          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </dialog>,
    document.body,
  );
}
