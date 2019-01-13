import React from 'react'
import Search from '../Layout/Search'

const Hero = ({ tagline, paragraph, onHandleQuery, onSearch, query }) => {
  return (
    <div className="hero">
      <h1 className="hero--tagline">{tagline}</h1>
      {window.location.pathname.includes('book') !== true && (
        <>
          <p className="hero--paragraph">{paragraph}</p>
          <Search onHandleQuery={onHandleQuery} onSearch={onSearch} query={query} />
        </>
      )}
    </div>
  )
}

export default Hero
