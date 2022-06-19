
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services";
export function HomeBlogList() {
    let navigate = useNavigate();
    let [data, setData] = useState();

    useEffect(() => {
        getItems('blog/fe')
            .then((response) => {
                setData(response.result);
            })
            .catch((err) => {
                error("Error Occured");
                console.log(err);
            })
    }, [])

    console.log(data)

    return (
        <>
            <div data-aos="fade-up" id="blogs" className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px] md:mb-20">

                <h2
                    className="font-bold text-3xl sm:text-4xl tracking-normal md:text-[58px] text-dark text-center mb-4 mt-8">
                 Recent Updates
                </h2>
                <p className="text-gray-500 mt-4 text-lg">
                    Experiences & Notes with Sahaja Yoga Meditation, Seeker Experiences and Guide to Sahaja Yoga Meditation
                </p>
            </div>

            {
                data && data.length > 0 ?
                    <section data-aos="fade-up" className="text-gray-600 body-font">
                        <div className="container px-5 py-15 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {
                                    data && data?.map((o, index) => (
                                        <div key={index} className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img loading="lazy" className="lg:h-48 md:h-36 w-full object-cover object-center" width="720px" height="400px" src={data && process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.[index]?.image} alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SAHAJA YOGA</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data?.[index]?.title}</h1>
                                                    <p className="leading-relaxed  mb-3  h-24 overflow-hidden">{data?.[index].summary}</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <Link to={`/blog/${data?.[index]?._id}`} type="button" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer underline">Learn More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </Link>
                                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>{data?.[index]?.views}
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                }

                            </div>
                        </div>


                    </section>
                    :

                    <h1 className="text-center text-3xl font-serif text-red-500">No Blog found</h1>


            }
        </>
    )
}