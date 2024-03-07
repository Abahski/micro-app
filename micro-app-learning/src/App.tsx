import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom'
import React, { ChangeEvent, FormEvent, useEffect, useState} from 'react'
import LandingPage from './Pages/LandingPage.tsx'
import DetailPage from './Pages/DetailPage.tsx'
import AddPartai from './Pages/AddPartai.tsx'
import AddPaslon from './Pages/AddPaslon.tsx'
import ListPartai from './Pages/ListPartai.tsx'
import ListPaslon from './Pages/ListPaslon.tsx'
import Admin from './Pages/Admin.tsx'
import Vote from './Pages/Vote.tsx'

const App: React.FC = () => {
  // const findUsers = async ()=> {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/v1/users")

  //     console.log(await response.json());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // React.useEffect(() => {
  //   findUsers()
  // }, [])

  return (
    <>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/voting' Component={Vote} />
        <Route path='/news-detail' Component={DetailPage} />
        <Route path='/admin' Component={Admin} />
        <Route path='/paslon' Component={ListPaslon} />
        <Route path='/add-paslon' Component={AddPaslon} />
        <Route path='/partai' Component={ListPartai} />
        <Route path='/add-partai' Component={AddPartai} />
      </Routes>
    </>
  )
}

export default App