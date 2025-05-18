
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { text , voiceId} = await req.json();

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key missing' }, { status: 500 });
  }
  const defaultVoice = '21m00Tcm4TlvDq8ikWAM'; // Default voice (Rachel)
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId ? voiceId : defaultVoice}`, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'audio/mpeg',
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  });

  const audioBuffer = await response.arrayBuffer();

  return new Response(audioBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg',
    },
  });
}
