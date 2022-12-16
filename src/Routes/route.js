import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/project/:id',
                element:<ProjectDetails></ProjectDetails>
            }
        ]
    }
])