import React from 'react'
import './App.css'
import gif from './assets/bg.gif';
const App = () => {
    return (
        <>
            <div className='head'>
                <h1 className='sitehead'>UdaanDayCare</h1>

            </div>
            <div className='gif'>
                <img src={gif} alt="work in progess"  className='workimage'/>
                <h2 className='construction'>Website is Under Construction</h2>
            </div>
        </>

    )
}

export default App