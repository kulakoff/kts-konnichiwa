import {Input} from "antd"
import React, { FC } from "react"

interface InputFieldProps {
  value:  string;
  placeholder:string;
  onChange: any //TODO: указать верный тип для callback
}

const InputFieldComponent:FC<InputFieldProps> = ({value,placeholder, onChange}) => {
  return (
    <Input placeholder={placeholder} allowClear onChange={onChange} value={value} />
  )
}

export default InputFieldComponent