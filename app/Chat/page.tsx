'use client'

import { useChat } from '@ai-sdk/react'
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
    <div
      ref={chatContainer}
      className="border-box mx-auto mb-10 flex h-screen max-w-4xl flex-col items-start overflow-y-auto rounded-2xl rounded-b-none border border-b-0 p-10"
    >
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`${message.role === 'user' ? 'user-char' : 'ai-chat'} mb-5 flex items-start gap-2`}
        >
          <Image
            key={message.id}
            alt="avatar"
            src={`${message.role === 'user' ? '/user.webp' : '/ai.png'}`}
            width={message.role === 'user' ? 30 : 50}
            height={message.role === 'user' ? 30 : 50}
          />
          <div className="prose prose-sm dark:prose-invert">
            <ReactMarkdown>{message.content}</ReactMarkdown>
            {index < messages.length - 1 && <hr className="my-5 w-full" />}
          </div>
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-8 left-1/2 w-full max-w-md -translate-x-1/2"
      >
        <input
          className="w-full rounded-2xl border border-white p-2 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
