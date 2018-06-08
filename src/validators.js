export const required = value => value ? undefined: 'This is a required field.',
  
  nonEmpty = value => value.trim()!=='' ? undefined: 'This field cannot be empty',
  
  isTrimmed = value => value.trim()===value ? undefined: 'This field cannot start or end with a space',
  
  length = length => value => 
    length.min && value.length < length.min ? 
      `Must be at least ${length.min} characters long` : 
      length.max && value.length > length.max ?
        `Must be at most ${length.max} characters long` : undefined,
  
  matches = field => (value, allValues) => 
    field in allValues && value.trim() === allValues[field].trim() ? 
      undefined : 'Fields do not match. Please try again.';