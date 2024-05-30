
import 'swiper/css/pagination';
import 'swiper/css';
import AppStatus from "../Components/AppStatus";
import { TextGenerateEffect } from '@components/Text-Generate-Effect';
import FeaturesSwiper from '../Components/FeaturesSwiper';

const words = `Application Features Catalogue`;

const AppFeatures = () => {
  

  return (
    <>
      {/* TITLE HERE */}
      <div className="space-y-12 mt-10 mx-10">
        <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      </div>
      <AppStatus />
      <FeaturesSwiper />
    </>
  )
}

export default AppFeatures;
