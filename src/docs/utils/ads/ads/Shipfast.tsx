import React from 'react'
import CardAd from '../templates/CardAd'
import { Text, Title } from '@/docs/ui/components/core'

const Shipfast = () => {
  return (
    <CardAd>
        <img src={'./shipfast.png'} width={310} height={200} style={{borderRadius: 10}}/>
        <Text style={{textAlign: 'center', color: "#cccccc", marginTop: 0}}>Want to ship faster?</Text>
        <Text style={{textAlign: 'center', fontSize: 24, color: "#cccccc"}}>Try <b>Shipfast</b></Text>
    </CardAd>
  )
}

export default Shipfast