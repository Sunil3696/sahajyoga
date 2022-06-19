import { useEffect, useState } from "react";
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services";
import "./style.css";
let count = 0;
export function HomeTestimonials() {

    let [data, setData] = useState();
    let [isLoading, setisLoading] = useState(true);
    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getItems('testimonials', false)
            .then((response) => {
                let actives = response.result.filter((obj) => obj.status == 'active');
                setData(actives);
                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                error("Error Occuffgfgfgred")
            })
    }, [])

    const handlePrevClick = () => {
        const dataLength = data.length;
        count = (currentIndex + dataLength - 1) % dataLength;
        setCurrentIndex(count);
    }

    const handleNextClick = () => {
        count = (count + 1) % data.length;
        setCurrentIndex(count);


    }
    // console.log(data?.[0])
    return (
        <>


            {isLoading ? <p> Loading .....</p> :

                data.length > 0 ?
                    <section>
                        <div className="flex items-center justify-between h-full w-full absolute z-0">
                            <div className="w-1/3 bg-white dark:bg-gray-900 h-full"></div>
                            <div className="w-4/6 ml-16 bg-gray-100 dark:bg-gray-800 h-full"></div>
                        </div>
                        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 dark:text-white ">
                                What our customers are<br />
                                saying
                            </h1>
                            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800 dark:text-white ">What our customers are saying</h1>
                            <div className="slider">
                                <div className="slide-ana">
                                    <div className="flex sliderone">
                                        <div className="mt-14 md:flex ">
                                            <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                                <img src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.[currentIndex]?.image[0]} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                                <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                                </div>
                                            </div>
                                            <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                                <div>
                                                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800 dark:text-white ">{data?.[currentIndex]?.title}</h1>
                                                    <p className="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-200  ">{data?.[currentIndex]?.content}</p>
                                                </div>
                                                <div className="md:mt-0 mt-2">
                                                    <p className="text-base font-medium leading-4 text-gray-800 dark:text-white ">{data?.[currentIndex]?.owner}</p>
                                                    <p className=" text-sm leading-4 mt-2 mb-2 text-gray-600 dark:text-gray-200  ">{data?.[currentIndex]?.post}</p>
                                                    <p className=" text-sm leading-4 mt-2 mb-2 text-gray-600 dark:text-gray-200  "><i>{data?.[currentIndex]?.address}</i></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center mt-8">
                                <button onClick={handlePrevClick} className="cursor-pointer" id="prev" role="button" aria-label="previous slide">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                                </button>
                                <button onClick={handleNextClick} id="next" role="button" aria-label="next slide" className="cursor-pointer ml-2">
                                    <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                                    <img className="transform rotate-180 w-8 hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                                </button>
                            </div>

                        </div>

                    </section>



                    :
                    <h1 className="text-center text-3xl font-serif text-red-500">No Testimonials Found</h1>


            }











        </>
    )
}