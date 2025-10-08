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

  // Date and Time at top right
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-GB');
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  addText(`${dateStr}, ${timeStr}`, pageWidth - 20, 15, 50, 10, '#666666', false, 'right');

  // Company Name centered
  addText('Craving Cuisine - Fresh Food Delivery in Lahore', pageWidth / 2, 25, pageWidth - 40, 16, '#d11a5c', true, 'center');
  
  yPosition = 35;

  // Main Card Background
  addRoundedRect(15, yPosition, pageWidth - 30, pageHeight - yPosition - 20, 8, '#ffffff', '#e5e7eb');

  yPosition += 20;

  // Header Section with Pink Background
  addRoundedRect(20, yPosition, pageWidth - 40, 40, 6, '#d11a5c');
  
  // Booking Confirmed text
  addText('Booking Confirmed!', pageWidth / 2, yPosition + 15, pageWidth - 40, 18, '#ffffff', true, 'center');
  addText('Your catering service has been reserved', pageWidth / 2, yPosition + 22, pageWidth - 40, 10, '#ffffff', false, 'center');
  
  // Booking ID on left
  addText('Booking ID', 25, yPosition + 30, 50, 8, '#ffffff');
  addText(bookingId, 25, yPosition + 33, 50, 12, '#ffffff', true);
  
  // Email on right
  addText('Confirmation Email Sent', pageWidth - 80, yPosition + 30, 50, 8, '#ffffff', false, 'right');
  addText(bookingData.email, pageWidth - 80, yPosition + 33, 50, 10, '#ffffff', true, 'right');

  yPosition += 55;

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
    yPosition += 4;
  });

  yPosition += 15;

  // Delivery Location Section
  addCircle(30, yPosition + 8, 3, '#ffa723');
  addText('Delivery Location', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
  yPosition += 20;

  yPosition = addText(`Address: ${bookingData.address}`, 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 6;
  yPosition = addText(`Area: ${bookingData.area}`, 40, yPosition, pageWidth - 60, 10, '#666666');
  yPosition += 6;

  if (bookingData.deliveryInstructions) {
    yPosition = addText(`Instructions: ${bookingData.deliveryInstructions}`, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 6;
  }

  yPosition += 15;

  // Selected Menu Items Section
  addCircle(30, yPosition + 8, 3, '#ffa723');
  addText('Selected Menu Items', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
  yPosition += 20;

  bookingData.selectedMenuItems.forEach((item: string) => {
    yPosition = addText(`• ${item}`, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 4;
  });

  yPosition += 15;

  // Budget Range Section
  if (bookingData.budget) {
    addCircle(30, yPosition + 8, 3, '#ffa723');
    addText('Budget Range', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
    yPosition += 20;
    yPosition = addText(bookingData.budget.replace('-', ' - ').toUpperCase(), 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 15;
  }

  // Special Requirements Section
  if (bookingData.specialRequirements) {
    addCircle(30, yPosition + 8, 3, '#ffa723');
    addText('Special Requirements', 40, yPosition + 10, pageWidth - 60, 12, '#333333', true);
    yPosition += 20;
    yPosition = addText(bookingData.specialRequirements, 40, yPosition, pageWidth - 60, 10, '#666666');
    yPosition += 15;
  }

  // Footer Notes
  yPosition = pageHeight - 30;
  addText('Confirmation emails sent to you and our team', pageWidth / 2, yPosition, pageWidth - 40, 8, '#666666', false, 'center');
  addText('Booking valid for 7 days from confirmation', pageWidth / 2, yPosition + 5, pageWidth - 40, 8, '#666666', false, 'center');

  return pdf;
};

export const generatePDFBuffer = (bookingData: any, bookingId: string): Buffer => {
  const pdf = generateBookingPDF(bookingData, bookingId);
  return Buffer.from(pdf.output('arraybuffer'));
};
