import { Supadata } from '@supadata/js';
import { NextRequest, NextResponse } from 'next/server';

const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const video = await supadata.youtube.video({
      id: url,
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
