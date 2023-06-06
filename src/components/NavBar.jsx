import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'

import Logo from '../img/Logo.png'
import Avatar from '../img/avatar.png'
import Cart from '../img/cart.png'
import './main.css'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
      >
        <div className="navbar">
          <motion.Link to={'/'} className="logo">
            <img src={Logo} alt="logo" />
          </motion.Link>
          <div className="menu">
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#q&a">Q & A</a>
              </li>
            </ul>
            <div className="user-section">
              <motion.div className="cart-icon" whileTap={{ scale: 0.6 }}>
                <img src={Cart} alt="cart" />
              </motion.div>
              <motion.div className="user-icon" whileTap={{ scale: 0.6 }}>
                <img src={Avatar} alt="avatar" />
              </motion.div>
              <div className="hamberger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* mobile */}
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 400 }}
        >
          <div className="mobile-menu-list">
            <ul>
              <li>
                <motion.div
                  className="user-icon-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, type: 'tween' }}
                >
                  <motion.div className="user-icon" whileTap={{ scale: 0.6 }}>
                    <img src={Avatar} alt="avatar" />
                  </motion.div>
                  <p>Hello, Fazeel</p>
                </motion.div>
              </li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
              >
                <Link to={'/'}>Home</Link>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
              >
                <a href="#menu">Menu</a>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
              >
                <a href="#reviews">Reviews</a>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
              >
                <a href="#q&a">Q & A</a>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
              >
                <a href="#">Log Out</a>
              </motion.li>
              <hr />
            </ul>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default NavBar
