import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { Outlet } from "react-router"


function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
