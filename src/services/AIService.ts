import { streamText } from "ai"
import { openRouter } from "../lib/ai"

export default {

    async generateRecipe(prompt: string) {
        
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-8b-instruct:free'),
            prompt,
            system: 'Eres un adulto joven con experiencia en bartender',
            temperature: 0
        })

        return result.textStream

    }
}