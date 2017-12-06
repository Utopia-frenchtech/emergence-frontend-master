/**
 * Build a simple object validator, that checks for required fields
 * @param {*} requiredFields
 */
 export const makeObjectValidator = (fieldsDescription) => (object) => {
   for (const fieldName in Object.keys(fieldsDescription)) {
     const val = object[fieldName]
     const { type, required } = fieldsDescription[fieldName]
     if (required && typeof val === 'undefined' || val === null) return false
     if (!(val instanceof type)) return false
   }
   return true
 }
