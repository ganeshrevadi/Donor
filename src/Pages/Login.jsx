import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { InputBox } from "../Components/Inputbox";
import { Button } from "../Components/Button";
import { Subheading } from "../Components/Subheading";

export const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div>
         <div className="bg-slate-300 h-screen flex justify-center p-6">
    <div className="flex flex-col justify-center py-6">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 py-4">
        <Header label={"Admin login"} />
        <Subheading label={"Login for admin dashboard"} />
        <InputBox placeholder="Kabir Singh" label={"username"} onChange={(e) => {
          setUsername(e.target.value);
        }} />
        <InputBox placeholder="password" label={"password"} onChange={(e) => {
          setPassword(e.target.value)
        }} />
      <div className="pt-4 flex justify-center">
          <Button label={"Login"} onPress={
            (   ) =>{
                if(username ==  "admin" && password == "admin"){
                    navigate('/admin');
                }
                else{
                    navigate('/')
                }
            }
            
          } />
        </div>
    </div>
    </div>
    </div>
    </div>
}