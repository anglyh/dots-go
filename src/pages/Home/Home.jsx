import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Home.css'
import Input from '../../components/common/Input/Input'

export default function Home() {

  return (
    <div className="home">
      <div className='home__container'>
      <img src={logo} alt="logo" />
      <h1>Dots-Go</h1>
      
      </div>
      <Input />
    </div>
  )
}

