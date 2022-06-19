import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getItems } from "../../services/httpclient.services";
import "./nav.css"
export function HomeNavBar() {

    let [active, setActive] = useState();
    let [hidden, setHidden] = useState(true);
    let [chakra, setChraka] = useState();


    const handleHover = (e) => {
        e.stopPropagation();
        setHidden(false);
    }

    const handleExit = () => {
        setHidden(true)
    }

    useEffect(() => {
        getItems('systems/fe')
            .then((response) => {
                let options = response.result?.filter((obj) => obj?.under_head == "62ad9c992c0d9d99d350db51")
                setChraka(options)
            })
    }, [])





    return (
        <>
            <section>
                <div className="relative bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div
                            className="flex justify-between items-center py-6 md:justify-start md:space-x-10"
                        >
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link to={'/'}>
                                    <span className="sr-only">Sahayoga Nepal</span>
                                    <img
                                        className="h-auto w-auto sm:h-10"
                                        src="http://sahajayoganepal.org/images/sahajyoga1.jpg"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <button onClick={handleHover}
                                    id="openMenu"
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="hidden md:flex space-x-10">
                                <Link
                                    to={'/mataji'}
                                    type="button"
                                    className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-600 focus:outline-none focus:ring-offset-2"
                                    aria-expanded="false"
                                >
                                    <span>Shri Mataji</span>
                                </Link>



                                <div className="group">
                                    <div id="toggleMenu1">
                                        <a className="cursor-pointer ml-2 text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                            aria-expanded="false">
                                            <span>Chakras</span>
                                            <svg
                                                className="text-gray-400 ml-2 h-5 w-5 group-hover:text-indigo-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>


                                    <div className="absolute z-20 -ml-4  invisible group-hover:visible">
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                                                {
                                                    chakra ?
                                                        chakra.map((o, index) => (
                                                            <div key={index} className="ml-4">
                                                                <Link to={`/system/${o?._id}`} >
                                                                    <p className="text-base font-medium font-sans text-gray-900">
                                                                        {o.name}
                                                                    </p>
                                                                </Link>
                                                            </div>
                                                        ))
                                                        :
                                                        ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>








































































































                                <Link
                                    to={'/blogs'}
                                    className="text-base font-medium text-gray-500 hover:text-indigo-600"
                                >
                                    Blogs
                                </Link>
                                <a target="_blank"
                                    href='https://www.youtube.com/channel/UCtklNRYj1YXhWIL5LvGVNcg'
                                    className="text-base font-medium text-gray-500 hover:text-indigo-600" >
                                    Videos
                                </a>

                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <div className="pt-2 relative mx-auto text-gray-600">
                                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mobileMenuCard"
                        className={hidden ? "hidden z-999 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" : " z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"}
                    >
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
                        >
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="font-sans">Sahaja Yoga Nepal</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button onClick={handleExit}
                                            id="closeMenu"
                                            type="button"
                                            className=" bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        <Link 
                                            to={'/'}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                             <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M13.3503 14.6503H10.2162C9.51976 14.6503 8.93937 14.0697 8.93937 13.3729V10.8182C8.93937 10.5627 8.73043 10.3537 8.47505 10.3537H6.54816C6.29279 10.3537 6.08385 10.5627 6.08385 10.8182V13.3497C6.08385 14.0464 5.50346 14.627 4.80699 14.627H1.62646C0.929989 14.627 0.349599 14.0464 0.349599 13.3497V5.24431C0.349599 4.89594 0.535324 4.5708 0.837127 4.385L6.96604 0.506501C7.29106 0.297479 7.73216 0.297479 8.05717 0.506501L14.1861 4.385C14.4879 4.5708 14.6504 4.89594 14.6504 5.24431V13.3265C14.6504 14.0697 14.07 14.6503 13.3503 14.6503ZM6.52495 9.54086H8.45184C9.14831 9.54086 9.7287 10.1215 9.7287 10.8182V13.3497C9.7287 13.6052 9.93764 13.8142 10.193 13.8142H13.3503C13.6057 13.8142 13.8146 13.6052 13.8146 13.3497V5.26754C13.8146 5.19786 13.7682 5.12819 13.7218 5.08174L7.61608 1.20324C7.54643 1.15679 7.45357 1.15679 7.40714 1.20324L1.27822 5.08174C1.20858 5.12819 1.18536 5.19786 1.18536 5.26754V13.3729C1.18536 13.6284 1.3943 13.8374 1.64967 13.8374H4.80699C5.06236 13.8374 5.2713 13.6284 5.2713 13.3729V10.8182C5.24809 10.1215 5.82848 9.54086 6.52495 9.54086Z"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Home
                                            </span>
                                        </Link>

                                        <Link
                                            to={'/mataji'}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Shri Mataji
                                            </span>
                                        </Link>

                                      
                                        <Link
                                            to={'/blogs'}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <svg
                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Blogs
                                            </span>
                                        </Link>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}