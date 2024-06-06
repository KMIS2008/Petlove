import React, { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import {Container, Input, Svg, SvgReset} from './SearchField.styled';
import {fetchNewsByKeyword} from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const SearchField =({pageNumber, setpageNumber})=>{
  const dispatch =  useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleResetClick = () => {
        setSearchValue('');
    
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
      setpageNumber(1);
      dispatch(fetchNewsByKeyword({ keyword: searchValue, pageNumber: 1 }));
      setSearchValue('');
  };

  useEffect(() => {
      if (searchValue) {
          dispatch(fetchNewsByKeyword({ keyword: searchValue, pageNumber }));
      }
  }, [dispatch, searchValue, pageNumber]);


    return(
        <Container onClick = {handleSubmit}>
           <Input placeholder="Search"
           name='name'
           type='text'
           value={searchValue}
           onChange={handleInputChange}/>

           <button type='submit'>
             <Svg >
                <use xlinkHref={sprite + '#icon-search'}/>
              </Svg  >           
           </button>

            <SvgReset onClick = {handleResetClick}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </SvgReset> 
        
        </Container>
    )
}

