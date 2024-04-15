import "../globals.css"

import { REACT } from "../../../utils/type"
import Header from "./_header/Header"
import Footer from "./_footer/Footer"

export default function Dashboard({ children }: REACT) { 
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}