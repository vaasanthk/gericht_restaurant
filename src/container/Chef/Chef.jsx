import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Chef.css"

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Our kitchen is equipped with state-of-the-art equipment
          </p>
        </div>
        <p className="p__opensans">
          and our team is made up of talented and passionate individuals. Our
          goal is to create a memorable dining experience for every guest, and
          we are committed to exceeding expectations in every way possible.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
)

export default Chef
