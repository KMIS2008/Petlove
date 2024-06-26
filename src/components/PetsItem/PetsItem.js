import sprite from '../../images/sprite.svg';
import {Container, Img, ContainerInfo, ContainerTitle, Title, DeleteButton, ContainerTable, TitleTable,
    TextTable,
} from './PetsItem.styled';

export const PetsItem =({pet})=>{
    const {imgURL, title, name, birthday, sex, species }=pet;
    return(
        <Container>
            <Img src={imgURL} alt={title}/>
            <ContainerInfo>
                <ContainerTitle>
                    <Title>{title}</Title>
                    <DeleteButton type='button'>
                        <svg width={16} height={16}>
                            <use xlinkHref={sprite + '#icon-trash-2'}/>
                        </svg>
                    </DeleteButton>
                </ContainerTitle>
               
               <ContainerTable>
                   <div>
                        <TitleTable>Name</TitleTable>
                        <TextTable>{name}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Birthday</TitleTable>
                        <TextTable>{birthday}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Sex</TitleTable>
                        <TextTable>{sex}</TextTable>
                   </div>
                   <div>
                        <TitleTable>Species</TitleTable>
                        <TextTable>{species}</TextTable>
                   </div>
         
               </ContainerTable>

            </ContainerInfo>
        
        </Container>
    )
}
