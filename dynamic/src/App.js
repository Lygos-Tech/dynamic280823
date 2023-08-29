import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
import Admin from "./pages/admin";
// import Login from './pages/login';
// import {Toaster} from 'react-hot-toast'
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  
  return (
		<>
		{/* <Toaster position='bottom-right' toastOptions={{duration: 5000}} /> */}
		<Router>
		<Routes>
		  <Route>
			{/* <Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />
			<Route path='/home' element={<Home />} /> */}
			<Route path='/admin' element={<Admin />} />
		  </Route>
		</Routes>
		</Router>
		</>
	  )
  
  
}
export default App;