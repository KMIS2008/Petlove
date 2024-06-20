import {ButtonLogout} from './LogOutBtn.styled';
import { useState } from 'react';
import{ModalApproveAction} from '../ModalApproveAction/ModalApproveAction';


export const LogOutBtn=({isOpen = false, onClose = () => {}})=>{
    const [isOpenModalApproveAction, setOpenModalApproveAction] = useState(false);

    const handleOpen =()=>{
      // console.log('Opening modal...');
      setOpenModalApproveAction (true)
          if(isOpen){
          onClose()
      }
    }

    return(
        <>
        <ButtonLogout type="button" onClick={handleOpen}>Logout</ButtonLogout>
        <ModalApproveAction isOpenModalApproveAction={isOpenModalApproveAction} setOpenModalApproveAction={setOpenModalApproveAction}/>
        </>
    )
}
