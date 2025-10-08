import jsPDF from 'jspdf';

const packages = {
  'small-office': { name: 'Small Office', people: '5-20 People', color: '#d11a5c' },
  'medium-office': { name: 'Medium Office', people: '20-80 People', color: '#ffa723' },
  'large-events': { name: 'Large Events', people: '80-150 People', color: '#059669' }
};

export const generateBookingPDF = (bookingData: any, bookingId: string) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = 210;
  let yPosition = 20;

  // Helper function to add text
  const addText = (text: string, x: number, y: number, fontSize: number = 12, isBold: boolean = false) => {
    pdf.setFontSize(fontSize);
    if (isBold) {
      pdf.setFont('helvetica', 'bold');
    } else {
      pdf.setFont('helvetica', 'normal');
    }
    pdf.text(text, x, y);
    return y + fontSize * 0.4;
  };

  // Helper function to add simple table
  const addSimpleTable = (data: Array<{label: string, value: string}>, x: number, y: number) => {
    let currentY = y;
    
    data.forEach((row) => {
      // Label
      addText(row.label + ':', x, currentY, 10, true);
      // Value
      addText(row.value, x + 60, currentY, 10, false);
      currentY += 6;
    });
    
    return currentY;
  };

  // Title
  addText('CRAVING CUISINE - BOOKING CONFIRMATION', pageWidth / 2, yPosition, 16, true);
  yPosition += 15;

  // Booking ID
  addText(`Booking ID: ${bookingId}`, 20, yPosition, 12, true);
  yPosition += 10;

  // Date
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString('en-GB');
  const timeStr = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  addText(`Date: ${dateStr} ${timeStr}`, 20, yPosition, 10);
  yPosition += 15;

  // Customer Details
  addText('CUSTOMER DETAILS', 20, yPosition, 12, true);
  yPosition += 8;
  
  const customerData = [
    { label: 'Name', value: bookingData.name },
    { label: 'Email', value: bookingData.email },
    { label: 'Phone', value: bookingData.phone },
    { label: 'Company', value: bookingData.company || 'N/A' }
  ];
  
  yPosition = addSimpleTable(customerData, 20, yPosition);
  yPosition += 10;

  // Event Details
  addText('EVENT DETAILS', 20, yPosition, 12, true);
  yPosition += 8;
  
  const selectedPackage = packages[bookingData.selectedPackage as keyof typeof packages];
  const eventData = [
    { label: 'Event Type', value: bookingData.eventType.replace('-', ' ').toUpperCase() },
    { label: 'Date', value: bookingData.eventDate },
    { label: 'Time', value: bookingData.eventTime },
    { label: 'People', value: bookingData.peopleCount },
    { label: 'Package', value: selectedPackage?.name || bookingData.selectedPackage }
  ];
  
  yPosition = addSimpleTable(eventData, 20, yPosition);
  yPosition += 10;

  // Delivery Location
  addText('DELIVERY LOCATION', 20, yPosition, 12, true);
  yPosition += 8;
  
  const locationData = [
    { label: 'Address', value: bookingData.address },
    { label: 'Area', value: bookingData.area }
  ];
  
  if (bookingData.deliveryInstructions) {
    locationData.push({ label: 'Instructions', value: bookingData.deliveryInstructions });
  }
  
  yPosition = addSimpleTable(locationData, 20, yPosition);
  yPosition += 10;

  // Menu Items
  addText('SELECTED MENU ITEMS', 20, yPosition, 12, true);
  yPosition += 8;
  
  bookingData.selectedMenuItems.forEach((item: string, index: number) => {
    addText(`${index + 1}. ${item}`, 20, yPosition, 10);
    yPosition += 5;
  });
  yPosition += 5;

  // Budget
  if (bookingData.budget) {
    addText('BUDGET RANGE', 20, yPosition, 12, true);
    yPosition += 8;
    addText(bookingData.budget.replace('-', ' - ').toUpperCase(), 20, yPosition, 10);
    yPosition += 10;
  }

  // Special Requirements
  if (bookingData.specialRequirements) {
    addText('SPECIAL REQUIREMENTS', 20, yPosition, 12, true);
    yPosition += 8;
    addText(bookingData.specialRequirements, 20, yPosition, 10);
    yPosition += 10;
  }

  // Footer
  yPosition += 20;
  addText('Thank you for choosing Craving Cuisine!', pageWidth / 2, yPosition, 10, true);
  yPosition += 5;
  addText('Contact: +92 301 6828719', pageWidth / 2, yPosition, 9);
  yPosition += 5;
  addText('Email: muhammadhamidofficial0@gmail.com', pageWidth / 2, yPosition, 9);

  return pdf;
};

export const generatePDFBuffer = (bookingData: any, bookingId: string): Buffer => {
  const pdf = generateBookingPDF(bookingData, bookingId);
  return Buffer.from(pdf.output('arraybuffer'));
};
