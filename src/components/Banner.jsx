import React from 'react'
import { motion } from 'framer-motion'

import { FaArrowRight } from 'react-icons/fa'
import Bascket from '../img/whitebascket.png'
import Male from '../img/chef-1.png'
import Chef2 from '../img/chef2.png'
import Grain from '../img/Grain.png'
import BlackBG from '../img/blackbg.png'
import Tick from '../img/tick.png'
import './main.css'

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <section className="banner" id="home">
          {/* <img className="banner-bg" src={Ellipse} alt="bg" /> */}
          <div className="left-section">
            <div className="banner-intro-container">
              <div className="intro-text">
                <span className="head-line">
                  <p>handmade with an extra pinch of love</p>
                </span>
                <span className="sub-text">
                  <p>
                    we prepare our breads daily and that's where the charming
                    smell comes from
                  </p>
                </span>
                <div className="button-container">
                  <button className="info-btn">
                    <p>Get Info</p>
                    <FaArrowRight />
                  </button>
                  <button className="shop-btn">
                    <span className="bascket">
                      <img src={Bascket} alt="bascket" />
                    </span>
                    <p>Online Shop</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="left-bottom-section">
              <div className="image-container">
                <div className="collage">
                  <img className="chef-1" src={Male} alt="chef" />
                  <img className="grain-bag" src={Grain} alt="grains" />
                </div>
              </div>
              <div className="text-container">
                <div className="text">
                  <span className="head-line">
                    <p>Daily, Fresh & Always Tasty</p>
                  </span>
                  <span className="sub-text">
                    <p>
                      To get more information contact us or just drop an E-Mail
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img className="black-bg" src={BlackBG} alt="" />
            <div className="right-top"></div>
            <div className="right-bottom">
              <div className="right-botton-container">
                <motion.button
                  className="shop-btn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                >
                  <span className="bascket">
                    <img src={Tick} alt="bascket" />
                  </span>
                  Your Top Choice
                </motion.button>
                <motion.button
                  className="shop-btn"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                >
                  <span className="bascket">
                    <img src={Tick} alt="bascket" />
                  </span>
                  Fastest In The Business
                </motion.button>
              </div>
              <div className="right-image-container">
                <motion.img
                  src={Chef2}
                  alt="Chef2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.25, type: 'tween' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Banner
