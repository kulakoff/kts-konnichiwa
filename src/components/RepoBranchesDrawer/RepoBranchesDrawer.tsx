import { Drawer, List, Typography } from "antd";
import { FC } from "react";

const { Link } = Typography;
interface RepoBranchesDrawerInt {
  visible: boolean;
  onClose: any;
  drawData?: any;
}

const RepoBranchesDrawer: FC<RepoBranchesDrawerInt> = (
  { visible,
    onClose,
    drawData }
) => {
  return (
    <Drawer
      title="Branches list"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <List
        bordered
        dataSource={drawData}
        renderItem={(item: any) => (
          <List.Item>
            <Link href={item.commit.url} target="_blank">
              {item.name}
            </Link>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default RepoBranchesDrawer;
