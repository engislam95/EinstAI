
import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq('llama3-70b-8192'), // Groq model
    messages: [
      {
        role : 'system' , 
        content : 'You go straight to the point, your replies are under 500 characters.'
      }, 
      ...messages
    ],
  });

  return result.toDataStreamResponse();
}
