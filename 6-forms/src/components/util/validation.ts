export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength
}

export function isNotEmpty(value: string): boolean {
  return value.trim() !== ''
}

export function isDefined(value: string): boolean {
  return !value
}
