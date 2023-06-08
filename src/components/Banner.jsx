import React from 'react'

import { FaArrowRight } from 'react-icons/fa'
import Bascket from '../img/whitebascket.png'
import Male from '../img/chef-1.png'
import Grains from '../img/grain.png'
import BunBucket from '../img/bun-bag.png'
import BlackBG from '../img/blackbg.png'
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
                  handmade with an extra pinch of love
                </span>
                <span className="sub-text">
                  we prepare our breads daily and that's where the charming
                  smell comes from
                </span>
                <div className="button-container">
                  <button className="info-btn">
                    Get Info
                    <FaArrowRight />
                  </button>
                  <button className="shop-btn">
                    <span className="bascket">
                      <img src={Bascket} alt="bascket" />
                    </span>
                    Online Shop
                  </button>
                </div>
              </div>
            </div>
            <div className="left-bottom-section">
              <div className="image-container">
                <div className="collage">
                  <img className="bun-bucket" src={BunBucket} alt="bun" />
                  <img className="chef-1" src={Male} alt="chef" />
                  <img className="grain-bag" src={Grains} alt="grains" />
                </div>
              </div>
              <div className="text-container">
                <div className="text">
                  <span className="head-line">Daily, Fresh & Always Tasty</span>
                  <span className="sub-text">
                    To grt more information contact us or just drop an E-Mail
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img className="black-bg" src={BlackBG} alt="" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Banner
