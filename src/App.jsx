import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Form } from "./Pages/Form"
import { Admin } from "./Pages/Admin";
import { RecoilRoot } from "recoil";
function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
