import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {PetBlock} from '../../components/PetBlock/PetBlock';
import DogAddMobile1 from '../../images/DogAddMobile1.jpg';
import DogAddMobile2 from '../../images/DogAddMobile2.jpg';
import DogAddMobile3 from '../../images/DogAddMobile3.jpg';
import DogAddTablet1 from '../../images/DogAddTablet1.jpg';
import DogAddTablet2 from '../../images/DogAddTablet2.jpg';
import DogAddTablet3 from '../../images/DogAddTablet3.jpg';
import DogAddDesctop1 from '../../images/DogAddDesctop1.jpg';
import DogAddDesctop2 from '../../images/DogAddDesctop2.jpg';
import DogAddDesctop3 from '../../images/DogAddDesctop3.jpg';
import {Title, TitleSpan, ContainerForm, ButtonSubmit, RadioGroup, 
        SvgIcon, Error, ContainerInput, InputWrapper, Input, ButtonLoad,
        ButtonLoadSpan,SuccessMessage} from './AddPet.styled';
import sprite from '../../images/sprite.svg';



const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    species: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    birthday: Yup.string()
                 .matches(/^\d{4}-\d{2}-\d{2}$/,'Enter a valid Birthday')
                 .required('Required'),
    imgUrl: Yup.string()
              .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,'Enter a valid Url')
              .required('Required'),
});


export default function AddPet (){

    // const navigator = useNavigate(); 
    const [selectedSex, setSelectedSex] = useState('');

    const { register, handleSubmit, setValue, formState: { errors, touchedFields }, reset } = useForm({
        resolver: yupResolver(SignupSchema),
        mode: 'onBlur',
      });


    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { isSubmitting, errors, touchedFields },
    //   } = useForm({
    //       resolver: yupResolver(SignupSchema)
    //   });

  
    const onSubmit = async (data, e) => {
        // const {  } = data;
        e.preventDefault();
        try {
            // await dispatch(logIn({ email, password }));
            // navigator('/profile');
            reset();
        } catch (errors) {
            // navigator('/profile');
        }
    };

    const handleSexChange = (value) => {
        setSelectedSex(value);
        setValue('sex', value);
      };

      const getIcon = (sex, selected) => {
        const iconMap = {
          female: selected ? 'icon-female-1' : 'icon-female',
          male: selected ? 'icon-male-1' : 'icon-male',
          multiple: selected ? 'icon-multiple-1' : 'icon-multiple',
        };
        return iconMap[sex];
      };

    return(
        <>
            <PetBlock 
                      imgDesctop1={DogAddDesctop1}
                      imgDesctop2={DogAddDesctop2}
                      imgDesctop3={DogAddDesctop3}
                      imgTablet1={DogAddTablet1}
                      imgTablet2={DogAddTablet2}
                      imgTablet3={DogAddTablet3}
                      imgMobile1={DogAddMobile1} 
                      imgMobile2={DogAddMobile2} 
                      imgMobile3={DogAddMobile3}
                      />
             
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <Title> Add my pet / 
                        <TitleSpan>Personal details</TitleSpan>
                </Title>

                <RadioGroup>
                    <SvgIcon
                       selected={selectedSex === 'female'}
                       onClick={() => handleSexChange('female')}>
                             <use xlinkHref={`${sprite}#${getIcon('female', selectedSex === 'female')}`} />
                    </SvgIcon>

                    <SvgIcon
                       selected={selectedSex === 'male'}
                       onClick={() => handleSexChange('male')}>
                              <use xlinkHref={`${sprite}#${getIcon('male', selectedSex === 'male')}`} />
                    </SvgIcon>

                   <SvgIcon
                       selected={selectedSex === 'multiple'}
                       onClick={() => handleSexChange('multiple')}>
                              <use xlinkHref={`${sprite}#${getIcon('multiple', selectedSex === 'multiple')}`} />
                    </SvgIcon>
                </RadioGroup>
      {errors.sex && <Error>{errors.sex.message}</Error>}

                 <ButtonSubmit type='submit'>
                           <svg width={68} height={68}>
                               <use xlinkHref={sprite + '#icon-paw'}/>
                            </svg>               
                 </ButtonSubmit>

                 <ContainerInput>
                     <InputWrapper>
                       <Input id="imgUrl" 
                              placeholder="Enter URL"
                            //   $isValid={!errors.imgUrl}
                            $isError={!!errors.password}
                            $isSuccess={!errors.password && touchedFields.password}

                              {...register('imgUrl', {
                                required: 'Required',
                                pattern: {
                                    value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
                                    message: 'Enter a valid imgUrl',
                                },
                            })} />
                       {errors.imgUrl && <Error>{errors.imgUrl.message}</Error>} 
                       {!errors.imgUrl && touchedFields.imgUrl && <SuccessMessage>Password is secure</SuccessMessage>}                    
                     </InputWrapper>


                       <ButtonLoad type='button'>
                              <ButtonLoadSpan> Upload  photo</ButtonLoadSpan>
                              <svg width={16} height={16}>
                                  <use xlinkHref={sprite + '#icon-upload-cloud'}/>
                              </svg>
                       </ButtonLoad>
                 </ContainerInput>

            </ContainerForm> 

                   



    
        </>

    )

}