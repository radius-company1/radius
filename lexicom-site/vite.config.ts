import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => ({ plugins: [react()], build: { manifest: true }, base: mode === 'launch' ? '/' : '/radius/lexicom/' }));
