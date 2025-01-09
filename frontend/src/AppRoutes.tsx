
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<span className='text-red-500'>Home page</span>}/>
        <Route path='/user-profile' element={<span>User Profile</span>}/>
    </Routes>
  )
}

export default AppRoutes