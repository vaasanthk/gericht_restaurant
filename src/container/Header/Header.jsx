import React from "react"
import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Header.css"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The key to fine dining is a combination of exceptional service,
        high-quality food and drink, attention to detail, and a luxurious
        atmosphere. Come and experience the best exquisite taste and experience
        at Gericht when all these elements are combined into an unforgettable
        dining experience.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
)

export default Header
