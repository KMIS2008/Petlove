import DogMobile1 from '../../images/DogMobile1.jpg';
import DogMobile2 from '../../images/DogMobile2.jpg';
import DogMobile3 from '../../images/DogMobile3.jpg';
import DogTablet1 from '../../images/DogTablet1.jpg';
import DogTablet2 from '../../images/DogTablet2.jpg';
import DogTablet3 from '../../images/DogTablet3.jpg';
import DogDesktop1 from '../../images/DogDesktop1.jpg';
import DogDesktop2 from '../../images/DogDesktop2.jpg';
import DogDesktop3 from '../../images/DogDesktop3.jpg';
import {Img} from './PetBlock.styled';

export const PetBlock = ()=>{
    return (
        <picture>
            <source
            media="(min-width: 1280px)"
            srcSet={`
                ${DogDesktop1} 1x,
                ${DogDesktop2} 2x,
                ${DogDesktop3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${DogTablet1} 1x,
                ${DogTablet2} 2x,
                ${DogTablet3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
            //  sizes="(min-width: 375px) 100vw, 335px"
             srcSet={`
               ${DogMobile1} 1x,
               ${DogMobile2} 2x,
               ${DogMobile3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
            //  sizes="(min-width: 320px) 100vw, 320px"
             srcSet={`
               ${DogMobile1} 1x,
               ${DogMobile2} 2x,
               ${DogMobile3} 3x
               `}
            />
            <Img alt="dog"
                src={DogMobile1} 
                srcSet={`
                ${DogMobile1} 1x,
                ${DogMobile2} 2x,
                ${DogMobile3} 3x
                      `}
                style={{ width: '100%', height: 'auto' }}/>

        </picture>
    )
}