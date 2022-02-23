import { FC } from "react"

interface IconComponentType{
  icon: string
}

const IconComponent:FC<IconComponentType> = ({icon}) => {
  return (
    <img src={icon} alt="icon_logo" />
  )
}

export default IconComponent