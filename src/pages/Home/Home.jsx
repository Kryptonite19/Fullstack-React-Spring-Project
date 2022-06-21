import { Container } from '@mui/material'
import React from 'react'
import PackageTable from '../../components/PackageTable'
import { Navbar  } from "../../components";



const Home = () => {

  const divStyle = {
    marginTop:'2rem',
    marginLeft: '10rem',
    marginRight: '10rem',

  };

  return (
    <>
    <div style={divStyle}>
    <PackageTable/>
    </div>
    </>
  )
}

export default Home