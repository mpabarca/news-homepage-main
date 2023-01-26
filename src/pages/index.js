import Head from 'next/head';
import Image from 'next/image';
import {popular} from '../data/popular';
import { news } from '../data/news';
import { trending } from '../data/trending';
import popularImage from '../../public/image-web-3-desktop.jpg';
import trending1 from '../../public/image-retro-pcs.jpg';
import trending2 from '../../public/image-top-laptops.jpg';
import trending3 from '../../public/image-gaming-growth.jpg';

export default function Home() {
  return (
    <div className='home'>
      <section className='popular'>
        <Image 
          src={popularImage}
          alt='image popular section'
          width={300}
          height={100}
        />
        <div className='popular-new'>
          <h1>{popular.title}</h1>
          <p>{popular.subtitle}</p>
          <button>READ MORE</button>
        </div>
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
      </section>
    </div>
  )
}
