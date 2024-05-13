import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'node:fs'
import { PropertyAnnounce } from '~/models/PropertyAnnounce'

export type GetFlatsResponse = {
  data: PropertyAnnounce[]
  page: number
  pageSize: number
  totalPages: number
  recordsCount: number
}
export async function GET(req: NextRequest) {
  const filterByCity = req.nextUrl.searchParams.get('filterByCity')
  const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
  const pageSize = parseInt(req.nextUrl.searchParams.get('pageSize') || '4')
  try {
    const flatsJson = await fs.readFile(
      process.cwd() + '/assets/flats.json',
      'utf-8',
    )
    const items = JSON.parse(flatsJson) as PropertyAnnounce[]
    const offSet = (page - 1) * pageSize

    const filteredItems = filterByCity
      ? items.filter((item) => item.City === filterByCity)
      : items

    const paginatedItems = filteredItems.slice(offSet, offSet + pageSize)

    return NextResponse.json(
      {
        data: paginatedItems,
        page,
        pageSize,
        totalPages: Math.ceil(filteredItems.length / pageSize),
        recordsCount: filteredItems.length,
      } satisfies GetFlatsResponse,
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      { statusText: 'Fail to load file' },
      { status: 500 },
    )
  }
}
