import {Container, Button, ButtonNext, StyledRiArrowLeftDoubleFill, StyledIoIosArrowBack, StyledIoIosArrowForward, StyledArrowRightDoubleFill } from './Pagination.styled';


export const Pagination=({handlePageChange})=>{
    return(
        <Container>
            <ButtonNext type='buton'>  <StyledRiArrowLeftDoubleFill /> </ButtonNext>
           <ButtonNext type='buton'> <StyledIoIosArrowBack/> </ButtonNext>  
           <Button type='buton'>1</Button>
           <Button type='buton'>2</Button>
           <Button type='buton'>...</Button>
           <ButtonNext type='buton'><StyledIoIosArrowForward/> </ButtonNext>
           <ButtonNext type='buton'><StyledArrowRightDoubleFill/></ButtonNext> 



        </Container>
    )
}





// <Button type='buton'> &laquo; </Button>
// <Button type='buton'>&lsaquo;</Button>  
// <Button type='buton'>1</Button>
// <Button type='buton'>2</Button>
// <Button type='buton'>3</Button>
// <Button type='buton'>&rsaquo;</Button>
// <Button type='buton'>&raquo;</Button> 


          // {/* <PaginationList
          //   previousLabel={<IoIosArrowBack />}
          //   nextLabel={<IoIosArrowForward />}
          //   breakLabel={'...'}
          //   firstLabel={<RiArrowLeftDoubleFill />}
          //   lastLabel={<RiArrowRightDoubleFill />}         
          //   // pageCount={totalPages}
          //   marginPagesDisplayed={2}
          //   pageRangeDisplayed={5}
          //   onPageChange={handlePageChange}
          //   containerClassName={'pagination'}
          //   pageClassName={'page-item'}
          //   pageLinkClassName={'page-link'}
          //   previousClassName={'page-item'}
          //   previousLinkClassName={'page-link'}
          //   nextClassName={'page-item'}
          //   nextLinkClassName={'page-link'}
          //   breakClassName={'page-item'}
          //   breakLinkClassName={'page-link'}
          //   activeClassName={'active'}

          // /> */}