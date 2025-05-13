import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  console.log(prompt)

  const response = await fetch(
    'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    return new Response(JSON.stringify({ error: errorText }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const imageBuffer = await response.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
