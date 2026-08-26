// Скопируйте в tula.config.js и подставьте ключи из Vapi.
// tula.config.js в .gitignore — секреты не коммитить.
// Если файла нет, кнопки звонка отключаются, остальная страница работает как обычно.
window.VAPI_TULA_CONFIG = {
  apiKey: "YOUR_PUBLIC_API_KEY",
  assistantId: "YOUR_TULA_ASSISTANT_ID",
};
