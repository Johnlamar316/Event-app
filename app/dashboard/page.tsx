"use client";
import React, { useState } from "react";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar, Dropdown, Select } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { menuItems, items } from "../mock/mock";
import {
  MainLayout,
  MainHeader,
  Logo,
  ModuleLogo,
  DropdownWrapper,
} from "../../styled-components/shared/index";
import MenuItem from "../../types/index";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selectedItem = menuItems.find((item) => item.key === selectedKey);

  const handleMenuClick = ({ key }: { key: React.Key | string }) => {
    if (key === selectedKey && !collapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
      setSelectedKey(key as string);
    }
  };

  const renderMenuItems = (items: MenuItem[]): React.ReactNode => {
    return items.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        );
      }
    });
  };

  return (
    <MainLayout>
      <Sider collapsed={true} theme={"light"}>
        <Logo>
          <h1>LOGO</h1>
        </Logo>
        <Menu
          theme={"light"}
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handleMenuClick}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      {selectedKey && !collapsed && selectedItem?.children && (
        <Sider theme={"light"} collapsed={collapsed}>
          <ModuleLogo>
            <h1>MODULE LOGO</h1>
          </ModuleLogo>
          <DropdownWrapper>
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}>
              <h1>Ikota Account</h1>
            </Dropdown>
          </DropdownWrapper>
          <Menu
            theme={"light"}
            defaultSelectedKeys={[]}
            mode="inline"
            selectedKeys={selectedKey ? [selectedKey] : []}
            onSelect={handleMenuClick}>
            {renderMenuItems(selectedItem.children)}
          </Menu>
        </Sider>
      )}
      <Layout>
        <MainHeader>
          <div>
            <Select
              showSearch
              value={"searching me...."}
              placeholder={"Search..."}
              style={{ marginRight: "40px" }}
            />
            <BellOutlined style={{ marginRight: "50px", fontSize: "18px" }} />
            <p style={{ marginRight: "4px" }}>Nondefyde@gmail.com</p>
            <Avatar
              style={{ marginRight: "40px" }}
              size="large"
              icon={<UserOutlined />}
            />
          </div>
        </MainHeader>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1px",
            background: "#ffffff",
          }}>
          <h1>Dashboard</h1>
        </Content>
        <Footer style={{ textAlign: "center" }} />
      </Layout>
    </MainLayout>
  );
}
