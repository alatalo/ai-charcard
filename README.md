# Character Cards

Simple prototype Nuxt3 webapp to generate Character Cards using OpenAI ChatGPT and Dall-E.

Check out my blog post [How I generated 100 fantasy characters in minutes](https://medium.com/@ville.alatalo/how-i-generated-100-fantasy-characters-in-minutes-a5b7e6690193) for more information.

![Character Card](https://github.com/alatalo/ai-charcard/blob/main/docs/charcards.jpg?raw=true)

## Setup

Install dependencies and run the development server:

```bash
yarn install
yarn dev -o
```

Configure your OpenAI API key to `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    OPENAI_API_KEY: '[your-api-key]',
  }
})
```

