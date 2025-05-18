'use client'

import { useState } from 'react'
import { VOICES } from '../utils'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Speak() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [voiceId, setVoiceId] = useState(VOICES[0].id)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  const handleSpeak = async () => {
    setLoading(true)
    setAudioUrl(null)
    const res = await fetch('/api/speak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, voiceId }),
    })

    if (!res.ok) {
      alert('Error generating speech')
      setLoading(false)
      return
    }

    const audioBlob = await res.blob()
    const audioUrl = URL.createObjectURL(audioBlob)
    setAudioUrl(audioUrl)
    setLoading(false)
    setText('')
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br px-4 py-10 md:flex md:items-center md:justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2">
          <DotLottieReact src="/Animation - 1747553803284.json" loop autoplay />
        </div>

        {/* Input + Voice Selection */}
        <div className="w-full rounded-lg border border-purple-500 p-6 shadow-xl md:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            AI Voice Generator
          </h2>

          <textarea
            className="w-full rounded-xl border border-gray-300 p-3 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something to speak... (it's required)"
          />

          <select
            className="my-5 w-full rounded-xl border border-gray-300 p-3 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={voiceId}
            onChange={(e) => setVoiceId(e.target.value)}
          >
            {VOICES.map((voice) => (
              <option key={voice.id} value={voice.id} className="text-black">
                {voice.label}
              </option>
            ))}
          </select>

          <button
            onClick={handleSpeak}
            disabled={loading || !text}
            className="w-full cursor-pointer rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent" />
              </div>
            ) : (
              'Generate Voice'
            )}
          </button>

          {audioUrl && (
            <div className="mt-6">
              <p className="mb-2 text-white">Your generated audio:</p>
              <audio controls className="w-full rounded">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
