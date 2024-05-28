import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { ButtonLogout } from './UserNav.styled';


export const UserNav=({isOpen, onClose})=>{
  const dispatch = useDispatch();

  const handlLogout =()=>{
    dispatch(logOut())
    if(isOpen){
        onClose()
    }
  }
return (
    <div>
       
       <ButtonLogout type="button" onClick={handlLogout}>Logout</ButtonLogout>
    </div>
)
}