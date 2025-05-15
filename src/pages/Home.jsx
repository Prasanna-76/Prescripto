import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/specialitymenu'
import Banner from '../components/Banner'
import TopDoctors from '../components/TopDoctors'
const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home
