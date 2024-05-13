import { NextResponse } from 'next/server'
import { promises as fs } from 'node:fs'
import { PropertyAnnounce } from '~/models/PropertyAnnounce'
export async function GET() {
  try {
    const flatsJson = await fs.readFile(
      process.cwd() + '/assets/flats.json',
      'utf-8',
    )

    const propertyAnnounces = JSON.parse(flatsJson) as PropertyAnnounce[]
    const citiesSet = new Set<string>()
    propertyAnnounces.forEach((announce) => {
      citiesSet.add(announce.City)
    })

    const response = citiesSet.size ? Array.from(citiesSet) : []

    return NextResponse.json({ data: response }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { statusText: 'Fail to load file' },
      { status: 500 },
    )
  }
}
