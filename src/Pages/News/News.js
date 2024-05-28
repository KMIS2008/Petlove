import { Title } from "../../components/Title/Title";
import {SearchField} from '../../components/SearchField/SearchField';
import {Container} from './News.styled';

export default function News(){
return (
<div>
    <Container>
       <Title name={'News'}/>
       <SearchField/>        
    </Container>
</div>
)
}