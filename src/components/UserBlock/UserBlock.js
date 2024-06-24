import React from 'react';
import defaultAvatar from '../../images/user.png';
// import { EditUserBtn } from '../EditUserBtn/EditUserBtn';
import { useSelector } from 'react-redux';
import {UserInfo, User, UserAvatar, UserUpload, UserTitle} from './UserBlock.styled';

export const UserBlock=()=>{

    const user = useSelector((state) => state.auth.user);
    const avatarUrl = user.avatar || defaultAvatar;
    const userName = user.name;
    const userEmail = user.email;
    const userPhone = user.phone;

    return(
        <div>
            {user.avatar ? (
                <UserAvatar width={94} height={94} src={avatarUrl} alt="User Avatar" />
                
            ) : (
                <UserAvatar width={94} height={94}  src={defaultAvatar} alt="User Avatar" />
            )}
            
            <UserUpload>Upload photo</UserUpload>

            <UserTitle>My information</UserTitle>

            <UserInfo>
                <User>{userName}</User>
                <User>{userEmail}</User>
                <User>{userPhone}</User>
            </UserInfo>
        </div>

    )
}