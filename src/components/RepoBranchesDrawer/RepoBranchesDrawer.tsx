import { Drawer } from "antd";
import { FC } from "react";

interface RepoBranchesDrawerInt {
  visible: boolean;
  onClose: any;
  item?: any;
}

const RepoBranchesDrawer: FC<RepoBranchesDrawerInt> = (
  { visible,
    onClose,
    item }
) => {
  return (
    <Drawer
      title={item.name}
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <p>Full name: {item.full_name}.</p>
      <p>Language: {item.language} </p>
      <p>Description: {item.description}</p>
    </Drawer>
  );
};

export default RepoBranchesDrawer;
