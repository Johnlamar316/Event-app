import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;

const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

const MainHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  background: #ffffff;
  & > div {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModuleLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #e8e8e8;
  padding: 14px 0;
  & h1 {
    cursor: pointer;
  }
`;

export { MainLayout, MainHeader, Logo, ModuleLogo, DropdownWrapper };
