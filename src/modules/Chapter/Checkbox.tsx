import * as React from 'react'
import '@material/react-checkbox/dist/checkbox.css'
import MaterialCheckBox from '@material/react-checkbox'

interface Props {
  checked: boolean
  children: string
  handleChange: () => void
}
const Checkbox = ({checked, children, handleChange}: Props) => (
  <label className="flex items-center">
    <div className="mdc-form-field">
      <MaterialCheckBox checked={checked} onChange={handleChange} />
    </div>
    {children}
  </label>
)

export default Checkbox
