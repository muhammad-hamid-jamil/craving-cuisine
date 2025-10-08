import { NextRequest, NextResponse } from 'next/server';
import { generatePDFBuffer } from '../../utils/pdfGenerator';

const packages = {
  'small-office': { name: 'Small Office', people: '5-20 People', price: 'Starting from Rs. 2,500' },
  'medium-office': { name: 'Medium Office', people: '20-80 People', price: 'Starting from Rs. 8,000' },
  'large-events': { name: 'Large Events', people: '80-150 People', price: 'Starting from Rs. 25,000' }
};

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    const url = new URL(request.url);
    const action = url.searchParams.get('action');
    
    // Generate booking ID
    const bookingId = `#${Date.now().toString().slice(-6)}`;
    
    // If this is a PDF download request, return the PDF directly
    if (action === 'download') {
      const pdfBuffer = generatePDFBuffer(bookingData, bookingId);
      
      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="craving-cuisine-booking-${bookingId}.pdf"`,
        },
      });
    }
    
    // Prepare email content
    const selectedPackage = packages[bookingData.selectedPackage as keyof typeof packages];
    
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #d11a5c; font-size: 24px; margin: 0;">🍽️ New Booking - Craving Cuisine</h1>
        </div>
        
        <div style="background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="background: linear-gradient(135deg, #d11a5c, #ffa723); color: white; padding: 30px; text-align: center;">
            <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">New Booking Received!</h2>
            <p style="margin: 0 0 15px 0; font-size: 16px; opacity: 0.9;">Customer booking details below</p>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">Booking ID: ${bookingId}</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Customer: ${bookingData.email}</p>
            </div>
          </div>
          
          <div style="padding: 30px;">
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">👤 Customer Information</h3>
              <p><strong>Name:</strong> ${bookingData.name}</p>
              <p><strong>Email:</strong> ${bookingData.email}</p>
              <p><strong>Phone:</strong> ${bookingData.phone}</p>
              <p><strong>Company:</strong> ${bookingData.company || 'N/A'}</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">📅 Event Details</h3>
              <p><strong>Event Type:</strong> ${bookingData.eventType.replace('-', ' ').toUpperCase()}</p>
              <p><strong>Date:</strong> ${bookingData.eventDate}</p>
              <p><strong>Time:</strong> ${bookingData.eventTime}</p>
              <p><strong>People:</strong> ${bookingData.peopleCount}</p>
              <p><strong>Package:</strong> ${selectedPackage?.name} (${selectedPackage?.people})</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">📍 Delivery Location</h3>
              <p><strong>Address:</strong> ${bookingData.address}</p>
              <p><strong>Area:</strong> ${bookingData.area}</p>
              ${bookingData.deliveryInstructions ? `<p><strong>Instructions:</strong> ${bookingData.deliveryInstructions}</p>` : ''}
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">🕒 Selected Menu Items</h3>
              ${bookingData.selectedMenuItems.map((item: string) => `<p>• ${item}</p>`).join('')}
            </div>
            
            ${bookingData.specialRequirements ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">📝 Special Requirements</h3>
              <p>${bookingData.specialRequirements}</p>
            </div>
            ` : ''}
            
            ${bookingData.budget ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">💰 Budget Range</h3>
              <p>${bookingData.budget.replace('-', ' - ').toUpperCase()}</p>
            </div>
            ` : ''}
            
            <div style="background: #e3f2fd; border: 2px solid #1976d2; border-radius: 8px; padding: 20px; margin-top: 30px;">
              <h3 style="color: #333; margin-bottom: 15px;">⚠️ Action Required</h3>
              <p style="margin: 0; color: #666; font-size: 14px;">
                Please contact the customer within 24 hours to confirm the booking and discuss final details.
              </p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
          <p>PDF attachment included with complete booking details</p>
          <p>Customer has been sent confirmation email</p>
        </div>
      </div>
    `;

    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #d11a5c; font-size: 24px; margin: 0;">🍽️ Craving Cuisine - Fresh Food Delivery in Lahore</h1>
        </div>
        
        <div style="background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
          
          <div style="background: linear-gradient(135deg, #d11a5c, #ffa723); color: white; padding: 30px; text-align: center;">
            <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">✅ Booking Confirmed!</h2>
            <p style="margin: 0 0 15px 0; font-size: 16px; opacity: 0.9;">Your catering service has been reserved</p>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">Booking ID: ${bookingId}</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Confirmation sent to: ${bookingData.email}</p>
            </div>
          </div>
          
          <div style="padding: 30px;">
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">📅 Event Details</h3>
              <p><strong>Event Type:</strong> ${bookingData.eventType.replace('-', ' ').toUpperCase()}</p>
              <p><strong>Date:</strong> ${bookingData.eventDate}</p>
              <p><strong>Time:</strong> ${bookingData.eventTime}</p>
              <p><strong>People:</strong> ${bookingData.peopleCount}</p>
              <p><strong>Package:</strong> ${selectedPackage?.name} (${selectedPackage?.people})</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">📍 Delivery Location</h3>
              <p><strong>Address:</strong> ${bookingData.address}</p>
              <p><strong>Area:</strong> ${bookingData.area}</p>
              ${bookingData.deliveryInstructions ? `<p><strong>Instructions:</strong> ${bookingData.deliveryInstructions}</p>` : ''}
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">🕒 Selected Menu Items</h3>
              ${bookingData.selectedMenuItems.map((item: string) => `<p>• ${item}</p>`).join('')}
            </div>
            
            ${bookingData.budget ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #d11a5c; border-bottom: 2px solid #ffa723; padding-bottom: 10px; margin-bottom: 15px;">💰 Budget Range</h3>
              <p>${bookingData.budget.replace('-', ' - ').toUpperCase()}</p>
            </div>
            ` : ''}
            
            <div style="background: #fef3c7; border: 2px solid #ffa723; border-radius: 8px; padding: 20px; margin-top: 30px;">
              <h3 style="color: #333; margin-bottom: 15px;">✉️ Contact Us</h3>
              <p><strong>📞 Phone:</strong> +92 301 6828719</p>
              <p><strong>✉️ Email:</strong> muhammadhamidofficial0@gmail.com</p>
              <p style="margin-top: 15px; color: #666; font-size: 14px;">
                We'll contact you within 24 hours to confirm your booking and discuss final details.
              </p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
          <p>Confirmation emails sent to you and our team</p>
          <p>Booking valid for 7 days from confirmation</p>
        </div>
      </div>
    `;

    // Create plain text versions for fallback
    const adminTextContent = `
🍽️ NEW BOOKING RECEIVED - CRAVING CUISINE
==========================================

Booking ID: ${bookingId}
Date: ${new Date().toLocaleDateString('en-GB')} at ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}

CUSTOMER INFORMATION:
====================
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Company: ${bookingData.company || 'N/A'}

EVENT DETAILS:
==============
Event Type: ${bookingData.eventType.replace('-', ' ').toUpperCase()}
Date: ${bookingData.eventDate}
Time: ${bookingData.eventTime}
People: ${bookingData.peopleCount}
Package: ${selectedPackage?.name} (${selectedPackage?.people})

DELIVERY LOCATION:
==================
Address: ${bookingData.address}
Area: ${bookingData.area}
${bookingData.deliveryInstructions ? `Instructions: ${bookingData.deliveryInstructions}` : ''}

SELECTED MENU ITEMS:
====================
${bookingData.selectedMenuItems.map((item: string) => `• ${item}`).join('\n')}

${bookingData.specialRequirements ? `SPECIAL REQUIREMENTS:\n${bookingData.specialRequirements}\n` : ''}
${bookingData.budget ? `BUDGET RANGE: ${bookingData.budget.replace('-', ' - ').toUpperCase()}\n` : ''}

⚠️  ACTION REQUIRED:
===================
Please contact the customer within 24 hours to confirm the booking and discuss final details.

CONTACT INFORMATION:
===================
Phone: +92 301 6828719
Email: muhammadhamidofficial0@gmail.com

PDF attachment included with complete booking details.
Customer has been sent confirmation email.

Thank you for using Craving Cuisine booking system!
    `.trim();

    const customerTextContent = `
✅ BOOKING CONFIRMED - CRAVING CUISINE
=====================================

Booking ID: ${bookingId}
Date: ${new Date().toLocaleDateString('en-GB')} at ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}

Dear ${bookingData.name},

Thank you for choosing Craving Cuisine for your catering needs! We're excited to serve you.

YOUR BOOKING SUMMARY:
====================
Event Type: ${bookingData.eventType.replace('-', ' ').toUpperCase()}
Date: ${bookingData.eventDate}
Time: ${bookingData.eventTime}
People: ${bookingData.peopleCount}
Package: ${selectedPackage?.name} (${selectedPackage?.people})

DELIVERY LOCATION:
==================
Address: ${bookingData.address}
Area: ${bookingData.area}
${bookingData.deliveryInstructions ? `Instructions: ${bookingData.deliveryInstructions}` : ''}

SELECTED MENU ITEMS:
====================
${bookingData.selectedMenuItems.map((item: string) => `• ${item}`).join('\n')}

${bookingData.budget ? `BUDGET RANGE: ${bookingData.budget.replace('-', ' - ').toUpperCase()}\n` : ''}

NEXT STEPS:
===========
• Our team will contact you within 24 hours to confirm final details
• We'll discuss pricing based on your selected package and menu items
• Final confirmation will be sent 48 hours before your event

CONTACT US:
===========
📞 Phone: +92 301 6828719
✉️ Email: muhammadhamidofficial0@gmail.com

Thank you for choosing Craving Cuisine!
We look forward to making your event memorable!

Best regards,
The Craving Cuisine Team

Confirmation emails sent to you and our team.
Booking valid for 7 days from confirmation.
    `.trim();

    // Generate PDF
    const pdfBuffer = generatePDFBuffer(bookingData, bookingId);
    const pdfBase64 = pdfBuffer.toString('base64');

    // Send emails using Web3Forms - simplified approach
    const emailPromises = [
      // Email to admin
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '69a4067a-c588-4d8d-aee5-dc17f82781bb',
          subject: `New Booking - ${bookingId} - ${bookingData.name}`,
          from_name: 'Craving Cuisine Booking System',
          replyto: bookingData.email,
          to: 'muhammadhamidofficial0@gmail.com',
          message: adminTextContent
        }),
      }),
      
      // Email to customer
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '69a4067a-c588-4d8d-aee5-dc17f82781bb',
          subject: `Booking Confirmation - ${bookingId} - Craving Cuisine`,
          from_name: 'Craving Cuisine',
          replyto: 'muhammadhamidofficial0@gmail.com',
          to: bookingData.email,
          message: customerTextContent
        }),
      })
    ];

    // Wait for both emails to be sent
    const results = await Promise.allSettled(emailPromises);
    
    // Check if at least one email was sent successfully
    const successCount = results.filter(result => result.status === 'fulfilled').length;
    
    if (successCount > 0) {
      return NextResponse.json({ 
        success: true, 
        bookingId,
        message: 'Booking confirmed and emails sent successfully' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        bookingId,
        message: 'Booking confirmed but email delivery failed' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process booking' 
    }, { status: 500 });
  }
}
