export const isString = (str: any) => {
  if (str != null && typeof str.valueOf() === 'string') {
    return true
  }
  return false
}
