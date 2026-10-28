import { createOpenRouter } from '@openrouter/ai-sdk-provider'

// Importa en diferentes lugares que se necesite la instancia de OpenRouter
export const openRouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})
