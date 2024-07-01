import Modal from "react-modal";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import {Container, SvgButton, Title} from './ModalEditUser.styled';

Modal.setAppElement('#modal');

export const ModalEditUser=({isModalEditUser, setModalEditUser})=>{

    const customStyles = {
        overlay: {
          backgroundColor: "rgba(38, 38, 38, 0.3)",
         
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          maxWidth: "335px",
          maxHeight: "473px",
          borderRadius: "30px",
          backgroundColor: "#FFFFFF",
        },
      };
    
      useEffect(() => {
        if (isModalEditUser) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isModalEditUser]);
    return(
        <>

<Modal   
          isOpen={isModalEditUser}
          onRequestClose={() => {
            setModalEditUser(false);
          }}
               
          style={customStyles}
  
          contentLabel="More info modal"     
        >
            <Container>
                 <SvgButton
                   onClick={() => {
                   setModalEditUser(false);
                   }}>
                        <svg width= '24px' height='24px'>
                           <use xlinkHref={sprite + '#icon-x'} />
                        </svg> 
                 </SvgButton>

                 <Title>Edit information</Title>


            </Container>
  
        </Modal>
        </>
    )
}