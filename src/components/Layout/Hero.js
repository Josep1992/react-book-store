import React from 'react'
import Search from '../Layout/Search'

const Hero = ({ tagline, paragraph, onHandleQuery, onSearch }) => {
  return (
    <div className="hero">
      <h1 className="hero--tagline">{tagline}</h1>
      <p className="hero--paragraph">{paragraph}</p>
      {window.location.pathname.includes('book') !== true && <Search onHandleQuery={onHandleQuery} onSearch={onSearch} />}
    </div>
  )
}

export default Hero
