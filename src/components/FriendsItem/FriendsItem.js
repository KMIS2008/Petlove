import React, { useEffect } from "react";


export const FriendsItem =({friend})=>{

    const {workDays, imageUrl , title, email, address, phone}=friend;
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <li>
               <ul>
                    {workDays?.map((day, index) => (
                        <li key={day._id}>
                            {daysOfWeek[index]}: {day.isOpen ? `${day.from} - ${day.to}` : 'Closed'}
                        </li>
                    ))}
                </ul>

                <div>
                    <img src= {imageUrl} alt={title}/>
                <div>

                </div>
                    <h4>
                       {title}
                    </h4>

                    {email && <p>Email: {email}</p>}

                    {address && <p>Adress: {address}</p>}

                    {phone && <p>Phone: {phone}</p>}

                </div>
        </li>
    )
}