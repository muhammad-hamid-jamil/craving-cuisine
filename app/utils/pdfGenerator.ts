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
    return y + (lines.length * fontSize * 0.35);
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

  // Date and Time at top right
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-GB');
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  addText(`${dateStr}, ${timeStr}`, pageWidth - 20, 20, 50, 10, '#666666', false, 'right');

  // Company Name centered
  addText('Craving Cuisine - Fresh Food Delivery in Lahore', pageWidth / 2, 35, pageWidth - 40, 16, '#d11a5c', true, 'center');
  
  yPosition = 50;

  // Main Card Background
  addRoundedRect(20, yPosition, pageWidth - 40, pageHeight - yPosition - 30, 8, '#ffffff', '#e5e7eb');

  yPosition += 25;

  // Header Section with Pink Background
  addRoundedRect(25, yPosition, pageWidth - 50, 45, 6, '#d11a5c');
  
  // Booking Confirmed text
  addText('Booking Confirmed!', pageWidth / 2, yPosition + 18, pageWidth - 50, 18, '#ffffff', true, 'center');
  addText('Your catering service has been reserved', pageWidth / 2, yPosition + 25, pageWidth - 50, 10, '#ffffff', false, 'center');
  
  // Booking ID on left
  addText('Booking ID', 30, yPosition + 35, 60, 8, '#ffffff');
  addText(bookingId, 30, yPosition + 38, 60, 12, '#ffffff', true);
  
  // Email on right
  addText('Confirmation Email Sent', pageWidth - 85, yPosition + 35, 60, 8, '#ffffff', false, 'right');
  addText(bookingData.email, pageWidth - 85, yPosition + 38, 60, 10, '#ffffff', true, 'right');

  yPosition += 60;

  // Event Details Section
  addCircle(35, yPosition + 8, 3, '#ffa723');
  addText('Event Details', 45, yPosition + 10, pageWidth - 70, 12, '#333333', true);
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
    yPosition = addText(info, 45, yPosition, pageWidth - 70, 10, '#666666');
    yPosition += 5;
  });

  yPosition += 20;

  // Delivery Location Section
  addCircle(35, yPosition + 8, 3, '#ffa723');
  addText('Delivery Location', 45, yPosition + 10, pageWidth - 70, 12, '#333333', true);
  yPosition += 25;

  yPosition = addText(`Address: ${bookingData.address}`, 45, yPosition, pageWidth - 70, 10, '#666666');
  yPosition += 7;
  yPosition = addText(`Area: ${bookingData.area}`, 45, yPosition, pageWidth - 70, 10, '#666666');
  yPosition += 7;

  if (bookingData.deliveryInstructions) {
    yPosition = addText(`Instructions: ${bookingData.deliveryInstructions}`, 45, yPosition, pageWidth - 70, 10, '#666666');
    yPosition += 7;
  }

  yPosition += 20;

  // Selected Menu Items Section
  addCircle(35, yPosition + 8, 3, '#ffa723');
  addText('Selected Menu Items', 45, yPosition + 10, pageWidth - 70, 12, '#333333', true);
  yPosition += 25;

  bookingData.selectedMenuItems.forEach((item: string) => {
    yPosition = addText(`• ${item}`, 45, yPosition, pageWidth - 70, 10, '#666666');
    yPosition += 5;
  });

  yPosition += 20;

  // Budget Range Section
  if (bookingData.budget) {
    addCircle(35, yPosition + 8, 3, '#ffa723');
    addText('Budget Range', 45, yPosition + 10, pageWidth - 70, 12, '#333333', true);
    yPosition += 25;
    yPosition = addText(bookingData.budget.replace('-', ' - ').toUpperCase(), 45, yPosition, pageWidth - 70, 10, '#666666');
    yPosition += 20;
  }

  // Special Requirements Section
  if (bookingData.specialRequirements) {
    addCircle(35, yPosition + 8, 3, '#ffa723');
    addText('Special Requirements', 45, yPosition + 10, pageWidth - 70, 12, '#333333', true);
    yPosition += 25;
    yPosition = addText(bookingData.specialRequirements, 45, yPosition, pageWidth - 70, 10, '#666666');
    yPosition += 20;
  }

  // Footer Notes
  yPosition = pageHeight - 40;
  addText('Confirmation emails sent to you and our team', pageWidth / 2, yPosition, pageWidth - 40, 8, '#666666', false, 'center');
  addText('Booking valid for 7 days from confirmation', pageWidth / 2, yPosition + 5, pageWidth - 40, 8, '#666666', false, 'center');

  return pdf;
};

export const generatePDFBuffer = (bookingData: any, bookingId: string): Buffer => {
  const pdf = generateBookingPDF(bookingData, bookingId);
  return Buffer.from(pdf.output('arraybuffer'));
};
