import { Header } from "../Components/Header"
import { Subheading } from "../Components/Subheading"
import { InputBox } from "../Components/Inputbox"
import { Button } from "../Components/Button"
import { useState } from "react"
import axios from "axios"

export const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [quantity, setQuantity] = useState(0);

    return <div className="bg-slate-300 h-screen flex justify-center p-6">
    <div className="flex flex-col justify-center py-6">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 py-4">
        <Header label={"Donation Form"} />
        <Subheading label={"Enter the details to donate food"} />
        <InputBox placeholder="Kabir Singh" label={"Name"} onChange={(e) => {
          setName(e.target.value);
        }} />
        <InputBox placeholder="kabirsingh@gmail.com" label={"Email"} onChange={(e) => {
          setEmail(e.target.value)
        }} />
        <InputBox placeholder="8080808080" label={"Mobile Number"} onChange={(e) => {
          setNumber(e.target.value)
        }} />
        <InputBox placeholder="10" label={"Quantity"} onChange={(e) => {
          setQuantity(e.target.value)
        }} />
      </div>
      <div className="pt-4 flex justify-center">
          <Button label={"Donate"} onPress={
            async () => {
              const res = await axios.post("https://donor-backend.onrender.com/form", {
                name,
                email,
                number,
                quantity
              })
            }
          } />
        </div>
    </div>
  </div>
}