

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { error } from "../../../helper/notify.helper";
import { getItems } from "../../../services/httpclient.services";

export function BlogForm(props) {
    const editorRef = useRef();

    let [data, setData] = useState([]);

    let [imageUrl, setimageUrl] = useState();
    let [image, setImage] = useState();

    let [carouselimg, setCarouselImg] = useState();
    let [carouselImgUrl, setCarouselImgUrl] = useState();



    useEffect(() => {
        setData(props.blogData);
    }, [props])



    const handleChange = (event) => {
        let { type, name, files, value } = event.target;

        // console.log(value)
        setData((preState) => {
            data = {
                ...preState,
                [name]: value,
            }

            return data;
        })

    }

    const handleBlogContentChange = () => {
        // console.log("h", editorRef.current.getContent())
        setData((preState) => {
            data = {
                ...preState,
                "content": editorRef.current.getContent()
            }
            return data
        })
    }

    const handleImageChange = (event) => {
        setData((preState) => {
            data = {
                ...preState,
                'image': null
            }
            return data
        })

        let file_image = event.target.files[0];
        const main_image = URL.createObjectURL(event.target.files[0])
        setimageUrl(main_image);
        setImage(file_image);
    }



    const handleCarouselChange = (event) => {
        // console.log(event.target.files)
        setData((preState)=> {
            data = {
                ...preState,
                'carousel' : null
            }
            return data;
        })


        if (event.target.files) {
            let fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
            setCarouselImgUrl(fileArray);
        }

        setCarouselImg(event.target.files);
    }




    const submitForm = (event) => {
        event.preventDefault();
        // console.log(dimages);
        props.onSubmit(data, image, carouselimg);

    }


    // console.log(data);




    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <hr></hr><br></br>
                <form onSubmit={submitForm}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input defaultValue={data?.title} onChange={handleChange} type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Blog Title" required />
                        {/* <span className="text-red-700"> {error?.title}</span> */}
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                        <input onChange={handleImageChange}
                            type="file" name="image" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            imageUrl ?
                                <img src={imageUrl} className="w-50 h-40 justify-center ml-96 -mt-11"></img>
                                : ""
                        }
                        <img className="w-50 h-40 justify-center ml-96 -mt-11" src={data && data.image ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.image : ""}></img>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Summary</label>
                        <textarea defaultValue={data?.summary} onChange={handleChange} name="summary" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summary goes here"></textarea>
                        {/* <span className="text-red-700"> {error?.headings}</span> */}
                    </div>



                    <div className="mb-6">
                        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog Content</label>

                        <div id="content">
                            <Editor onChange={handleBlogContentChange}
                                apiKey="tuwl7f1nrrlk43exxx023ctbstg51teya3slwt5145nxbpwj"
                                initialValue={data?.content}
                                onInit={(evt, editor) => editorRef.current = editor}
                                init={{
                                    height: 300,
                                    menubar: true,
                                }}
                            />
                        </div>
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Images for carousel</label>
                        <input onChange={handleCarouselChange}
                            type="file" name="carousel" multiple id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            carouselImgUrl && carouselImgUrl.map((imges, index) => (
                                <img src={imges} key={index} className="w-25 h-20 inline-block mr-1 justify-center"></img>
                            ))
                        }


                        {
                            data?.carousel ?
                                data?.carousel.map((o, index) => (
                                    <img key={index} className="w-25 h-20 inline-block mr-1 justify-center" src={data && data.carousel ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.carousel?.[index] : ""}></img>

                                ))

                                :
                                ""
                        }


                    </div>





                    <div className="mb-6">
                        <label htmlFor="vid_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Video Link</label>
                        <input defaultValue={data?.vid_url} onChange={handleChange} type="url" name="vid_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Video Link" required />
                        {/* <span className="text-red-700"> {error?.sub_link}</span> */}
                    </div>


                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Publish</label>
                        <input defaultValue={data?.published_date} onChange={handleChange} type="date" name="published_date" className="form-control text-blue-700"></input>
                    </div>


                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parent System</label>
                        <select value={data?.status} name="status" onChange={handleChange} className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="unpublished">Unpublished</option>
                            <option value="archived">Archived</option>

                        </select>
                        {/* <span className="text-red-700"> {error?.status}</span> */}
                    </div>




















                    <div className="mb-6 ml-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}