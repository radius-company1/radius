import { Component, type ReactNode } from 'react';

export class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <main className="container section" role="alert">
      <h1>Не удалось открыть страницу</h1>
      <p>Обновите страницу, чтобы загрузить актуальную версию сайта.</p>
      <button className="btn btn--primary" type="button" onClick={() => window.location.reload()}>Обновить страницу</button>
      <p><a href={import.meta.env.BASE_URL}>На главную Lexicom</a></p>
    </main>;
  }
}
