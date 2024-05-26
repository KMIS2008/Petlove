import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { FiEyeOff, FiEye, FiCheck, FiX } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, Input, ButtonEye, Container, Error, Button, InputContainer, ValidationIcon } from './LoginFormstyled';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Email must contain @")
              .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,'Invalid email format')
              .required('Required'),
    password: Yup.string().min(7, "Password must contain at least 7 symbols").required('Required'),
});

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors, touchedFields },
      } = useForm({
          resolver: yupResolver(SignupSchema)
      });

    const dispatch = useDispatch();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (data, e) => {
        const { email, password } = data;
        e.preventDefault();
        try {
            await dispatch(logIn({ email, password }));
            reset();
        } catch (error) {
            setError('Invalid email or password. Try again');
        }
    };

    const handlePassword = evt => {
        evt.preventDefault();
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register('email')}
                    isError={!!errors.email}
                    isSuccess={!errors.email && touchedFields.email}
                />
                {errors.email && <ValidationIcon><FiX color="red" /></ValidationIcon>}
                {!errors.email && touchedFields.email && <ValidationIcon><FiCheck color="#08AA83" /></ValidationIcon>}
                {errors.email && <Error>{errors.email.message}</Error>}
            </InputContainer>

            <Container>
                <InputContainer>
                    <Input
                        type={isPasswordVisible ? 'text' : 'password'}
                        id="password"
                        placeholder="Password"
                        {...register('password')}
                        isError={!!errors.password}
                        isSuccess={!errors.password && touchedFields.password}
                    />
                    {errors.password && <ValidationIcon><FiX color="red" /></ValidationIcon>}
                    {!errors.password && touchedFields.password && <ValidationIcon><FiCheck color="#08AA83"/></ValidationIcon>}
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputContainer>
                <ButtonEye type="button" onClick={() => setVisibility(!visibility)}>
                    {visibility ? (
                        <FiEye stroke="#f6b83d" onClick={handlePassword} />
                    ) : (
                        <FiEyeOff stroke="#f6b83d" onClick={handlePassword} />
                    )}
                </ButtonEye>
            </Container>

            <Button type="submit" disabled={isSubmitting}>Log In</Button>
            {error && <Error>{error}</Error>}
        </Form>
    );
};

// import { useDispatch } from "react-redux"
// import { logIn } from "redux/auth/operations";
// import { Form, 
//          Label,
//          Button } from "./LoginFormstyled";



// export const LoginForm =()=>{
//     const dispatch = useDispatch();
//     const handlSubmit =e=>{
//         e.preventDefault();
//         const form = e.currentTarget;
//         dispatch(
//             logIn({
//                 email: form.elements.email.value,
//                 password: form.elements.password.value,
//             })
//         )
//         form.reset();
//     }
//     return(
//         <Form onSubmit={handlSubmit}>
//             <Label> Email
//                 <input type="email" 
//                        name="email" 
//                        placeholder="Введіть адресу електроної пошти" 
//                        required
//                 />
//             </Label>

//             <Label > Password
//                  <input type="password"
//                         name="password"
//                         placeholder="Введите пароль"
//                         required
//                  />
//             </Label>

//             <Button type="submit">Log in</Button>
            
//         </Form>
//     )
// }