import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeNavigation from "./navigation/HomeNavigation.tsx";
import FormValidation from "./components/FormValidation.tsx";
import IncreaseCount from "./components/IncreaseCount.tsx";

function App() {


  return (
      <BrowserRouter>
        <HomeNavigation/>

        <Routes>
          <Route path="/componentTests" element={<IncreaseCount/>}/>
          <Route path="/forms" element={<FormValidation/>}/>
          <Route path="*" element={<IncreaseCount/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
