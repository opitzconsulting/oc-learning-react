import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormsWOPreventDefault from './components/forms/1FormsWOPreventDefault'
import FormsWPrevent from './components/forms/2FormsWPrevent'
import FormsWSpread from './components/forms/3FormsWSpread'
import FormsWithUseRef from './components/forms/4FormsWithRef'
import FormsWithFormData from './components/forms/5FormsWithFormData'
import FormValidationBlur from './components/forms/6FormValidationBlur'
import FormRequiredValidation from './components/forms/7FormRequiredValidation'
import FormCustomInputField from './components/forms/8CustomInputField'
import FormWithUseInputHook from './components/forms/9FormWithUseInputHook'
import HomeNavigation from './navigation/HomeNavigation'
import FormsNavigation from './navigation/FormsNavigation'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    localStorage.setItem('name', 'John Doe')
    localStorage.setItem('age', '30')
  }, [])

  return (
    <BrowserRouter>
      <HomeNavigation />

      <Routes>
        <Route path="/" element={<div />} />

        {/* Forms */}
        <Route path="/forms" element={<FormsNavigation />} />
        <Route path="/forms/forms1" element={<FormsWOPreventDefault />} />
        <Route path="/forms/forms2" element={<FormsWPrevent />} />
        <Route path="/forms/forms3" element={<FormsWSpread />} />
        <Route path="/forms/formsWithUseRef" element={<FormsWithUseRef />} />
        <Route
          path="/forms/formsWithFormData"
          element={<FormsWithFormData />}
        />
        <Route
          path="/forms/formsWithBlurValidation"
          element={<FormValidationBlur />}
        />
        <Route
          path="/forms/formsWithRequiredValidation"
          element={<FormRequiredValidation />}
        />
        <Route
          path="/forms/formsWithCustomInput"
          element={<FormCustomInputField />}
        />
        <Route
          path="/forms/formsWithUseInputHook"
          element={<FormWithUseInputHook />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
