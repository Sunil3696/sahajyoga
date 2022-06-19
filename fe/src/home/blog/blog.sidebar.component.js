import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { error } from "../../helper/notify.helper";
import { getItems } from "../../services/httpclient.services"

export function HomeViewBlogSidebar() {
    let [summ, setSumm] = useState();
    let [popularBlog, setPopularBlog] = useState();

    useEffect(() => {
        getItems('bio/one', false)
            .then((response) => {
                setSumm(response.result[0]?.short_summ);
            })
            .catch((err) => {
                error("Error Occured");
                console.log(err);
            })


        getItems('blog/popularblog')
            .then((response) => {
                setPopularBlog(response.result);
            })
            .catch((err) => {
                console.log(err);
                error("error Occured")
            })
            



    }, [])
    // console.log(popularBlog)

    return (
        <>
        <div className="md:w-1/4 w-full">
            <div className="bg-gray-100 rounded-lg">
                <h1 className="text-center  m-3 p-3 text-indigo-700 font-bold bg-green-400 rounded-lg">About</h1>
            </div>
            <div>
                <p className="mt-5 px-2 text-black font-bold">
                    {summ}
                </p>
            </div>
            <div className="w-full bg-gray-100 rounded-lg">
                <h1 className="mt-20 mb-2 text-center font-bold text-indigo-600 bg-green-400 rounded-lg mx-2 p-3">Popular Posts</h1>
                {
                    popularBlog && popularBlog.map((o, index) => (

                        <div key={index} className="my-2 mx-2 mb-4">
                            <Link to={`/blog/${o?._id}`}>
                                <div className="flex text-black font-bold hover:text-indigo-700">
                                    <div className="w-1/5">
                                        <img src={popularBlog && process.env.REACT_APP_BASE_IMAGE_URL + "/" + o?.image} height="10px" width="50px" alt="similiar blog 1 img" />
                                    </div>
                                    <div className="w-4/5">
                                        <h1>{o?.title}</h1>
                                        <p>{o?.published_date}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
            <div className="mt-20 bg-gray-100 rounded-lg" >
                <h1 className="  text-indigo-700 font-bold bg-green-400 text-center rounded-lg mx-2 p-3">Some usefuls Links</h1>
                <div className="mx-2">
                    <div><a href="https://www.amruta.org/all-shri-mataji-talks-in-chronological-order/" target="_blank"><h3 className="text-black font-bold">1. All talks of Shree Mataji Nirmala Devi.</h3></a></div>
                    <div><a href="https://www.amruta.org/puja-categories/" target="_blank"><h3 className="text-black font-bold">2. All about Sahajayoga Pujas.</h3></a></div>
                    <div><a href="https://www.amruta.org/recorded-event/public-program/" target="_blank"><h3 className="text-black font-bold">3. All public programs in different places.</h3></a></div>
                    <div><a href="https://www.amruta.org/recorded-event/interview/" target="_blank"><h3 className="text-black font-bold">4. Most of the TV interview of Shree Mataji Nirmala Devi.</h3></a></div>
                    <div><a href="https://www.amruta.org/recorded-event/letter-and-poem/" target="_blank"><h3 className="text-black font-bold">5. All Poems and Letters.</h3></a></div>
                    <div><a href="https://www.amruta.org/video-excerpts/" target="_blank"><h3 className="text-black font-bold">6. Video excerpts.</h3></a></div>
                    <div><a href="https://www.amruta.org/sahaja-yoga-download-material/" target="_blank"><h3 className="text-black font-bold">7. Important Sahaj Materials.</h3></a></div>
                    <div><a href=" https://www.amruta.org/books/" target="_blank"><h3 className="text-black font-bold">8. Sahaja Yoga Books And Magazines.</h3></a></div>
                    <div><a href="https://www.amruta.org/amruta-how-to-use/" target="_blank"><h3 className="text-black font-bold">9. Help and FAQs.</h3></a></div>
                </div>
            </div>
            <div className="mt-20 bg-gray-100 rounded-lg">


                <div className="w-full px-4 my-10">
                    <div className="mb-12">
                        <label htmlFor="" className="font-medium text-base text-black block mb-3">
                            Comments:
                        </label>
                        <textarea rows="5" placeholder="Please write Comments." className="
                      w-full
                      border-[1.5px] border-primary
                      rounded-lg
                      py-3
                      px-5
                      font-medium
                      text-body-color
                      placeholder-body-color
                      outline-none
                      focus:border-primary
                      active:border-primary
                      transition
                      disabled:bg-[#F5F7FD] disabled:cursor-default
                      ">
                        </textarea>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="mb-12">
                        <label htmlFor="" className="font-medium text-base text-black block mb-3">
                            Email
                        </label>
                        <input required type="text" placeholder="Email is Required" className="
                    w-full
                    border-[1.5px] border-primary
                    rounded-lg
                    py-3
                    px-5
                    font-medium
                    text-body-color
                    placeholder-body-color
                    outline-none
                    focus:border-primary
                    active:border-primary
                    transition
                    disabled:bg-[#F5F7FD] disabled:cursor-default
                    "/>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="mb-12">
                        <label htmlFor="" className="font-medium text-base text-black block mb-3">
                            Name
                        </label>
                        <input required type="text" placeholder="Name is Required" className="
                    w-full
                    border-[1.5px] border-primary
                    rounded-lg
                    py-3
                    px-5
                    font-medium
                    text-body-color
                    placeholder-body-color
                    outline-none
                    focus:border-primary
                    active:border-primary
                    transition
                    disabled:bg-[#F5F7FD] disabled:cursor-default
                    "/>
                    </div>
                </div>
                <div className="w-full">
                    <a href="#"
                        className="py-3 px-4 w-full block bg-blue-700 text-center text-white rounded-lg font-medium hover:bg-red-600 transition ease-in-out delay-75">Post Comments</a>
                </div>

            </div>
        </div>
    </>
    )
}