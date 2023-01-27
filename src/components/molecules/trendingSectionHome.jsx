import Link from 'next/link';
import { navLinks } from '../../data/navbarLinks';
import Image from 'next/image';
import { trending } from '../../data/trending';

const TrendingSectionHome = () => {
    return (
        <div className='list-trending'>
            {trending.map((element, index) => {
            return (
                <Link href='/' className='trending' key={index}>
                    <Image 
                        src={element.imagePath}
                        alt='image trending section'
                        width={100}
                        height={120}
                    />
                    <div className='info-trending'>
                        <h1>{element.number}</h1>
                        <h3>{element.title}</h3>
                        <p>{element.subtitle}</p>
                    </div>
                </Link>
            )
            })}
        </div>
    )
};

export default TrendingSectionHome;