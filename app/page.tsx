'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-white sm:p-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to <span className="text-purple-400">AI Showcase</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-zinc-400 sm:text-xl">
          Explore a collection of fun and creative AI side projects – from image
          captioning to chatbots and more.
        </p>
        <div className="mx-auto max-w-xs">
          <DotLottieReact src="/Animation - 1746896743075.json" loop autoplay />
        </div>
        <div className="mt-8">
          <a
            href="/Chat"
            className="inline-block rounded bg-purple-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-600"
          >
            Enter Chat
          </a>
        </div>
      </div>
    </div>
  )
}
