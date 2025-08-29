import React from 'react'
import Buttons from './Buttons'
const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Center</h1>
            <p className='text-light lead'>Welcome to our Stock Prediction Portal, where data meets intelligence. Our platform leverages advanced machine learning models and real-time market data to provide accurate insights into stock trends. Whether you're an investor, trader, or just curious about the market, our predictions help you stay informed and make smarter financial decisions. Explore the future of stocks with confidence, powered by technology.
</p>
            <Buttons text='Login' class = 'btn btn-info'></Buttons>
        </div>
      
    </div>
    </>
  )
}

export default Main
