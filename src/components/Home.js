import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

const Home = () => (
  <div className="wrapper">
    <Sidebar />
    <MainContent />
  </div>
)

export default Home