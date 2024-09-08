//Set up Components
//Import All Components that will be displayed in the main page

import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

const App = () => {
  return (
    <>
      <Main />
      <SideBar></SideBar>
      <Footer />
    </>
  )
}

export default App