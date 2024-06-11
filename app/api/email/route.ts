import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const {name, email, message} = await req.json(); 

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Invalid inputs' }, { status: 400 });
      }
    try 
  {
    const { data } = await resend.emails.send({
        from: 'New Enquiry <onboarding@resend.dev>',
        to: ['dwajar2@yahoo.com'],
        subject: 'New Enquiry',
        text: message as string,
        reply_to: email as string,
  });
  console.log('Email sent successfully:', name);
  return NextResponse.json(data, { status: 200 });
}

  catch(error) {
    console.error('error sending email', error)
  } 
};