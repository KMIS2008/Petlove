import {Container,ContainerTabletSelect, ContainerSelect, CustomSelect, CustomSelectType,
        Option, ContainerSvg, Svg, SvgReset, Reset, Straight,
        RadioGroup, RadioButtonLabel, RadioButton} from './NoticesFilters.styled';
import { SearchField } from "components/SearchField/SearchField";
import Select from 'react-select';
import { Formik, Form} from 'formik';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import sprite from '../../images/sprite.svg';

axios.defaults.baseURL = "https://petlove.b.goit.study/api";


export const NoticesFilters=({fetch})=>{
     // const dispatch = useDispatch();
    const [iscategories, setCategories] = useState([]);
    const [isgenders, setGenders] = useState([]);
    const [ispetTypes, setPetTypes] = useState([]);
    const [islocations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedSort, setSelectedSort] = useState(null);

    // const getFilter = () => {
    //   return {
    //     categories: iscategories,
    //     genders: isgenders,
    //     petTypes: ispetTypes,
    //     locations: islocations,
    //   };
    // };

  //   const handlCategories = (e)=>{
  //     setCategories(e.target.value)
  //     return dispatch(addFilter({...getFilter(), categories: e.target.value}))
  // }

  // const handleCategoriesChange = (e) => {
  //   setCategories(e.target.value);
  // };

  // const handleGendersChange = (e) => {
  //   setGenders(e.target.value);
  // };

  const handleResetClick = (resetForm) => {
    resetForm();
    setSelectedLocation(null);
    setSelectedSort(null); 
};
         
      useEffect(() => {
        const fetchData = async () => {
          const categoriesResponse = await axios.get('/notices/categories');
          const gendersResponse = await axios.get('/notices/sex');
          const petTypesResponse = await axios.get('/notices/species');
          const locationsResponse = await axios.get('/cities');
    
          setCategories(categoriesResponse.data);
          setGenders(gendersResponse.data);
          setPetTypes(petTypesResponse.data);
          setLocations(locationsResponse.data);
        };
    
        fetchData();
      }, []);

      const locationOptions = islocations.map(location => ({
        value: location._id,
        label: `${location.stateEn}, ${location.cityEn}, ${location.countyEn}`
      }));


      const customStyles = {
        control: (provided, state) => ({
          ...provided, 
       
          borderRadius: '30px',
          border: 'none',
          height: '42px',
          padding: '0 12px',
          fontFamily: 'Manrope',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.29',
          letterSpacing: '-0.03em',
          color: '#262626',
          boxShadow: state.isFocused ? '0 0 0 1px #F6B83D' : provided.boxShadow,
      '&:hover': {
        border: '1px solid #F6B83D',
      },
        }),
        option: (provided, state) => ({
          ...provided,
        
          borderRadius: '15px',
          border: 'none',
          padding: '0 12px',
          fontFamily: 'Manrope',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.29',
          letterSpacing: '-0.03em',
          color: state.isSelected ? '#fff' : '#26262699',
          backgroundColor: state.isSelected ? '#262626' : '#fff',
          '&:hover': {
            color: '#262626',
          },
        }),
        placeholder: (provided) => ({
          ...provided,
          color: '#262626',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#262626',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          display: 'none', 
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none', 
        }),
      };

      const formatOptionLabel = ({ label }, { inputValue }) => {
        if (!inputValue) return label;
      
        const highlightedText = label.substring(0, inputValue.length);
        const restOfText = label.substring(inputValue.length);
      
        return (
          <>
            <span style={{ color: '#262626' }}>{highlightedText}</span>
            <span style={{ color: '#26262666' }}>{restOfText}</span>
          </>
        );
      };

      return(
        <Formik       
         initialValues={{
           search: '',
           category: '',
           gender: '',
           petType: '',
           location: '',
           sortBy: '',
      }} 

      onSubmit={(values, actions) => {       
        // dispatch(addReservation(values))     
        //  fetch(values);
         actions.resetForm();}
      }>

{({ resetForm, setFieldValue }) => (
        <Form>
          <Container>
        
            <ContainerTabletSelect>    
                <SearchField name="search" fetch={fetch} setFieldValue={(value) => setFieldValue('search', value)}/> 
             <ContainerSelect>

              <CustomSelect as="select" id = "category" name="category" >
                 <Option value="">Category</Option>
                  {iscategories.map(category => (
                            <Option  key={nanoid()} value={category}>
                                {category}
                            </Option>
                        ))}
              </CustomSelect>
              <CustomSelect as="select" name="gender" >
                  <Option value="">By gender</Option>
                        {isgenders.map((gender) => (
                             <Option key={nanoid()} value={gender}>
                                 {gender}
                             </Option>
                         ))}
              </CustomSelect>

          </ContainerSelect> 
       
                   <CustomSelectType as="select" name="byTypes">
                        <Option value="">By type</Option>
                        {ispetTypes.map((byType) => (
                            <option key={nanoid()} value={byType}>
                                {byType}
                            </option>
                             ))}
                  </CustomSelectType>  
            
          <ContainerSvg>
               <Select
                name="location"
                defaultValue={islocations}
                placeholder="Location"
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
                options={locationOptions}
                onChange={(option) => {
                  setSelectedLocation(option);
                  setFieldValue('location', option.value);
                }}
                  /> 
                  
          <button type='submit'>
             <Svg >
                <use xlinkHref={sprite + '#icon-search'}/>
              </Svg  >           
           </button >

           {selectedLocation   &&   <SvgReset onClick = {() => handleResetClick(resetForm)}>
                <use xlinkHref={sprite + '#icon-x'}/>
            </SvgReset> }

            </ContainerSvg>
           </ContainerTabletSelect>   

            <Straight></Straight>

            <RadioGroup role="group" aria-labelledby="sort-group">
               <RadioButton type="radio" 
                            name="sort" 
                            value="popularity" 
                            id="popularity" 
                            onChange={() => setSelectedSort('popularity')}
                            checked={selectedSort === 'popularity'}/>
                  <RadioButtonLabel htmlFor="popularity">
                    Popular
                    {selectedSort === 'popularity' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}</RadioButtonLabel>

               <RadioButton type="radio" 
                            name="sort" 
                            value="unpopularity" 
                            id="unpopularity" 
                            onChange={() => setSelectedSort('unpopularity')}
                            checked={selectedSort === 'unpopularity'}/>
                  <RadioButtonLabel htmlFor="unpopularity">
                    Unpopular
                    {selectedSort === 'unpopularity' && (
                  <Reset onClick={() => handleResetClick(resetForm)}>
                    <use xlinkHref={sprite + '#icon-x-1'} />
                  </Reset>
                )}
                  </RadioButtonLabel>

                <RadioButton type="radio" 
                             name="sort" 
                             value="lowprice" 
                             id="lowprice" 
                             onChange={() => setSelectedSort('lowprice')}
                             checked={selectedSort === 'lowprice'}/>
                  <RadioButtonLabel htmlFor="lowprice">
                    Cheap
                    {selectedSort === 'lowprice' && (
                    <Reset onClick={() => handleResetClick(resetForm)}>
                      <use xlinkHref={sprite + '#icon-x-1'} />
                    </Reset>
                    )}
                  </RadioButtonLabel>

                <RadioButton type="radio" 
                             name="sort" 
                             value="highprice" 
                             id="highprice" 
                             onChange={() => setSelectedSort('highprice')}
                             checked={selectedSort === 'highprice'}/>
                  <RadioButtonLabel htmlFor="highprice">
                    Expensive
                    {selectedSort === 'highprice' && (
                    <Reset onClick={() => handleResetClick(resetForm)}>
                      <use xlinkHref={sprite + '#icon-x-1'} />
                    </Reset>
                    )}
                  </RadioButtonLabel>
            </RadioGroup>

          </Container> 
          </Form>
      )}
        </Formik>
)
}
      
//             <SearchField fetch={fetch}/>
        
//      <SearchField setFieldValue={(value) => setFieldValue('search', value)} />
                    
                    
