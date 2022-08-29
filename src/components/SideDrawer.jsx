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
    <>
      <svg onClick={toggleDrawer} viewBox="0 0 100 80" width="40" height="40" class="hamburger">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
      <div class={`side-drawer-container ${drawerIsOpen ? 'open' : 'closed'}`}>
        <div className='link-list'></div>
        {linkList.map((link) => (
          <Link className={!darkmode ? "link" : "link-dark"} to={link.url}>
            {link.content}
          </Link>
        ))}
        <div className='darkmode-toggle-container'>
          <span className="darkmode-label">dark mode</span>
          <CustomInput
            type="switch"
            id="darkModeSwitch"
            name="customSwitch"
            onChange={() => setDarkmode(!darkmode)}
            className="darkmode-switch"
          />
        </div>
      </div>
    </>
  )
}

export default SideDrawer;