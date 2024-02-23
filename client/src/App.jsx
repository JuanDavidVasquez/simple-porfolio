import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./layouts/Header";

function App() {


  return (
    <main className='App w-full overflow-x-hidden generalScroll'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Home/>}/>
          </Route>  
          <Route path="/projects" element={<Projects/>}>
          <Route index element={<Projects/>}/>
        </Route> 
        </Routes>

      
      </BrowserRouter>
    </main>
  )
}

export default App
