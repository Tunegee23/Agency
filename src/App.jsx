import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./Pages/Home"
import Personal from './Pages/Personal'



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component:Home
    },

    {
      path: "/personal",
      Component:Personal
    }

  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
 
}

export default App;



  // return (
  //   <div>
  //     <Content1/>
  //     <Personal/>
  //   </div>
  // )


