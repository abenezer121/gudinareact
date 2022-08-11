import React , {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "./../redux/actions/userType"

const AdminSwitcher = () => {
    const dispatch = useDispatch()
       const userState = useSelector((state) => state.usertype);
    useEffect(() => {
     
  console.log(userState)
        dispatch(setUser())
        localStorage.setItem('admin', true);
        console.log(userState)
       
       
    },[])
    return (<div></div>)
}

export default AdminSwitcher