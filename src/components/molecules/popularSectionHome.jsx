import Image from 'next/image';
import popularImage from '../../../public/image-web-3-desktop.jpg';
import {popular} from '../../data/popular';
import Link from 'next/link';

const PopularSectionHome = () => {
    return (
        <div className='popular'>
            <Image 
                src={popularImage}
                alt='image popular section'
                width={1000}
                height={600}
            />
            <div className='popular-new'>
                <h1>{popular.title}</h1>
                <div className='more-info'>
                    <p>{popular.subtitle}</p>
                    <Link href='/'>READ MORE</Link>
                </div>
            </div>
        </div>
    )
};

export default PopularSectionHome;