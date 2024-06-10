import {NoticesItem} from '../NoticesItem/NoticesItem';
import {Container} from './NoticeList.styled';


export const NoticesList=({notices})=>{

    return (
        <Container>

            {notices?.map(iterm=>( 
            <NoticesItem key={iterm._id} notice={iterm}/>
        ))}
        
        </Container>
    )
}