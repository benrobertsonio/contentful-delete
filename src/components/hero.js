import React from 'react'
import Img from 'gatsby-image'

import { hero, heroImage, heroDetails, heroHeadline, heroTitle } from './hero.module.css'

export default ({ data }) => (
  <div className={hero}>
    <Img
      className={heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={heroDetails}>
      <h3 className={heroHeadline}>{data.name}</h3>
      <p className={heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
