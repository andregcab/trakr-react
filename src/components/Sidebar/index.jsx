import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ProSidebar collapsed={isCollapsed}>
      <Menu>
        <MenuItem
          style={{
            fontWeight: "bold",
          }}
          logo={"<"}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? " > " : " < "}
        </MenuItem>
      </Menu>
      <Menu popperArrow={true}>
        <MenuItem>
          Dashboard
          <Link to="/" />
        </MenuItem>
        <MenuItem>
          Overview
          <Link to="/overview" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
