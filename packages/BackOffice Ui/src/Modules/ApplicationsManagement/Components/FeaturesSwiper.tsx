import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Accordion from "@components/Accordion";
import { SlideNextButton } from "../Components/SlideNextButton";
import { Puff } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import { useGetAllFeaturesbyIdQuery } from "../../../store/admin-API/modules-controller/modules-controller_endpoints" 
import { useGetFeatureByIdQuery } from "../../../store/admin-API/applications-controller/applications_controller_endpoints" 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Features } from '../utils/Types';



const FeaturesSwiper = () => {
  const [leftFeatures, setLeftFeatures] = useState<Features[]>([]);
  const [rightFeatures, setRightFeatures] = useState<Features[]>([]);
  const { id } = useParams();
  const { data: features, error, isLoading } = useGetAllFeaturesbyIdQuery(id);
  const { data: enabledFeatures, enabledError, enabledIsLoading } = useGetFeatureByIdQuery({id});
  console.log(enabledFeatures)
  useEffect(() => {
    if (features) {
      const halfIndex = Math.ceil(features.length / 2);
      const leftHalf = features.slice(0, halfIndex);
      const rightHalf = features.slice(halfIndex);
      setLeftFeatures(leftHalf);
      setRightFeatures(rightHalf);
    }
  }, [features]);

  const [sliderSettings, setSliderSettings] = useState({
    slidesPreview: 1,
    spaceBetween: 60,
    direction: "vertical",
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 5
      }
    }
  });
  return (
    <div className="h-80 flex mx-20 relative">
        <Swiper {...sliderSettings} className="flex-1 flex justify-center items-center relative">
          <SlideNextButton pos={true} setter={setSliderSettings} />
          {isLoading || error ? (
            <div className="absolute">
              <Puff
                visible={true}
                height="80"
                width="80"
                color="#9aa1ad"
                ariaLabel="puff-loading"
                wrapperClass=""
              />
            </div>
          ) : (
            leftFeatures.map((feature) => (
              <SwiperSlide key={feature.id} className="w-[400px] mx-auto">
                <Accordion feature={feature} />
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <Swiper {...sliderSettings} className="flex-1 flex justify-center items-center">
          <SlideNextButton />
          {isLoading || error ? (
            <div className="absolute">
               <Puff
                visible={true}
                height="80"
                width="80'"
                color="#9aa1ad"
                ariaLabel="puff-loading"
                wrapperClass=""
              />
            </div>
          ) : (
            rightFeatures.map((feature) => (
              <SwiperSlide key={feature.id} className="w-[400px] mx-auto">
                <Accordion feature={feature} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        {
          error? toast.error(error.error):  null 
        }
      </div>
  )
}

export default FeaturesSwiper