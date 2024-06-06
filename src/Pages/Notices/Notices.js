import { Title } from "components/Title/Title";
import { SearchField } from "components/SearchField/SearchField";
import { Pagination } from "components/Pagination/Pagination";

export default function Notices(){
    return(
        <>
        <Title name="Find your favorite pet"/>
        <SearchField/>
        <Pagination/>

        </>
    )
}