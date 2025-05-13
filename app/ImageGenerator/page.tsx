'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useState } from 'react'

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [imageSrc, setImageSrc] = useState(null)
  const [loading, setLoading] = useState(false)

  const generateImage = async () => {
    setLoading(true)
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    if (response.ok) {
      const blob = await response.blob()
      setImageSrc(URL.createObjectURL(blob) as any)
    } else {
      const { error } = await response.json()
      alert('Failed to generate image: ' + error)
    }

    setLoading(false)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 md:flex-row">
      {/* Left Section: Lottie + Input */}
      <div className="flex w-full flex-col items-center space-y-6 p-6 md:w-1/2">
        <div className="w-full">
          <DotLottieReact src="/Animation - 1747159601060.json" loop autoplay />
        </div>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe an image..."
          className="w-full rounded-xl border border-gray-300 p-3 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          onClick={generateImage}
          disabled={loading}
          className="w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent" />
            </div>
          ) : (
            'Generate Image'
          )}
        </button>
      </div>

      {/* Right Section: Image Result */}
      <div className="flex h-full w-full items-center justify-center rounded-xl border border-purple-500 md:w-1/2">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Generated"
            className="max-h-[90%] max-w-full rounded-lg object-contain shadow-xl"
          />
        ) : (
          <div className="px-4 text-center text-lg text-white">
            {loading
              ? 'Generating your masterpiece...'
              : 'Your image will appear here.'}
          </div>
        )}
      </div>
    </div>
  )
}
