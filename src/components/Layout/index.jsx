import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar show={showSidebar} setShow={setShowSidebar} />
        <div className="content flex-grow-1">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Layout;
