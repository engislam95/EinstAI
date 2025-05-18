# 🧠 AI Chat, 🎨 Image & 🎙️ Voice Generator App

A full-stack AI-powered application built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring:

- 💬 AI Chat interface (via `@ai-sdk/react`)
- 🖼️ Text-to-Image generation using `Stable Diffusion`
- 🎙️ Text-to-Speech Voice Generator using `ElevenLabs API`
- 🌐 Lottie animations for enhanced UX
- 💅 Clean, modern UI with full **responsive design**
- ⚙️ API routes for server-side handling (App Router)

---

## 🚀 Demo

> [einst-ai.vercel.app](https://einst-ai.vercel.app/)

---

## ✨ Features

### 🗨️ AI Chat
- Real-time conversation powered by `@ai-sdk/react`
- Markdown support
- Scrolls smoothly with styled scrollbars
- Responsive avatars & chat bubbles

### 🖼️ Image Generator
- Text input + Generate button
- Calls `/api/generate-image` to fetch images from the backend
- Displays generated images in real time
- Responsive layout with animation + preview sections


### 🎙️ Voice Generator (New!)
- Converts typed text into lifelike speech
- Supports multiple voice options (Male/Female)
- Uses **ElevenLabs** API (freemium)
- Audio is generated via API route and manually playable in browser
- Beautiful UI with Lottie animation and responsive layout

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: [Lottie Files](https://lottiefiles.com/)
- **AI SDK**: `@ai-sdk/react` (for chat)
- **API**: 
  - Hugging Face Stable Diffusion (image generation)
  - [ElevenLabs Text-to-Speech API](https://www.elevenlabs.io) (voice)



