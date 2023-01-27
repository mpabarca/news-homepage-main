import { news } from '../../data/news';
import Link from 'next/link';

const NewsSectionHome = () => {
    return (
        <div className='news'>
            <h1>New</h1>
            <div className='list-news'>
                {news.map((element, index) => {
                return (
                    <Link className='new' key={index} href='/'>
                        <h3>{element.title}</h3>
                        <p>{element.subtitle}</p>
                    </Link>
                )
                })}
            </div>
        </div>
    )
};

export default NewsSectionHome;