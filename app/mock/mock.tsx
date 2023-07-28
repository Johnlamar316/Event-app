import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MenuItem from "../../types/index";

const menuItems: MenuItem[] = [
  {
    key: "sub1",
    icon: <PieChartOutlined />,
    label: "App One",
    children: [
      {
        key: "40",
        icon: <TeamOutlined />,
        label: "Option 1",
        children: [
          {
            key: "11",
            label: "Tomas",
          },
          {
            key: "12",
            label: "Chris",
          },
        ],
      },
      {
        key: "80",
        icon: <TeamOutlined />,
        label: "Option 2",
        children: [
          {
            key: "20",
            label: "Emmanuel",
          },
          {
            key: "21",
            label: "Rebecca",
          },
        ],
      },
    ],
  },
  {
    key: "sub2",
    icon: <DesktopOutlined />,
    label: "App two",
    children: [
      {
        key: "6",
        icon: <TeamOutlined />,
        label: "Option 1",
        children: [
          {
            key: "20",
            label: "Tomas",
          },
        ],
      },
      {
        key: "8",
        icon: <TeamOutlined />,
        label: "Option 2",
      },
    ],
  },
  {
    key: "sub3",
    icon: <UserOutlined />,
    label: "App Three",
    children: [
      {
        key: "6",
        icon: <TeamOutlined />,
        label: "Option 1",
        children: [
          {
            key: "20",
            label: "Tomas",
          },
        ],
      },
      {
        key: "8",
        icon: <TeamOutlined />,
        label: "Option 2",
      },
    ],
  },
  {
    key: "sub4",
    icon: <TeamOutlined />,
    label: "App Four",
    children: [
      {
        key: "6",
        icon: <TeamOutlined />,
        label: "Option 1",
        children: [
          {
            key: "20",
            label: "Tomas",
            icon: <TeamOutlined />,
          },
        ],
      },
      {
        key: "8",
        icon: <TeamOutlined />,
        label: "Option4",
      },
    ],
  },
  {
    key: "sub5",
    icon: <FileOutlined />,
    label: "App Five",
  },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>Idumota Account</a>,
  },
  {
    key: "2",
    label: <a>Obalende Account</a>,
  },
  {
    key: "3",
    label: <a>Oshodi Account</a>,
  },
];

export { menuItems, items };
