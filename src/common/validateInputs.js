// Pass in this.state.inputs as an object... or any object really.
// Check for empties. Returns a new object.
export const validateInputs = inputs => {
  // Copy inputs object so we don't accidently mutate this.state.inputs
  const inputsObject = { ...inputs }
  // Create new object to hold property names + booleans
  const verifyObject = {}
  // Create new array of inputs key names.
  const inputsKeys = Object.keys(inputs)

  // Loop through new array to look up value in inputsObject.
  for (let i = 0; i < inputsKeys.length; i++) {
    const key = inputsKeys[i]
    // Check for nested objects
    if (inputs[key].constructor === Object) {
      const nestedObject = validateInputs(inputs[key])
      verifyObject[key] = nestedObject
    } else if (inputsObject[key] === '') {
      // Update the new object with property name : boolean
      verifyObject[key] = false
    } else {
      verifyObject[key] = true
    }
  }

  // Return new obect with input's names as the keys and booleans as the values.
  return verifyObject
}
