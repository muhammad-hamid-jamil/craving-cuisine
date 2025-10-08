import jsPDF from 'jspdf';

const packages = {
  'small-office': { name: 'Small Office', people: '5-20 People', color: '#d11a5c' },
  'medium-office': { name: 'Medium Office', people: '20-80 People', color: '#ffa723' },
  'large-events': { name: 'Large Events', people: '80-150 People', color: '#059669' }
};

export const generateBookingPDF = (bookingData: any, bookingId: string) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  let yPosition = 20;

  // Helper function to add text with word wrap
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12, color: string = '#000000', isBold: boolean = false) => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y);
    return y + (lines.length * fontSize * 0.35);
  };

  // Helper function to add line
  const addLine = (x1: number, y1: number, x2: number, y2: number, color: string = '#d11a5c', width: number = 0.5) => {
    pdf.setDrawColor(color);
    pdf.setLineWidth(width);
    pdf.line(x1, y1, x2, y2);
  };

  // Helper function to add circle
  const addCircle = (x: number, y: number, radius: number, fillColor: string) => {
    pdf.setFillColor(fillColor);
    pdf.circle(x, y, radius, 'F');
  };

  // Date and Time at top
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-GB');
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  addText(`${dateStr}, ${timeStr}`, 20, 15, pageWidth - 40, 10, '#666666');

  // Company Name
  addText('Craving Cuisine - Fresh Food Delivery in Lahore', pageWidth / 2, 25, pageWidth - 40, 16, '#d11a5c', true);
  
  yPosition = 35;

  // Main Card Background
  pdf.setFillColor(255, 255, 255);
  pdf.roundedRect(15, yPosition, pageWidth - 30, pageHeight - yPosition - 20, 3, 3, 'F');
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(0.5);
  pdf.roundedRect(15, yPosition, pageWidth - 30, pageHeight - yPosition - 20, 3, 3, 'S');

  yPosition += 15;

  // Header Section with Gradient Effect
  pdf.setFillColor(209, 26, 92); // #d11a5c
  pdf.roundedRect(20, yPosition, pageWidth - 40, 35, 2, 2, 'F');
  
  addText('Booking Confirmed!', pageWidth / 2, yPosition + 15, pageWidth - 40, 18, '#ffffff', true);
  addText('Your catering service has been reserved', pageWidth / 2, yPosition + 22, pageWidth - 40, 10, '#ffffff');
  addText('Booking ID', 25, yPosition + 30, 50, 8, '#ffffff');
  addText(bookingId, 25, yPosition + 33, 50, 12, '#ffffff', true);
  addText('Confirmation Email Sent', pageWidth - 60, yPosition + 30, 50, 8, '#ffffff');
  addText(bookingData.email, pageWidth - 60, yPosition + 33, 50, 10, '#ffffff', true);

  yPosition += 50;

  // Event Details Section
  addCircle(30, yPosition + 8, 3, '#ffa723');
  addText('Event Details', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
  yPosition += 20;

  const selectedPackage = packages[bookingData.selectedPackage as keyof typeof packages];
  const eventInfo = [
    `Event Type: ${bookingData.eventType.replace('-', ' ').toUpperCase()}`,
    `Date: ${bookingData.eventDate}`,
    `Time: ${bookingData.eventTime}`,
    `People: ${bookingData.peopleCount}`,
    `Package: ${selectedPackage?.name || bookingData.selectedPackage}`
  ];

  eventInfo.forEach(info => {
    yPosition = addText(info, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 3;
  });

  yPosition += 10;

  // Delivery Location Section
  addCircle(30, yPosition + 8, 3, '#ffa723');
  addText('Delivery Location', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
  yPosition += 20;

  yPosition = addText(`Address: ${bookingData.address}`, 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 5;
  yPosition = addText(`Area: ${bookingData.area}`, 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 5;

  if (bookingData.deliveryInstructions) {
    yPosition = addText(`Instructions: ${bookingData.deliveryInstructions}`, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 5;
  }

  yPosition += 10;

  // Selected Menu Items Section
  addCircle(30, yPosition + 8, 3, '#ffa723');
  addText('Selected Menu Items', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
  yPosition += 20;

  bookingData.selectedMenuItems.forEach((item: string) => {
    yPosition = addText(`• ${item}`, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 3;
  });

  yPosition += 10;

  // Budget Range Section
  if (bookingData.budget) {
    addCircle(30, yPosition + 8, 3, '#ffa723');
    addText('Budget Range', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
    yPosition += 20;
    yPosition = addText(bookingData.budget.replace('-', ' - ').toUpperCase(), 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 10;
  }

  // Special Requirements Section
  if (bookingData.specialRequirements) {
    addCircle(30, yPosition + 8, 3, '#ffa723');
    addText('Special Requirements', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
    yPosition += 20;
    yPosition = addText(bookingData.specialRequirements, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 10;
  }

  // Contact Us Section (Highlighted Box)
  yPosition += 10;
  pdf.setFillColor(254, 243, 199); // #fef3c7
  pdf.setDrawColor(255, 167, 35); // #ffa723
  pdf.setLineWidth(1);
  pdf.roundedRect(20, yPosition, pageWidth - 40, 40, 2, 2, 'FD');

  addCircle(30, yPosition + 15, 3, '#ffa723');
  addText('Contact Us', 40, yPosition + 17, pageWidth - 60, 12, '#333333', true);
  yPosition += 25;

  addText('📞 +92 301 6828719', 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 5;
  addText('✉️ muhammadhamidofficial0@gmail.com', 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 8;
  addText('We\'ll contact you within 24 hours to confirm your booking and discuss final details.', 40, yPosition, pageWidth - 60, 9, '#666666');

  // Footer Notes
  yPosition = pageHeight - 25;
  addText('Confirmation emails sent to you and our team', pageWidth / 2, yPosition, pageWidth - 40, 8, '#666666');
  addText('Booking valid for 7 days from confirmation', pageWidth / 2, yPosition + 5, pageWidth - 40, 8, '#666666');

  return pdf;
};

export const generatePDFBuffer = (bookingData: any, bookingId: string): Buffer => {
  const pdf = generateBookingPDF(bookingData, bookingId);
  return Buffer.from(pdf.output('arraybuffer'));
};
