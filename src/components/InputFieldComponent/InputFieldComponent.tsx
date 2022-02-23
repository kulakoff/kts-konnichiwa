import { Input } from "antd"
import React, { FC } from "react"

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChange: any; //TODO: указать верный тип для callback
  onPressEnter: any
}

const InputFieldComponent: FC<InputFieldProps> = ({ value, placeholder, onChange, onPressEnter }) => {
  return (
    <Input placeholder={placeholder} allowClear onChange={onChange} value={value} onPressEnter={onPressEnter} />
  )
}

export default InputFieldComponent