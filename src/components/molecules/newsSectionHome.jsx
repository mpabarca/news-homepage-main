import { news } from '../../data/news';

const NewsSectionHome = () => {
    return (
        <div className='list-news'>
            <h1>New</h1>
            {news.map((element, index) => {
            return (
                <div className='new' key={index}>
                <h2>{element.title}</h2>
                <p>{element.subtitle}</p>
                </div>
            )
            })}
        </div>
    )
};

export default NewsSectionHome;