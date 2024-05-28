// import DogMobile1 from '../../images/DogMobile1.jpg';
// import DogMobile2 from '../../images/DogMobile2.jpg';
// import DogMobile3 from '../../images/DogMobile3.jpg';
// import DogTablet1 from '../../images/DogTablet1.jpg';
// import DogTablet2 from '../../images/DogTablet2.jpg';
// import DogTablet3 from '../../images/DogTablet3.jpg';
// import DogDesktop1 from '../../images/DogDesktop1.jpg';
// import DogDesktop2 from '../../images/DogDesktop2.jpg';
// import DogDesktop3 from '../../images/DogDesktop3.jpg';
import {Img} from './PetBlock.styled';

export const PetBlock = ({imgDesctop1, imgDesctop2, imgDesctop3,
                          imgTablet1, imgTablet2, imgTablet3,
                          imgMobile1, imgMobile2, imgMobile3}
 )=>{
    return (
        <picture>
            <source
            media="(min-width: 1280px)"
            srcSet={`
                ${imgDesctop1} 1x,
                ${imgDesctop2} 2x,
                ${imgDesctop3} 3x
                `}
            />
            <source
            media="(min-width: 768px)"
            srcSet={`
                ${imgTablet1} 1x,
                ${imgTablet2} 2x,
                ${imgTablet3} 3x
                `}
            />
            <source
             media="(min-width: 375px)"
            //  sizes="(min-width: 375px) 100vw, 335px"
             srcSet={`
               ${imgMobile1} 1x,
               ${imgMobile2} 2x,
               ${imgMobile3} 3x
               `}
            />
            <source
             media="(min-width: 320px)"
            //  sizes="(min-width: 320px) 100vw, 320px"
             srcSet={`
               ${imgMobile1} 1x,
               ${imgMobile2} 2x,
               ${imgMobile3} 3x
               `}
            />
            <Img alt="dog"
                src={imgMobile1} 
                srcSet={`
                ${imgMobile1} 1x,
                ${imgMobile2} 2x,
                ${imgMobile3} 3x
                      `}
                style={{ width: '100%', height: 'auto' }}/>

        </picture>
    )
}