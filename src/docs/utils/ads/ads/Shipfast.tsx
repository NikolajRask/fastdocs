import React from 'react'
import CardAd from '../templates/CardAd'


const Shipfast = () => {
  return (
    <CardAd>
        <img src={'./shipfast.png'} width={310} height={200} alt="shipfast" style={{borderRadius: 10}}/>
        <p style={{textAlign: 'center', color: "#cccccc", marginTop: 0}}>Want to ship faster?</p>
        <p style={{textAlign: 'center', fontSize: 24, color: "#cccccc"}}>Try <b>Shipfast</b></p>
    </CardAd>
  )
}

export default Shipfast