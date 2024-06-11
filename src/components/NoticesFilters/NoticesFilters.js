import {Container} from './NoticesFilters.styled';
import { SearchField } from "components/SearchField/SearchField";
import { Formik, Form, Field } from 'formik';
// import { useState } from 'react';
// import Select from 'react-select';

export const NoticesFilters=({fetch})=>{}

// export const NoticesFilters=({fetch})=>{
//     // const dispatch = useDispatch();
//     const [categories, setCategories] = useState([]);
//     const [genders, setGenders] = useState([]);
//     const [petTypes, setPetTypes] = useState([]);
//     const [locations, setLocations] = useState([]);

//     return (
//         <Formik
//         initialValues={{
//             search: '',
//             category: '',
//             gender: '',
//             petType: '',
//             location: '',
//             sort: 'popularity',
//         }}
//         onSubmit={(values) => {
//             // dispatch(fetchNotices(values));
//         }}
//     >
//         {({ setFieldValue, resetForm }) => (
//             <Form>
//                 <Container>
            
//             <SearchField fetch={fetch}/>
        
//                     <SearchField setFieldValue={(value) => setFieldValue('search', value)} />
                    
//                     <Field as="select" name="category">
//                         <option value="">Select Category</option>
//                         {categories.map((category) => (
//                             <option key={category.id} value={category.id}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </Field>
                    
//                     <Field as="select" name="gender">
//                         <option value="">Select Gender</option>
//                         {genders.map((gender) => (
//                             <option key={gender.id} value={gender.id}>
//                                 {gender.name}
//                             </option>
//                         ))}
//                     </Field>
                    
//                     <Field as="select" name="petType">
//                         <option value="">Select Pet Type</option>
//                         {petTypes.map((petType) => (
//                             <option key={petType.id} value={petType.id}>
//                                 {petType.name}
//                             </option>
//                         ))}
//                     </Field>

//                     <Select
//                         name="location"
//                         options={locations.map((location) => ({ label: location.name, value: location.id }))}
//                         onChange={(option) => setFieldValue('location', option.value)}
//                         placeholder="Select Location"
//                     />
                    
//                     <div role="group" aria-labelledby="sort-group">
//                         <label>
//                             <Field type="radio" name="sort" value="popularity" />
//                             Popularity
//                         </label>
//                         <label>
//                             <Field type="radio" name="sort" value="price" />
//                             Price
//                         </label>
//                     </div>


//                 </Container>
//             </Form>
//         )}
//     </Formik>

//     )
// }