// import React, { Fragment, useState } from 'react'
//
// function HaveClimbedCheckBox () {
//   const [addHaveClimbed, setAddHaveClimbed] = useState(false)
//
//   return (
//     <Fragment>
//       <input
//         className="form-check-input"
//         type="checkbox"
//         id="addExtraCheese"
//         value={addHaveClimbed}
//         onChange={e => setAddHaveClimbed(e.target.checked)}
//       />
//     </Fragment>
//   )
// }
//
// export default HaveClimbedCheckBox

import React from 'react'
import { useForm } from 'react-hook-form'

const Example = () => {
  const onSubmit = data => {
    alert(JSON.stringify(data))
  }
  const { handleSubmit, register, errors } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          ref={register({ required: 'This is required' })}
          name="example_1"
          value={true}
          type="checkbox"
        />
        Example 1 (basic input)
      </label>
      {errors.example_1 && <p className="error">{errors.example_1.message}</p>}
      <br />
      <button type="submit">submit</button>
    </form>
  )
}

export default Example
