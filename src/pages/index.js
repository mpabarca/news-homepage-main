import Image from 'next/image';
import PopularSectionHome from '../components/molecules/popularSectionHome';
import NewsSectionHome from '../components/molecules/newsSectionHome';
import TrendingSectionHome from '../components/molecules/trendingSectionHome';

export default function Home() {
  return (
    <div className='home'>
      <PopularSectionHome />
      <NewsSectionHome />
      <TrendingSectionHome />
    </div>
  )
};
