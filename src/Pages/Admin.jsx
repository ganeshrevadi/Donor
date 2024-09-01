
import { Dashboard } from "./Dashboard";
import { Appbar } from "../Components/Appbar";

export const Admin = () => { 
    return (
        <div className="grid grid-col justify-center text-center ">
        <Appbar text={"Admin Dashboard"} buttonText={"Contact Us"}/>
        <Dashboard/>
        
        </div>
    );
}