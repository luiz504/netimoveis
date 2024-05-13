import { buildApiUrl } from './buildApiUrl'

const baseUrl = 'http://localhost:3000'
const path = 'api/flats'
describe('Util: buildApiUrl', () => {
  it('should throw error if NEXT_PUBLIC_API_URL is not defined', () => {
    expect(() => buildApiUrl(path)).toThrow()
  })
  it('should build api url correctly', () => {
    process.env.NEXT_PUBLIC_API_URL = baseUrl
    expect(buildApiUrl(path)).toBe(`${baseUrl}/${path}`)
  })
  it('should build api url correctly with single trailing slash', () => {
    process.env.NEXT_PUBLIC_API_URL = baseUrl
    expect(buildApiUrl('/' + path)).toBe(`${baseUrl}/${path}`)
  })
})
