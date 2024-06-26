import {EditUserBtn} from '../EditUserBtn/EditUserBtn';
import {UserBlock} from '../UserBlock/UserBlock';
import { PetsBlock } from 'components/PetsBlock/PetsBlock';
import { LogOutBtn } from 'components/LogOutBtn/LogOutBtn';

export const UserCard=()=>{
    return (
        <>
        <EditUserBtn/>
        <UserBlock/>
         <PetsBlock/>
         <LogOutBtn/>
        </>
    )
}