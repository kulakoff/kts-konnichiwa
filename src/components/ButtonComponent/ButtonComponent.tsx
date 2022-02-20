import { Button } from "antd"
import { FC } from "react"

interface ButtonComponentProps {
  children: React.ReactChild;
  disabled: boolean;
  onClick: any; //TODO: указать вероный  тип для callback
}



const ButtonComponent: FC<ButtonComponentProps> = ({ children, disabled, onClick }) => {
  return <Button
    type="primary"
    shape="circle"
    icon={children}
    disabled={disabled}
    style={{ marginLeft: 5 }}
    onClick={onClick} />

}

export default ButtonComponent
