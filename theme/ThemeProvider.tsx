import React, { ReactNode } from "react";
import { ConfigProvider } from "antd";
import customTheme from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
