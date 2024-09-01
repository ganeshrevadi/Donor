import { Header } from "../Components/Header"
import { Subheading } from "../Components/Subheading"
import { InputBox } from "../Components/Inputbox"
import { Button } from "../Components/Button"
import { Alert } from "../Components/Alert"
import { useState } from "react"
import axios from "axios"
import { useRecoilState } from "recoil"
import { deletedAtom } from "../store/atoms/deletedAtom"
import { useNavigate } from "react-router-dom"
import { Appbar } from "../Components/Appbar"

export const Form = () =>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [food, setFood] = useState("");
    const [location, setLocation] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [deleted, setDeleted] = useRecoilState(deletedAtom)

    return <div>
      <Appbar text={"DONOR"} handleChange={() => { navigate('/login')}} buttonText={"Admin ?"}/>
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center ">
      <div className="rounded-lg bg-white w-150 text-center p-4">
        <Header label={"Donation Form"} />
        <Subheading label={"Enter the details to donate food"} />
        <div className="flex justify-content">
        <div className="grid grid-cols-3 p-2" style={{ gridAutoRows: 'max-content', gridAutoColumns: 'max-content' }}>

        <InputBox placeholder="Kabir Singh" label={"Name"} onChange={(e) => {
          setName(e.target.value);
        }} />
        <InputBox placeholder="kabirsingh@gmail.com" label={"Email"} onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <InputBox placeholder="8080808080" label={"Mobile Number"} onChange={(e) => {
          setNumber(e.target.value)
        }} />
        <InputBox placeholder="Biryani" label={"Food Type"} onChange={(e) => {
          setFood(e.target.value)
        }} />
        <InputBox placeholder="R V College Mess" label={"Location"} onChange={(e) => {
          setLocation(e.target.value)
        }} />
        <InputBox placeholder="10" label={"Quantity"} onChange={(e) => {
          setQuantity(e.target.value)
        }} />
        </div>
      </div>
      </div>
      <div className="pt-4 flex justify-center">
          <Button label={"Donate"} onPress={
            async () => {
              const res = await axios.post("https://donor-backend.onrender.com/form", {
                name,
                email,
                number,
                food,
                location,
                quantity
              })
              setDeleted(!deleted);
              setSubmitted(true);
              }
            }></Button>
        </div>
        <Alert type={submitted}/>
    </div>
  </div>
  </div>
}