import { useEffect, UseEffect, useState } from "react";
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services";
import  Rotate  from "react-reveal/Rotate";
export function HomeBio() {

    let [data, setData] = useState();

    useEffect(() => {
        getItems('bio/one')
            .then((response) => {
                setData(response.result[0]);
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })
    }, [])

    // console.log(data)
    return (

        <>
            {
                data ?
                    <section className="pt-2 lg:pt-[2px] pb-2 lg:pb-[5px]">
                        <div id="shrimataji" className="mx-8 ">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px] md:mb-20">
                                <span className="font-semibold text-2xl text-indigo-500 mb-2 block text-center">
                                    Shri Mataji Nirmala Devi
                                </span>
                                <h2
                                    className="font-bold text-5xl tracking-normal md:text-[58px] text-dark text-center mb-4 mt-8 inter-line-height2">
                                    Biography of {data?.name}.
                                </h2>
                                <p className="text-gray-500 mt-8 text-lg">
                                    {data?.short_summ}
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-between items-center -mx-1">
                                <div className="w-full lg:w-6/12 px-1">
                                    <div className="flex items-center -mx-3 sm:-mx-4">
                                        <div className="w-full xl:w-1/2 px-3 sm:px-4">
                                            <Rotate top left>
                                                <div className="py-3 sm:py-4">
                                                    <img
                                                        src={data && process.env.REACT_APP_BASE_IMAGE_URL + '/' + data?.desc_images[0]}
                                                        alt=""
                                                        className="rounded-2xl w-full"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="py-3 sm:py-4">
                                                    <img
                                                        src={data && process.env.REACT_APP_BASE_IMAGE_URL + '/' + data?.desc_images[1]}
                                                        alt=""
                                                        className="rounded-2xl w-full"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </Rotate>
                                        </div>
                                        <div className="w-full xl:w-1/2 px-3 sm:px-4">
                                            <div className="my-4 relative z-10">
                                                <img
                                                    src={data && process.env.REACT_APP_BASE_IMAGE_URL + '/' + data?.desc_images[2]}
                                                    alt=""
                                                    className="rounded-2xl w-full"
                                                    loading="lazy"
                                                />
                                                <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                    <svg
                                                        width="134"
                                                        height="106"
                                                        viewBox="0 0 134 106"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.66667"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3334"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3334 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="104"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 104)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="89.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 89.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="89.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 89.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="89.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 89.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="89.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 89.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="89.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 89.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="74.6673"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 74.6673)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="31.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 31.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="31.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 31.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="31.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 31.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="31.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 31.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="74.6668"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 74.6668)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="30.9998"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 30.9998)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="60.0003"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 60.0003)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="16.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 16.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="45.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 45.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66667"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 1.66667 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="45.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 45.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3333"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 16.3333 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="45.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 45.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="31"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 31 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="45.3333"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 45.3333)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.6667"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 45.6667 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.3333"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 60.3333 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="88.6667"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 88.6667 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="117.667"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 117.667 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6667"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 74.6667 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="103"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 103 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="45.3338"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 45.3338)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="132"
                                                            cy="1.66683"
                                                            r="1.66667"
                                                            transform="rotate(-90 132 1.66683)"
                                                            fill="#3056D3"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 xl:w-5/12 px-1">
                                    <div className="mt-10 lg:mt-0">
                                        <p className="text-gray-600 text-xl mb-8" dangerouslySetInnerHTML={{ __html: data?.brief_summ }}>

                                        </p>
                                        <a
                                            href={data?.wiki_link}
                                            className="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-indigo-600 hover:bg-white hover:text-indigo-600 border-2 border-transparent hover:border-slate-500 font-normal rounded-lg"
                                        >
                                            Learn More !
                                        </a>
                                    </div>
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