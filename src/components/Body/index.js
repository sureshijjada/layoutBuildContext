// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-navbar">Left Navbar Menu</h1>
              <ul>
                <li className="left-text">item1</li>
                <li className="left-text">item2</li>
                <li className="left-text">item3</li>
                <li className="left-text">item4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-text">Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div>
              <h1 className="content-heading">Right Navbar Menu</h1>
              <div className="div">
                <p className="text">Ad 1</p>
              </div>
              <div className="div">
                <p className="text">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
