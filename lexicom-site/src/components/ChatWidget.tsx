import { useEffect, useRef, useState, type FormEvent } from 'react';
import { chatSuggestions, getChatResponse, type ChatMessage } from '../data/chat';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';

type ChatWidgetProps = {
  open: boolean;
  onClose: () => void;
};

const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: 'Здравствуйте! Я демонстрационный ИИ-консультант Lexicom. Спросите о платформе, внедрении или выборе направления.',
};

export function ChatWidget({ open, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

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

  if (!open) return null;

  return (
    <div className="chat-overlay" role="presentation" onClick={onClose}>
      <GlassSurface
        as="aside"
        className="chat-panel"
        radius="xl"
        role="dialog"
        aria-modal="true"
        aria-label="Демонстрационный чат ИИ-консультанта"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="chat-panel__header">
          <div>
            <p className="chat-panel__title">ИИ-консультант Lexicom</p>
            <p className="chat-panel__subtitle">Демонстрационный режим</p>
          </div>
          <button type="button" className="chat-panel__close" aria-label="Закрыть чат" onClick={onClose}>
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
      </GlassSurface>
    </div>
  );
}
