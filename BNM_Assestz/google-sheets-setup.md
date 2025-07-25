# Google Sheets Integration Setup

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Elite Properties India - Contact Form Responses"
4. Add these headers in the first row:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Message
   - F1: Consent Given
   - G1: Terms Accepted

## Step 2: Set up Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const timestamp = new Date();
    const name = data.name || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || '';
    const consent = data.consent ? 'Yes' : 'No';
    const terms = data.terms ? 'Yes' : 'No';
    
    sheet.appendRow([timestamp, name, email, phone, message, consent, terms]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Elite Properties India - Contact Form API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app"
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL (you'll need this for the form)

## Step 4: Update the Form
The JavaScript in script.js has been updated to send data to Google Sheets.

## Important Notes:
- The Google Apps Script URL will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
- Replace `YOUR_SCRIPT_ID` in the JavaScript file with your actual script ID
- The form will automatically send data to your Google Sheet when submitted
- Each submission will create a new row with timestamp and all form data
- You can view all responses in real-time in your Google Sheet

## Security:
- The script only accepts POST requests
- Data is validated before being added to the sheet
- Error handling is included for failed submissions 