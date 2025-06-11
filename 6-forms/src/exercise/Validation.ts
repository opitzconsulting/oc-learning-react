export function validateName(value: string): string[] {
  const errors: string[] = []
  if (!value) errors.push('Bitte den Namen ausfüllen.')
  if (value && value.length < 3) errors.push('Bitte einen Namen mit mindestens 3 Zeichen angeben.')
  if (value && value.length > 20) errors.push('Bitte einen Namen mit maximal 20 Zeichen angeben.')
  return errors
}

export function validateMessage(value: string): string[] {
  const errors: string[] = []
  if (!value) errors.push('Bitte die Nachricht angeben.')
  if (value && value.length < 10) errors.push('Bitte eine Nachricht mit mindestens 10 Zeichen angeben.')
  if (value && value.length > 30) errors.push('Bitte eine Nachricht mit maximal 30 Zeichen angeben.')
  return errors
}