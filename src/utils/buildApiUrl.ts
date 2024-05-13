export function buildApiUrl(value: string) {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined')
  }

  const startWithSlash = value[0] === '/'

  return `${process.env.NEXT_PUBLIC_API_URL}${startWithSlash ? '' : '/'}${value}`
}
