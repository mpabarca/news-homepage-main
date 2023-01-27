import Link from 'next/link';
import { navLinks } from '../../data/navbarLinks';
import Image from 'next/image';
import { trending } from '../../data/trending';
import trending1 from '../../../public/image-retro-pcs.jpg';
import trending2 from '../../../public/image-top-laptops.jpg';
import trending3 from '../../../public/image-gaming-growth.jpg';

const TrendingSectionHome = () => {
    return (
        <div className='list-trending'>
        {trending.map((element, index) => {
          return (
            <div className='trending' key={index}>
              <Image 
                src={trending1}
                alt='image trending section'
                width={100}
                height={100}
              />
              <h1>{element.number}</h1>
              <h2>{element.title}</h2>
              <p>{element.subtitle}</p>
            </div>
          )
        })}
        </div>
    )
};

export default TrendingSectionHome;