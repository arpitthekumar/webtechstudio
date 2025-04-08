import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'RAR files are processed on the client side in this application.'
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({
    message: 'RAR files are processed on the client side in this application.'
  });
} 