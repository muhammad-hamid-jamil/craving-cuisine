import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, eventType, peopleCount, date, message } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables not set');
      
      // Log the form data for manual processing
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Company:', company);
      console.log('Event Type:', eventType);
      console.log('People Count:', peopleCount);
      console.log('Date:', date);
      console.log('Message:', message);
      console.log('===============================');
      
      return NextResponse.json(
        { message: 'Form received! We will contact you within 24 hours.' },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'muhammadhamidofficial0@gmail.com',
      subject: `New Catering Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">New Catering Inquiry</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Event Details</h3>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Number of People:</strong> ${peopleCount}</p>
            <p><strong>Date:</strong> ${date}</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #ea580c; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">Please respond to this inquiry within 24 hours.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully! We will contact you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log the form data for manual processing in case of error
    try {
      const body = await request.json();
      console.log('=== CONTACT FORM SUBMISSION (ERROR CASE) ===');
      console.log('Form Data:', body);
      console.log('============================================');
    } catch (logError) {
      console.error('Error logging form data:', logError);
    }
    
    return NextResponse.json(
      { message: 'Form received! We will contact you within 24 hours.' },
      { status: 200 }
    );
  }
}
