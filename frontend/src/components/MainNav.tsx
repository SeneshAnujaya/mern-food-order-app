import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"
import { Link } from "react-router-dom"

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
    <span className="flex space-x-2 items-center">
       {isAuthenticated ?<> <Link to="/order-status" className="font-semibold text-[0.95rem]  text-gray-800 hover:text-mainOrange">Order Status</Link> <UsernameMenu/></> :   <Button variant="ghost" className="font-bold  text-gray-800 hover:text-white hover:bg-mainOrange hover:border-mainOrange  border border-gray-400 rounded-full" onClick={async () => await loginWithRedirect() }>
        Log In
     </Button>} 
    </span>
   
  )
}

export default MainNav