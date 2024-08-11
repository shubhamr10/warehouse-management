import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.page";
import ErrorPage from "./pages/error-page/error-page.component";
import SignUp from "./pages/signup/SignUp.page";
import LogoText from "./components/logo-text/logo-text.component";
import Home from "./pages/home/home.page";
import { initDB } from "./utils/db";
import { useEffect, useState } from "react";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"",
      element:<LogoText/>
    }
    ]
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"",
      element:<LogoText/>
    }
    ]
  },{
    path:"/signup",
    element:<SignUp/>,
    errorElement:<ErrorPage/>,
    children:[{
      path:"",
      element:<LogoText/>
    }]
  }
])


const App = () => {
  const [isDBReady, setIsDBReady] = useState(false);
  const handleInitDB = async () => {
    const status = await initDB();
    setIsDBReady(status);
  }
  useEffect(()=>{
    handleInitDB();
  },[])
  console.log("isDBReady", isDBReady);
  return (
    <RouterProvider router={router}/>
  )
}

export default App;