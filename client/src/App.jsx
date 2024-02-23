import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";

function App() {


  return (
    <main className='App w-full overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          
            <Route index element={<Home/>}/>

          </Route>  
        </Routes>

      
      </BrowserRouter>
    </main>
  )
}

export default App
