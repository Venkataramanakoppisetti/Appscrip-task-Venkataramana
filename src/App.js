import React, { useState } from 'react';
import TopLogo from './components/Assets/top-logo.png';
import WebsiteLogo from './components/Assets/Logo.png';
import SearchIcon from './components/Assets/search-icon.png'
import HeartIcon from './components/Assets/heart-icon.png'
import ShoppingBagIcon from './components/Assets/shopping-bag-icon.png'
import ProfileIcon from './components/Assets/profile-icon.png'
import EngIcon from './components/Assets/ENG-icon.png'
import BottomArrowIcon from './components/Assets/arrow-bottom-icon.png'
import LeftArrowIcon from './components/Assets/arrow-left-icon.png'
import RightArrowIcon from './components/Assets/arrow-right-icon.png'
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="appscrip-main-container">
      <div className="top-header-container">
        <div className="top-icon-description-container">
          <img src={TopLogo} alt="top logo" className="top-logo" />
          <p className="top-description">Loren ipsum dolor</p>
        </div>
        <div className="top-icon-description-container">
          <img src={TopLogo} alt="top logo" className="top-logo" />
          <p className="top-description">Loren ipsum dolor</p>
        </div>
        <div className="top-icon-description-container">
          <img src={TopLogo} alt="top logo" className="top-logo" />
          <p className="top-description">Loren ipsum dolor</p>
        </div>
      </div>
      <header className="header-container">
        <div className="header-first-container">
          <img src={WebsiteLogo} alt="Website logo" className="website-logo" />
          <h1 className="website-heading">LOGO</h1>
          <div className="header-icons-container">
            <img src={SearchIcon} alt="search icon" className="header-icons"/>
            <img src={HeartIcon} alt="Heart Icon" className="header-icons" />
            <img src={ShoppingBagIcon} alt="Shopping Bag" className="header-icons" />
            <img src={ProfileIcon} alt="Profile" className="header-icons"/>
            <div className="language-filter-container">
              <img src={EngIcon} alt="Eng Icon" className="header-icons"/>
              <img src={BottomArrowIcon} alt="Bottom Arrow" className="header-icons" />
            </div>
          </div>
        </div>
        <nav className="header-nav-container">
          <p className="nav-options">SHOP</p>
          <p className="nav-options">SKILLS</p>
          <p className="nav-options">STORIES</p>
          <p className="nav-options">ABOUT</p>
          <p className="nav-options">CONTACT US</p>
        </nav>
      </header>
      <div className="website-caption-description-container">
        <h1 className="website-caption">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="website-description">
          Lorem ipsum dolor sit amit consectetur.Amet est posuere rhoncus<br/> 
          scelerisque.Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <hr className='line'/>
      <div className="filter-recommandations-container">
        <div className="filter-items-count-container">
          <p className="items-count">
            3425 ITEMS
          </p>
          <div className="filter-status-container">
            {isSidebarVisible ? <img src={LeftArrowIcon} alt="Left Arrrow" /> : <img src={RightArrowIcon} alt=''/> } 
            <button className='toggle-button' onClick={toggleSidebar}>{isSidebarVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</button>
          </div>
        </div>
        <select id="sort-options">
          <option value="recommended" selected>RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="high-to-low">PRICE: HIGH TO LOW</option>
          <option value="low-to-high">PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <hr className='line'/>
      <div className="content-container">
        <div className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
          <div className="customizble-container">
            <input type="checkbox" />
            <p className='customizble-des'>CUSTOMIZBLE</p>
          </div>
          <hr className='line'/>
          <div class="filter-option">
            <label>Ideal For</label>
            <select id="idealFor">
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
          </div>
          <hr className='line'/>
          <div class="filter-option">
            <label>Occasion</label>
            <select id="occasion">
                <option value="all">All</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="party">Party</option>
            </select>
          </div>
          <hr className='line'/>
          <div class="filter-option">
            <label>Work</label>
            <select id="work">
              <option value="all">All</option>
              <option value="embroidery">Embroidery</option>
              <option value="printed">Printed</option>
              <option value="solid">Solid</option>
            </select>
          </div>
          <hr className='line'/>
          <div class="filter-option">
            <label>Fabric</label>
            <select id="fabric">
              <option value="all">All</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="wool">Wool</option>
            </select>
          </div>
          <hr className='line'/>
        <div class="filter-option">
          <label>Segment</label>
          <select id="segment">
            <option value="all">All</option>
            <option value="luxury">Luxury</option>
            <option value="premium">Premium</option>
            <option value="standard">Standard</option>
          </select>
        </div>
        <hr className='line'/>
        <div class="filter-option">
          <label>Suitable For</label>
          <select id="suitableFor">
            <option value="all">All</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="all-seasons">All Seasons</option>
          </select>
        </div>
        <hr className='line'/>
        <div class="filter-option">
          <label>Raw Materials</label>
          <select id="rawMaterials">
            <option value="all">All</option>
            <option value="organic">Organic</option>
            <option value="synthetic">Synthetic</option>
            <option value="natural">Natural</option>
          </select>
        </div>
        <hr className='line'/>
        <div class="filter-option">
          <label>Pattern</label>
          <select id="pattern">
            <option value="all">All</option>
            <option value="striped">Striped</option>
            <option value="checked">Checked</option>
            <option value="plain">Plain</option>
            <option value="floral">Floral</option>
          </select>
        </div>
        <hr className='line'/>
        </div>
        <div className={`product-listing ${isSidebarVisible ? 'narrow' : 'wide'}`}>
          {/* Product listing content goes here */}
          <p>Product Listing Content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
