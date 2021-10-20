import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { pathname } = useLocation();

  const menuCollapseIcon = isCollapsed ? 'angle-double-right' : 'angle-double-left';

  return (
    <ProSidebar className="sidebar" collapsed={isCollapsed}>
      <Menu>
        <MenuItem
          icon={<FontAwesomeIcon icon={menuCollapseIcon} size="2x" />}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </Menu>
      <Menu>
        <MenuItem
          className="menu-link"
          active={pathname === '/'}
          icon={<FontAwesomeIcon icon="stopwatch" size="2x" />}
        >
          Dashboard
          <Link to="/" />
        </MenuItem>
        <MenuItem
          className="menu-link"
          active={pathname === '/overview'}
          icon={<FontAwesomeIcon icon="calendar-day" size="2x" />}
        >
          Overview
          <Link to="/overview" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
