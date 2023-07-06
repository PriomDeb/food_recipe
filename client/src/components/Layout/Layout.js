import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = (porps) => {
  return (
    <div>
        <Header/>
        <main style={{minHeight:'80vh'}}>
        {porps.children}
        </main>
        <Footer/>
    </div>
  )
}
