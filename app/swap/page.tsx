"use client"
import { SwapController } from '@/src/modules/swap/controller/SwapController'
import SwapView from '@/src/modules/swap/view/SwapView'
import { NextPage } from 'next'
import React from 'react'

const SwapPage:NextPage = (props) => {
  return (
    <SwapController {...props}>
        <SwapView {...props}/>
    </SwapController>
  )
}

export default SwapPage;