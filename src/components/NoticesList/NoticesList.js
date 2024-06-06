import {NoticesItem} from '../NewsItem/NewsItem';


export const NoticesList=({notices})=>{
    return (
        <ul>
            {notices?.map(iterm=>( 
            <NoticesItem key={iterm._id} notice={iterm}/>
        ))}
        
        </ul>
    )
}