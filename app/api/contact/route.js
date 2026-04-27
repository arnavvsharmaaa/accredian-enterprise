import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Parse the incoming request body as JSON
    const body = await request.json();
    const { name, company, email, phone, teamSize, message } = body;

    // 2. Define the exact required fields needed for processing
    const requiredFields = { name, company, email, phone, teamSize };
    const missingFields = [];

    // 3. Iterate through required fields to check for undefined, null, or empty string values
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value || String(value).trim() === '') {
        missingFields.push(key);
      }
    }

    // 4. If there are missing fields, immediately reject the request with a 400 Bad Request
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Missing required fields", 
          missingFields 
        },
        { status: 400 }
      );
    }

    // 5. Validate the email format using a standard regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid email format" 
        },
        { status: 400 }
      );
    }

    // 6. If all validation passes, generate a timestamp and log the full payload securely to the server console
    console.log(`[${new Date().toISOString()}] New Contact Enquiry Received:`, {
      name,
      company,
      email,
      phone,
      teamSize,
      message: message || "(No message provided)"
    });

    // 7. Return a successful 200 OK response with the sanitized data payload
    return NextResponse.json(
      { 
        success: true, 
        message: "Enquiry received successfully",
        data: { name, company, email, teamSize } 
      },
      { status: 200 }
    );

  } catch (error) {
    // 8. Catch any malformed JSON payloads or catastrophic server errors gracefully
    return NextResponse.json(
      { 
        success: false, 
        error: "Invalid request format or internal server error" 
      },
      { status: 500 }
    );
  }
}
