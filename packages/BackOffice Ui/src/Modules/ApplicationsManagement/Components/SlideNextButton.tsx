import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SlideNextButton = ({ pos, setter }: any) => {
    const swiper = useSwiper();
    
    return (
        <>
            {pos && setter ? <div className=" text-[--txt] mt-3 ">
                < button  onClick={() => {
                    swiper.slidePrev()
                    console.log(setter)
                    setter({
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
                            slidesPerView: 3
                          }
                        }
                      }
                      )
                    }} className="w-24 h-32 absolute left-12 top-10 z-50" >
                    <FaAngleUp  size={20} />
                </button >
                <button onClick={() => swiper.slideNext()} className="w-24 h-32 absolute left-12 z-50">
                    <FaAngleDown  size={20} />
                </button>
            </div >
                :
                <div className="text-[--txt] mt-3 ">
                    <button onClick={() => swiper.slidePrev()} className="w-24 h-32 ">
                        <FaAngleUp  size={20} />
                    </button>
                    <button onClick={() => swiper.slideNext()} className="w-24 h-32 ">
                        <FaAngleDown  size={20} />
                    </button>
                </div>
            }
        </>
    );
};