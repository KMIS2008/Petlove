import { Formik } from 'formik';
import { Button } from './FormAdContact.styled'; 
import { FormStyle,
         FieldStyle,
         FormLabel,
         ErrorMsg} from './FormAdContact.styled';
import * as Yup from 'yup';

import { addContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selects'; 
 
         const SignupSchema = Yup.object().shape({
           name: Yup.string()
             .min(2, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
             .required('Required'),
           number: Yup.string()
             .min(10, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
             .max(14, 'Too Long!')
             .required('Required'),
         });

export const FormAddContact = ()=> {
const contacts = useSelector(selectContacts);
const dispatch = useDispatch();

const addContacts =(newContact)=> {
    
  const newAddContact = contacts.some(contact=> newContact.name.toLowerCase().trim() === contact.name.toLowerCase());

    if(newAddContact){
      alert(`${newContact.name} is already in contacts`);
      return;
    } 

    dispatch(addContact(newContact))
}

    return (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}

      validationSchema = {SignupSchema}

      onSubmit={(values, actions) => {
        addContacts(values);
        actions.resetForm();
      }}

    >
      <FormStyle>
           <FormLabel >Name
                <FieldStyle            
                     type="text"
                     name="name"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required />
                <ErrorMsg name="name" component="span"/>
            </FormLabel>

            <FormLabel >Number
                <FieldStyle            
                     type="tel"
                     name="number"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required />
                <ErrorMsg name="number" component="span"/>
            </FormLabel>
        
        <Button type="submit">Submit</Button>
      </FormStyle>
    </Formik>
  </div>
    )
}