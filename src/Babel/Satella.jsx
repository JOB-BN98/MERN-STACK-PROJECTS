import React from 'react'
import './vcss.css'

export default function Satella() {
  return (
    <>
        <div className="video-container">
        <video height='1100px' className="video" loop muted autoPlay>
          <source src="https://player.vimeo.com/external/308157757.sd.mp4?s=ee704e13dca93ed0356d6002b203a8f12b1c9190&profile_id=164&oauth2_token_id=57447761" />
        </video>
        <div className="text-overlay">Learning Management System</div>
      </div>
    </>
  )
}
