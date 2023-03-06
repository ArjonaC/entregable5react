import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Header.css"

const Header = () => {

  const dispatch=useDispatch()

  const handleClickLogOut=()=>{
    dispatch(setNameTrainerGlobal(""))
  }

  return (
    <header className='header'>
      <img src="/images/pokedex.png" className='header-img' />
        <div className='header-black'></div>
        <div className='header-circle'>
        
        </div>
        <div className=''>
        <img onClick={handleClickLogOut} className='header-cirlce-int header-log-out bx bx-log-out' src="/images/pokeball.png"/>
        </div>
    </header>
  )
}

export default Header