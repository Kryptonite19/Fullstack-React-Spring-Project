import { Container } from '@mui/material'
import React from 'react'
import PackageTable from '../../components/PackageTable'
import SubmitPackage from '../../components/SubmitPackage'


const Home = () => {
  return (
    <>
    <Container>
      <br/>
    <PackageTable/>
      <br/>
    <SubmitPackage/>
    </Container>
 
    </>
  )
}

export default Home