//Set up Components
//Import All Components that will be displayed in the main page

import { useState } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

const App = () => {

  //Setting a useState for the modal
  const [showModal, setShowModal] = useState(false);

  //Function to handle the toggle of the sidebar
  const handleToggleModal = () => {
    //Inverting the showModal state to true to display sidebar
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />

      {/* If showModal is true, render sidebar, default state is false */}
      {showModal && (
        // passing props to sidebar so arrow button can close the modal
        <SideBar handleToggleModal={handleToggleModal} />)}

      {/* assigning prop to connect to userState, this way it can be used in the footer component */}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App