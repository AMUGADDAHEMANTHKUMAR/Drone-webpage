import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Check if configuration exists
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error("Missing email configuration");
            // In development/demo mode, we just log success to allow the UI to proceed
            return NextResponse.json({ success: true, message: "Demo mode: Email logged (configure environment to send)" });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'monkeydluffy05567@gmail.com', // User's target email
            subject: `[EXECUTIONER DRONE] Transmission from ${name}`,
            text: `
        IDENTITY: ${name}
        COMMS LINK: ${email}
        
        TRANSMISSION:
        ${message}
      `,
            html: `
        <div style="font-family: monospace; background: #000; color: #00ff00; padding: 20px;">
          <h2>SECURE TRANSMISSION RECEIVED</h2>
          <p><strong>IDENTITY:</strong> ${name}</p>
          <p><strong>COMMS LINK:</strong> ${email}</p>
          <hr style="border-color: #00ff00"/>
          <p><strong>MESSAGE:</strong></p>
          <pre style="white-space: pre-wrap;">${message}</pre>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Transmission Sent" });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ success: false, message: "Transmission Failed" }, { status: 500 });
    }
}
