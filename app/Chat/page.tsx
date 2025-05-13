'use client'

import { useChat } from '@ai-sdk/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const chatContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex h-screen flex-col-reverse md:flex-row">
      {/* Left Section: Animation */}
      <div className="hidden w-full items-center justify-center p-6 md:flex md:w-1/3">
        <DotLottieReact src="/Animation - 1747158018473.json" loop autoplay />
      </div>

      {/* Right Section: Chat Box */}
      <div
        ref={chatContainer}
        className="flex w-full max-w-4xl flex-col space-y-6 overflow-y-auto rounded-xl border border-purple-500 p-6 shadow-lg md:ml-4 md:w-2/3"
      >
        {/* Messages */}
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-start' : 'justify-end'} items-center`}
            >
              <Image
                alt="avatar"
                src={message.role === 'user' ? '/user.webp' : '/ai.png'}
                width={message.role === 'user' ? 30 : 50} // Image size for user and AI
                height={message.role === 'user' ? 30 : 50} // Keep original size
                className="rounded-full"
              />
              <div
                className={`max-w-[70%] rounded-lg p-4 shadow-md ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-4">
          <input
            className="w-full rounded-xl border border-gray-300 p-3 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="inline-block rounded-xl bg-purple-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
