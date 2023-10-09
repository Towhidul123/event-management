import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../login-register/Register";
import Login from "../login-register/Login";
import Error from "../errorpage/Error";
import CardDetails from "../details/CardDetails";
import PrivateRoute from "../privateroute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/data.json')
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/card/:id',
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])


export default routes;