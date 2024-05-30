import './App.css'
import Apı from './data/Apı'
import { Routes, Route } from "react-router-dom"
import RouteDetails from "./components/ProductDetails"

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Apı/>}/>
        <Route path='/product-details/:id' element={<RouteDetails/>} />
      </Routes>
    </div>
  )
}

export default App
