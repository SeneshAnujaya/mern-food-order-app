import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 font-semibold text-[0.95rem] text-gray-800 hover:text-mainOrange gap-2 focus:outline-none'>
    <CircleUserRound className='text-mainOrange'/>
    {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='p-2.5'>
        <DropdownMenuItem>
            <Link to="/manage-restaurant" className='font-semibold text-sm text-gray-800 hover:text-mainOrange hover:bg-transparent hover:shadow-none'>Manage Restaurant</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link to="/user-profile" className='font-semibold text-sm text-gray-800 hover:text-mainOrange'>User Profile</Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button onClick={() => logout()} className='mt-2 flex flex-1 text-sm font-bold bg-mainOrange'>Log Out</Button>
            </DropdownMenuItem>
            
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu