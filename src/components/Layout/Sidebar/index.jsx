import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link, useLocation } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { pathname } = useLocation();

  const menuCollapseIcon = isCollapsed ? 'chevron-circle-right' : 'chevron-circle-left';

  return (
    <ProSidebar className="sidebar" collapsed={isCollapsed}>
      <Menu>
        <MenuItem
          className="collapse-btn"
          icon={<FontAwesomeIcon icon={menuCollapseIcon} size="2x" />}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </Menu>
      <Menu>
        <Tooltip disableHoverListener={!isCollapsed} title="Dashboard" placement="right" arrow>
          <MenuItem
            className="menu-link"
            active={pathname === '/'}
            icon={<FontAwesomeIcon icon="stopwatch" size="2x" />}
          >
            Dashboard
            <Link to="/" />
          </MenuItem>
        </Tooltip>
        <Tooltip disableHoverListener={!isCollapsed} title="Overview" placement="right" arrow>
          <MenuItem
            className="menu-link"
            active={pathname === '/overview'}
            icon={<FontAwesomeIcon icon="calendar-day" size="2x" />}
          >
            Overview
            <Link to="/overview" />
          </MenuItem>
        </Tooltip>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
