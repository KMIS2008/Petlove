import { Title } from "../../components/Title/Title";
import {SearchField} from '../../components/SearchField/SearchField';
import {Container} from './News.styled';
import {NewsList} from '../../components/NewsList/NewsList';
import { useEffect, useState } from "react";
import {fetchnews} from '../../redux/operations';
import { useDispatch, useSelector } from "react-redux";
import {selectorNews} from '../../redux/selects';
import {Pagination} from '../../components/Pagination/Pagination';

export default function News(){
    const dispatch = useDispatch();
    const [ispageNumber, setIsPageNumber] = useState(1);
    const news = useSelector(selectorNews);

    const handleChangeNewPage=(number)=>{
        setIsPageNumber(number)
    }

    useEffect(()=>{
        dispatch(fetchnews(ispageNumber))
     
    },[dispatch, ispageNumber])


return (
<div>
    <Container>
       <Title name={'News'}/>
       <SearchField/> 
    </Container>
    <NewsList news={news.results}/>  
    <Pagination handleChangeNewPage={handleChangeNewPage} currentPage={ispageNumber}/> 
</div>
)
}