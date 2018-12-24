import React from 'react'

const Hero = ({ tagline, paragraph ,btnText}) => {
  return (
    <div className="hero">
      <h1 className="hero--tagline">{tagline}</h1>
      <p className="hero--paragraph">{paragraph}</p>
      <button className="button hero--button-dark">{btnText}</button>
    </div>
  )
}

export default Hero
