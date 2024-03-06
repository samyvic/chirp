import React from 'react'

import { Nav } from '../../02_organisms/nav/Nav'
import { Hero } from '../../02_organisms/hero/Hero'
import { Features } from '../../02_organisms/features/features'
import { Price } from '../../02_organisms/price/Price'
import { Footer } from '../../02_organisms/footer/Footer'
import { Customers } from '../../02_organisms/customers/Customers'

export const Homepage = () => {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Features></Features>
      <Customers></Customers>
      <Price></Price>
      <Footer></Footer>
    </>
  )
}
