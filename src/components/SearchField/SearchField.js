import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import {Container, Input, Svg, SvgReset} from './SearchField.styled';

export const SearchField =()=>{
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleResetClick = () => {
        setSearchValue('');
    };

    return(
        <Container>
           <Input placeholder="Search"
           value={searchValue}
           onChange={handleInputChange}/>
             <Svg>
                <use xlinkHref={sprite + '#icon-search'}/>
              </Svg> 

              <SvgReset onClick = {handleResetClick}>
                <use xlinkHref={sprite + '#icon-x'}/>
              </SvgReset> 
        
        </Container>
    )
}

