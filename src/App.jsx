//Set up Components
//Import All Components that will be displayed in the main page

import { useState, useEffect } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

const App = () => {

  //Setting a useState for the modal
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  //Function to handle the toggle of the sidebar
  const handleToggleModal = () => {
    //Inverting the showModal state to true to display sidebar
    setShowModal(!showModal)
  }

  //To fetch API data, set as async to be able to fetch
  useEffect(() => {

    //Defining fetchAPIDAta to extract data from the api
    async function fetchAPIData() {
      //To access the value of api key
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      //Set async func to fetch data from api
      //It is async because it needs to wait until the data is fetched
      //Defining url as the http request from nasa api website concat with the api key to access it
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      //caching the data to local so we prevent from burning through our api call limits
      //local key
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      //If Local key exists in localstorage
      if (localStorage.getItem(localKey)) {
        //fetch apidata
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      //If localKey doesn't work we clear the localStorage
      localStorage.clear()

      try {
        //setting response to fetch url which was set above
        const res = await fetch(url)
        //storing response as json
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Data fetched from api today')

      } catch (error) {
        console.log(error.message)
      }
    }
    //calling the function
    fetchAPIData()


    //Array is set to empty so function only runs when the page reloads
  }, [])


  return (
    <>
      {/* When we have the data, we want to show the Main component */}
      {/* If data is available load main, else display loadingState */}
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-rotate"></i>
        </div>
      )}

      {/* If showModal is true, render sidebar, default state is false */}
      {showModal && (
        // passing props to sidebar so arrow button can close the modal
        //adding data prop to be used in sidebar
        <SideBar data={data} handleToggleModal={handleToggleModal} />)}

      {/* assigning prop to connect to userState, this way it can be used in the footer component */}
      {/* If data is available then show footer */}
      {/* Adding data prop to be used in footer */}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}

export default App