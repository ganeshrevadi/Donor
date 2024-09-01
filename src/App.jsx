import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Form } from "./Pages/Form"
import { Admin } from "./Pages/Admin";
import { RecoilRoot } from "recoil";
import { Login } from "./Pages/Login";
function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
