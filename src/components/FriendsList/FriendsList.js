import { FriendsItem } from "../FriendsItem/FriendsItem";


export const FriendsList =({friends})=>{

    return (
        <ul>
            {friends?.map(friend=>(
                <FriendsItem key={friend._id} friend={friend}/>
            ))}
        </ul>
    )
}