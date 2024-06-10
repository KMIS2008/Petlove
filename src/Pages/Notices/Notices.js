import { Title } from "components/Title/Title";
import { SearchField } from "components/SearchField/SearchField";
import { Pagination } from "components/Pagination/Pagination";
import {fetchnotices, fetchnoticesByKeyword} from '../../redux/operations';
import {NoticesList} from '../../components/NoticesList/NoticesList';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectorNotices} from '../../redux/selects';

export default function Notices(){
    const dispatch=useDispatch();
    const [isPageNumber, setIsPageNumber] = useState(1);
    const notices = useSelector(selectorNotices);

    const handleChangeNewPage=(number)=>{
        setIsPageNumber(number);
    }

    useEffect(()=>{
      dispatch(fetchnotices(isPageNumber))
    }, [dispatch, isPageNumber])
    return(
        <>
        <Title name="Find your favorite pet"/>
        <SearchField fetch={fetchnoticesByKeyword}/>
        <NoticesList notices={notices}/>
        <Pagination handleChangeNewPage={handleChangeNewPage} currentPage={isPageNumber}/>

        </>
    )
}