import { NextResponse } from 'next/server'

// Route d'authentification simplifiée pour éviter les crashes sur Netlify
export async function GET() {
  return NextResponse.json({ 
    message: 'Authentication endpoint',
    status: 'active'
  })
}

export async function POST() {
  return NextResponse.json({ 
    message: 'Authentication endpoint',
    status: 'active'
  })
}
