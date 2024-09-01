import { Header } from "./Header"

export const Appbar = ({text, handleChange, buttonText}) => {
  return <div className="border-b flex justify-between px-10 py-4">
        <Header label={text} />
    <div>
        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={handleChange}>{buttonText}</button>

    </div>
  </div>
}