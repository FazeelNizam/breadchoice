import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Hamburger from 'hamburger-react'
import { MdLogin, MdLogout, MdOutlineLibraryAdd } from 'react-icons/md'

import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { app } from '../firebase.config'

import Logo from '../img/Logo.png'
import Avatar from '../img/avatar.png'
import Cart from '../img/cart.png'
import './main.css'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isMenu, setIsMenu] = useState(false)

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [{ user }, dispatch] = useStateValue()

  const login = async () => {
    try {
      if (!user) {
        const {
          user: { refreshToken, providerData },
        } = await signInWithPopup(firebaseAuth, provider)
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        })
        localStorage.setItem('user', JSON.stringify(providerData[0]))
      } else {
        setIsMenu(!isMenu)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    setIsMenu(false)
    setOpen(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null,
    })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
      >
        <div className="navbar">
          <Link to={'/'} className="logo">
            <img src={Logo} alt="logo" />
          </Link>
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
              <motion.div
                className="user-icon"
                whileTap={{ scale: 0.6 }}
                onClick={login}
              >
                <img src={user ? user.photoURL : Avatar} alt="avatar" />
              </motion.div>
              <div className="hamberger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* user details menu */}

      {isMenu && (
        <motion.div
          className="user-details-container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -100 }}
        >
          <div className="user-details-menu">
            <motion.div
              className="user-icon"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 20 }}
              transition={{ delay: 0.2, type: 'tween' }}
            >
              <img src={user ? user.photoURL : Avatar} alt="avatar" />
              <div className="u-details">
                <span className="u-name">{user.displayName}</span>
                <span className="u-mail">{user.email}</span>
              </div>
              <motion.div
                className="logout"
                whileTap={{ scale: 0.6 }}
                onClick={logout}
              >
                <MdLogout />
              </motion.div>
            </motion.div>
            <hr />

            {user && user.email === 'nizamfazeel@gmail.com' && (
              <>
                <motion.div
                  className="add-new-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ y: 20 }}
                  transition={{ delay: 0.2, type: 'tween' }}
                  onClick={() => setIsMenu(false)}
                >
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Link to={'/createItem'}>
                      New Item <MdOutlineLibraryAdd />
                    </Link>
                  </motion.div>
                </motion.div>
                <hr />
              </>
            )}
          </div>
          <span className="overlay"></span>
        </motion.div>
      )}

      {/* mobile */}
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ x: 400 }}
        >
          <div className="mobile-menu-list">
            <ul>
              <li>
                <motion.div
                  className="user-icon-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ y: 20 }}
                  transition={{ delay: 0.2, type: 'tween' }}
                >
                  {user ? (
                    <>
                      <motion.div
                        className="user-icon"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ y: 20 }}
                        transition={{ delay: 0.2, type: 'tween' }}
                      >
                        <img src={user ? user.photoURL : Avatar} alt="avatar" />
                        <div className="u-details">
                          <span className="u-name">{user.displayName}</span>
                          <span className="u-mail">{user.email}</span>
                        </div>
                        <motion.div
                          className="logout"
                          whileTap={{ scale: 0.6 }}
                          onClick={logout}
                        >
                          <MdLogout />
                        </motion.div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="menu-login"
                        onClick={login}
                        whileTap={{ scale: 0.8 }}
                      >
                        Login <MdLogin />
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </li>
              <hr />

              {user && user.email === 'nizamfazeel@gmail.com' && (
                <>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: 20 }}
                    transition={{ delay: 0.2, type: 'tween' }}
                    onClick={() => setOpen(false)}
                  >
                    <Link to={'/createItem'}>
                      New Item <MdOutlineLibraryAdd />
                    </Link>
                  </motion.li>
                  <hr />
                </>
              )}

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
                onClick={() => setOpen(false)}
              >
                <Link to={'/'}>Home</Link>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
                onClick={() => setOpen(false)}
              >
                <a href="#menu">Menu</a>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
                onClick={() => setOpen(false)}
              >
                <a href="#reviews">Reviews</a>
              </motion.li>
              <hr />
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20 }}
                transition={{ delay: 0.2, type: 'tween' }}
                onClick={() => setOpen(false)}
              >
                <a href="#q&a">Q & A</a>
              </motion.li>
              <hr />
            </ul>
          </div>
          <span className="overlay"></span>
        </motion.div>
      )}
    </>
  )
}

export default NavBar
