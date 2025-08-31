import { Supadata } from '@supadata/js';
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY!,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const video = await supadata.youtube.video({
      id: url,
    });

    if (!video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const transcript = (video as any).transcript;
    const prompt = `
      **Analyze the following YouTube video information and provide a structured analysis:**

      *   **Title:** ${video.title}
      *   **Description:** ${video.description}
      *   **Transcript:** ${transcript ? transcript.substring(0, 8000) : 'Transcript not available.'}

      **Please provide the following:**

      1.  **Summary:** A concise summary of the video's content.
      2.  **Key Topics:** A list of the main topics discussed in the video.
      3.  **Recommendation:** A recommendation on who would find this video interesting and why.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const geminiAnalysis = response.text();

    return NextResponse.json({ ...video, geminiAnalysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
