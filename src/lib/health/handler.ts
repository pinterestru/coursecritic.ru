import 'server-only'
import { NextResponse } from 'next/server'

import { activeSiteId } from '@/config/sites/active.generated'

export async function GET() {
  return NextResponse.json(
    { status: 'ok', site: activeSiteId, ts: Date.now() },
    { headers: { 'cache-control': 'no-store' } }
  )
}
