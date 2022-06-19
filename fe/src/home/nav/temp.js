import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./nav.css"
export function HomeNavBar() {

    let [active, setActive] = useState();
    let [hidden, setHidden] = useState(true);


    const handleHover = (e) => {
        e.stopPropagation();
        setHidden(false);
    }

    const handleExit = () => {
        setHidden(true)
    }

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



                                <div className="relative">
                                    <div id="toggleMenu1">
                                        <a
                                            className="cursor-pointer ml-2 text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                            aria-expanded="false"
                                        >
                                            <span onMouseOver={handleHover} onClick={handleExit}>Sahaja Yoga</span>
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
                                    {/* this is drop down */}
                                    <div id="toggleMenuCard1" className={hidden ? " hidden absolute z-20 -ml-4 mt-3" : "absolute z-20 -ml-4 mt-3 "}>
                                        <div
                                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                        >
                                            <div
                                                className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                            >
                                                <a
                                                    href="#"
                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
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
                                                    <div className="ml-4">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Self Realisation
                                                        </p>

                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
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
                                                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                        />
                                                    </svg>
                                                    <div className="ml-4">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Benefits Of Doing Sahaja Yoga
                                                        </p>

                                                    </div>
                                                </a>

                                                <a
                                                    href="#"
                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
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
                                                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                        />
                                                    </svg>
                                                    <div className="ml-4">
                                                        <p className="text-base font-medium text-gray-900">
                                                            Kundalini
                                                        </p>

                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                                            >



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
                                        <a
                                            href="#"
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
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Home
                                            </span>
                                        </a>

                                        <a
                                            href="#"
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
                                        </a>

                                        <a
                                            href="#"
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
                                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-600">
                                                Sahaja Yoga
                                            </span>
                                        </a>

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