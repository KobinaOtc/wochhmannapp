import { parsePhoneNumberFromString } from 'libphonenumber-js'

// Use to check if a given phone number is valid.
export const validatePhoneNumber = number => {
  if (!number || Object.prototype.toString.call(number) !== '[object String]') return false
  let phoneNumber = number
  let digits = number
  // Remove everything but the numbers from the phone number
  phoneNumber = phoneNumber.replace(/\D/g, '')
  // If length is 11, and the first digit === 1, second digit !== 1 - good phone number
  if (phoneNumber.length === 11 && phoneNumber[0] === '1' && phoneNumber[1] !== '1') {
    digits = `+${phoneNumber}`
  }
  // If length is 10, and the first digit !== 1 - good phone number
  if (phoneNumber.length === 10 && phoneNumber[0] !== '1') {
    digits = `+1${phoneNumber}`
  }

  const phoneNumberValidation = parsePhoneNumberFromString(digits)
  if (phoneNumberValidation === undefined) return false
  const isValid = phoneNumberValidation.isValid()
  if (isValid) {
    return digits
  } else {
    return false
  }
}
