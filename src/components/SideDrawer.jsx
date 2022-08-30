import React from 'react'
import { Link } from "react-router-dom";
import { CustomInput } from "reactstrap";

import './SideDrawer.scss'

const SideDrawer = ({ linkList, darkmode, setDarkmode }) => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }
  return (
    <div className={`sidebar-container`}>
      {drawerIsOpen === true && <div className='sidebar-off' onClick={() => setDrawerIsOpen(false)}></div>}
      <svg onClick={toggleDrawer} viewBox="0 0 100 80" width="40" height="40" className={`hamburger ${darkmode ? 'dark' : ''}`}>
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
      <div class={`side-drawer-container ${darkmode ? 'dark' : ''} ${drawerIsOpen ? 'open' : 'closed'}`}>
        <div className='link-list'>
          {linkList.map((link, i) => (
            <Link key={i} onClick={toggleDrawer} className={`link ${darkmode ? 'dark' : ''}`} to={link.url}>
              {link.content}
            </Link>
          ))}
        </div>
        <div className='darkmode-toggle-container'>
          <span className="darkmode-label">dark mode</span>
          <CustomInput
            type="switch"
            id="darkModeSwitch2"
            name="customSwitch2"
            value={darkmode}
            onChange={() => setDarkmode(!darkmode)}
            className="darkmode-switch"
          />
        </div>
      </div>
    </div>
  )
}

export default SideDrawer;