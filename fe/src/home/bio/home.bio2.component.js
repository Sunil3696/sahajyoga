import { useEffect, useState } from "react";
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services";
import Slide from 'react-reveal/Slide';
export function Home2Bio() {

    let [data, setData] = useState();

    useEffect(() => {
        getItems('bio/one')
            .then((response) => {
                setData(response.result[0])
            })
            .catch((err) => {
                error("Error Occured")
                console.log(err);
            })
    }, [])
    // console.log("2", data)
    return (
        <>
            {
                data ?
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex w-full mb-20 flex-wrap">
                                <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Shri Mataji Nirmala Devi Photographs</h1>
                                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">A star is shining within us and that is our spirit!
                                    {data?.quotes} - H.H. Shri Mataji Nirmala Devi</p>
                            </div>
                            <div className="flex flex-wrap md:-m-2 -m-1">
                                <div className="flex flex-wrap w-1/2">
                                   <Slide left>
                                   <div className="md:p-2 p-1 w-1/2">
                                        <img loading="lazy" alt="gallery" className="w-full object-cover h-full object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[0]} />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img loading="lazy" alt="gallery" className="w-full object-cover h-full object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[1]} />
                                    </div>
                                   </Slide>
                                   <Slide bottom>
                                   <div className="md:p-2 p-1 w-full">
                                        <img loading="lazy" alt="gallery" className="w-full h-full object-cover object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[2]} />
                                    </div>
                                   </Slide>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                   <Slide right>
                                   <div className="md:p-2 p-1 w-full">
                                        <img loading="lazy" alt="gallery" className="w-full h-full object-cover object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[3]} />
                                    </div>
                                   </Slide>
                                   <Slide bottom>
                                   <div className="md:p-2 p-1 w-1/2">
                                        <img loading="lazy" alt="gallery" className="w-full object-cover h-full object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[4]} />
                                    </div>
                                   </Slide>
                                  <Slide right>
                                  <div className="md:p-2 p-1 w-1/2">
                                        <img loading="lazy" alt="gallery" className="w-full object-cover h-full object-center block" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images[5]} />
                                    </div>
                                  </Slide>
                                </div>
                            </div>
                        </div>
                    </section>
                    :

                    <h1 className="text-center text-3xl font-serif text-red-500">No Bio Data Found</h1>


            }
        </>
    )
}