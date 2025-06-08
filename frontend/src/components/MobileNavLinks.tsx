import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"


const MobileNavLinks = () => {
    const {logout} = useAuth0();
  return (
    <>
     <Link to="/order-status" className="flex bg-white items-center font-bold text-gray-700 hover:text-mainOrange mt-3">Order Status</Link>
      <Link to="/manage-restaurant" className="flex bg-white items-center font-bold text-gray-700 hover:text-mainOrange">My Restaurant</Link>
    <Link to="/user-profile" className="flex bg-white items-center font-bold text-gray-700 hover:text-mainOrange">User Profile</Link>
    <Button onClick={() => logout()} className="flex items-center bg-mainOrange py-6 px-3 font-bold hover:bg-gray-800 mt-2">
        Log Out
    </Button>
    </>
  )
}

export default MobileNavLinks