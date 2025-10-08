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
  let yPosition = 15;

  // Helper function to add text with proper alignment
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12, color: string = '#000000', isBold: boolean = false, align: 'left' | 'center' | 'right' = 'left') => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y, { align });
    return y + (lines.length * fontSize * 0.4);
  };

  // Helper function to add circle
  const addCircle = (x: number, y: number, radius: number, fillColor: string) => {
    pdf.setFillColor(fillColor);
    pdf.circle(x, y, radius, 'F');
  };

  // Helper function to add rounded rectangle
  const addRoundedRect = (x: number, y: number, width: number, height: number, radius: number, fillColor: string, strokeColor?: string) => {
    if (fillColor) {
      pdf.setFillColor(fillColor);
      pdf.roundedRect(x, y, width, height, radius, radius, 'F');
    }
    if (strokeColor) {
      pdf.setDrawColor(strokeColor);
      pdf.setLineWidth(0.5);
      pdf.roundedRect(x, y, width, height, radius, radius, 'S');
    }
  };

  // Helper function to add section divider
  const addSectionDivider = (y: number) => {
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.3);
    pdf.line(25, y, pageWidth - 25, y);
  };

  // Date and Time at top right
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-GB');
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  addText(`${dateStr}, ${timeStr}`, pageWidth - 20, 20, 50, 10, '#666666', false, 'right');

  // Company Name centered
  addText('Craving Cuisine - Fresh Food Delivery in Lahore', pageWidth / 2, 35, pageWidth - 40, 18, '#d11a5c', true, 'center');
  
  yPosition = 50;

  // Main Card Background with shadow effect
  addRoundedRect(20, yPosition, pageWidth - 40, pageHeight - yPosition - 30, 12, '#ffffff', '#e5e7eb');

  yPosition += 30;

  // Header Section with Pink Background
  addRoundedRect(25, yPosition, pageWidth - 50, 50, 8, '#d11a5c');
  
  // Booking Confirmed text
  addText('Booking Confirmed!', pageWidth / 2, yPosition + 20, pageWidth - 50, 20, '#ffffff', true, 'center');
  addText('Your catering service has been reserved', pageWidth / 2, yPosition + 28, pageWidth - 50, 11, '#ffffff', false, 'center');
  
  // Booking ID on left
  addText('Booking ID', 30, yPosition + 40, 60, 9, '#ffffff');
  addText(bookingId, 30, yPosition + 44, 60, 14, '#ffffff', true);
  
  // Email on right
  addText('Confirmation Email Sent', pageWidth - 90, yPosition + 40, 60, 9, '#ffffff', false, 'right');
  addText(bookingData.email, pageWidth - 90, yPosition + 44, 60, 11, '#ffffff', true, 'right');

  yPosition += 65;

  // Event Details Section
  addCircle(35, yPosition + 8, 4, '#ffa723');
  addText('Event Details', 45, yPosition + 10, pageWidth - 70, 14, '#333333', true);
  yPosition += 25;

  const selectedPackage = packages[bookingData.selectedPackage as keyof typeof packages];
  const eventInfo = [
    `Event Type: ${bookingData.eventType.replace('-', ' ').toUpperCase()}`,
    `Date: ${bookingData.eventDate}`,
    `Time: ${bookingData.eventTime}`,
    `People: ${bookingData.peopleCount}`,
    `Package: ${selectedPackage?.name || bookingData.selectedPackage}`
  ];

  eventInfo.forEach(info => {
    yPosition = addText(info, 45, yPosition, pageWidth - 70, 11, '#666666');
    yPosition += 6;
  });

  yPosition += 15;
  addSectionDivider(yPosition);
  yPosition += 15;

  // Delivery Location Section
  addCircle(35, yPosition + 8, 4, '#ffa723');
  addText('Delivery Location', 45, yPosition + 10, pageWidth - 70, 14, '#333333', true);
  yPosition += 25;

  yPosition = addText(`Address: ${bookingData.address}`, 45, yPosition, pageWidth - 70, 11, '#666666');
  yPosition += 8;
  yPosition = addText(`Area: ${bookingData.area}`, 45, yPosition, pageWidth - 70, 11, '#666666');
  yPosition += 8;

  if (bookingData.deliveryInstructions) {
    yPosition = addText(`Instructions: ${bookingData.deliveryInstructions}`, 45, yPosition, pageWidth - 70, 11, '#666666');
    yPosition += 8;
  }

  yPosition += 15;
  addSectionDivider(yPosition);
  yPosition += 15;

  // Selected Menu Items Section
  addCircle(35, yPosition + 8, 4, '#ffa723');
  addText('Selected Menu Items', 45, yPosition + 10, pageWidth - 70, 14, '#333333', true);
  yPosition += 25;

  bookingData.selectedMenuItems.forEach((item: string) => {
    yPosition = addText(`• ${item}`, 45, yPosition, pageWidth - 70, 11, '#666666');
    yPosition += 6;
  });

  yPosition += 15;

  // Budget Range Section
  if (bookingData.budget) {
    addSectionDivider(yPosition);
    yPosition += 15;
    addCircle(35, yPosition + 8, 4, '#ffa723');
    addText('Budget Range', 45, yPosition + 10, pageWidth - 70, 14, '#333333', true);
    yPosition += 25;
    yPosition = addText(bookingData.budget.replace('-', ' - ').toUpperCase(), 45, yPosition, pageWidth - 70, 11, '#666666');
    yPosition += 20;
  }

  // Special Requirements Section
  if (bookingData.specialRequirements) {
    addSectionDivider(yPosition);
    yPosition += 15;
    addCircle(35, yPosition + 8, 4, '#ffa723');
    addText('Special Requirements', 45, yPosition + 10, pageWidth - 70, 14, '#333333', true);
    yPosition += 25;
    yPosition = addText(bookingData.specialRequirements, 45, yPosition, pageWidth - 70, 11, '#666666');
    yPosition += 20;
  }

  // Footer Notes with better styling
  yPosition = pageHeight - 50;
  addSectionDivider(yPosition);
  yPosition += 15;
  
  addText('Confirmation emails sent to you and our team', pageWidth / 2, yPosition, pageWidth - 40, 9, '#666666', false, 'center');
  addText('Booking valid for 7 days from confirmation', pageWidth / 2, yPosition + 8, pageWidth - 40, 9, '#666666', false, 'center');

  return pdf;
};

export const generatePDFBuffer = (bookingData: any, bookingId: string): Buffer => {
  const pdf = generateBookingPDF(bookingData, bookingId);
  return Buffer.from(pdf.output('arraybuffer'));
};
