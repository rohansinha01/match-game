import React from 'react'

const Input = () => {
const firstRow: string[] = ["red", "blue", 'green']
const secondRow: string[] = ["red", "blue", 'green']
  return (
    <div className='text-amber-50'>
        <label htmlFor="my-select">Choose an option:</label>
<select id="my-select" name="my-select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
    </div>
  )
}

export default Input