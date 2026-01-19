import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx';
import QueryProvider from './query/QueryProvider.tsx';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from './pages/Home.tsx';
import BlogDetail from './components/blog/Blogdetail.tsx';
import MainLayout from './components/layout/MainLayout.tsx';
import BlogCreate from './pages/Blogcreate.tsx';


const Router=createBrowserRouter(
  createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/blogs/:id" element={<BlogDetail/>}/>
        <Route path="/create" element={<BlogCreate/>}/>
      </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
    <RouterProvider router={Router}/>
    </QueryProvider>
  </StrictMode>
)
