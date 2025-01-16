import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDoctor from '../component/TopDoctor'
import Banner from '../component/Banner'
import Basic from '../component/Basic'
const House = () => {
  return (
    <div >
        <Header/>
        <SpecialityMenu/>
        <Basic/>
        <TopDoctor/>
        <Banner/>
         
    </div>
  )
}

export default House