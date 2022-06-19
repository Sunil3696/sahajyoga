import { useEffect, useState } from "react"
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services";
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
export function HomeBanner() {

    let [data, setData] = useState();
    let [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getItems('banner/one')

            .then((response) => {
                setData(response.result[0]);
                setisLoading(false);
            })

            .catch((err) => {
                error("Error Occured");
                console.log(err);
            })


    }, []);
    console.log(data);

    return (
        <>
            {isLoading ? <p className="text-center" >Loading ...</p> :

                data ?
                    <section   className="ml-2 md:ml-20 relative pt-[15px] lg:pt-[55px] pb-[10px] bg-white mr-2">
                        <div className="overflow-hidden">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="hero-content">
                                        <h1
                                            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                                        >
                                            <span className="xl:inline tracking-normal">
                                                {data?.title}</span>
                                            <span id="typed" className="text-indigo-600"></span>
                                        </h1>
                                        <Slide bottom cascade>
                                       <p className="text-justify mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                            {data?.headings}
                                        </p>
                                       </Slide>
                                        <div
                                            className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                                        >
                                         <Pulse>
                                         <div className="rounded-md shadow">
                                                <a
                                                    href={data?.main_link}
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-white md:py-4 md:text-lg md:px-10 hover:text-indigo-600 hover:border-indigo-300"
                                                >
                                                    Experience your Self Realisation
                                                </a>
                                            </div>
                                         </Pulse>
                                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                                <a
                                                    href={data?.sub_link}
                                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-indigo-100 md:py-4 md:text-lg md:px-10 hover:bg-red-600 hover:text-white hover:border-red-600"
                                                >
                                                    Live demo
                                                </a>
                                            </div>
                                        </div>
                                        <div className="clients pt-16">
                                            <h6
                                                className="font-normal text-xs flex items-center text-body-color mb-2"
                                            >
                                                Stay Connected With Us:
                                                <span
                                                    className="w-8 h-[1px] bg-body-color inline-block ml-2"
                                                ></span>
                                            </h6>
                                            <div className="flex items-center">
                                                <a
                                                    href="https://www.facebook.com/sahajanepal/" target="_blank"
                                                    className="md:w-2/12 py-3 w-full rounded-lg rounded-md rounded"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + "assets" + "/" + "Facebook.svg"}
                                                        alt="Connect With Facebook"
                                                    />
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCFRUhUx1FGXm71dRcHHL_LQ/featured" target="_blank" className="md:w-2/12 py-3 w-full">
                                                    <img
                                                        loading="lazy"
                                                        src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + "assets" + "/" + "Youtube.svg"}
                                                        alt="Connect with Youtube"
                                                    />
                                                </a>
                                                <a href="https://www.instagram.com/sahaja_yoga_unique_experience/?hl=en" target="_blank" className="md:w-2/12 py-3 w-full">
                                                    <img
                                                        loading="lazy"
                                                        src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + "assets" + "/" + "Instagram.svg"}
                                                        alt="Connect with Instagram"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-5/12">
                                    <div className="lg:text-right lg:ml-auto">
                                        <div className="relative inline-block z-10 pt-11 lg:pt-0">
                                           <Fade top big>
                                           <img
                                                src={data && process.env.REACT_APP_BASE_IMAGE_URL + '/' + data?.image[0]}
                                                alt="Shri_Mataji_Nirmala_Devi"
                                                className="max-w-full lg:ml-auto border rounded-3xl"
                                                loading="lazy"
                                            />
                                           </Fade>
                                            <span className="absolute -left-8 -bottom-8 z-[-1]">
                                                <svg
                                                    width="93"
                                                    height="93"
                                                    viewBox="0 0 93 93"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    :
                    <h1 className="text-center text-3xl font-serif text-red-500">No Banner Data Found</h1>
            }


        </>
    )
}