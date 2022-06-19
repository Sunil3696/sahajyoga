

import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { error } from "../../../helper/notify.helper";
import { getItems } from "../../../services/httpclient.services";

export function SystemForm(props) {
    const editorRef = useRef();

    let [data, setData] = useState([]);
    let [systemlist, setSystemList] = useState();


    let [thumbUrl, setThumburl] = useState();
    let [bannerUrl, setbannerUrl] = useState();
    let [images, setImages] = useState();


    let [thumb, setThumb] = useState();
    let [banner, setbanner] = useState();
    let [dimages, setdimages] = useState();


    let [file, setFile] = useState();



    useEffect(() => {
        getItems('category/', false)
            .then((response) => {
                setSystemList(response.result);
            })
            .catch((err) => {
                error("there was problm while communicating with server");
            })
    }, []);


    useEffect(() => {
        setData(props.systemData);
    }, [props])



    const handleChange = (event) => {
        let { type, name, files, value } = event.target;
        setData((preState) => {
            data = {
                ...preState,
                [name]: value,
            }

            return data;
        })

    }

    const handleDescriptionChange = () => {
        setData((preState) => {
            data = {
                ...preState,
                "top_desc": editorRef.current.getContent()
            }
            return data
        })
    }

    const handleThumbFileChange = (event) => {

        setData((preState) => {
            data = {
                ...preState,
                'thumb_image': null
            }
            return data;
        })

        let file_image = event.target.files[0];
        const thumb_image = URL.createObjectURL(event.target.files[0])
        setThumburl(thumb_image);
        setThumb(file_image);
    }

    const handleBannerFileChange = (event) => {
        setData((preState) => {
            data = {
                ...preState,
                'banner_image': null
            }
            return data;
        })
        let file_image = event.target.files[0];
        const banner_image = URL.createObjectURL(event.target.files[0])
        setbannerUrl(banner_image);
        setbanner(file_image)
    }
    const handleImagesChange = (event) => {
        setData((preState) => {
            data = {
                ...preState,
                'images': null
            }
            return data;
        })

        const imagesArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file))
        setImages(imagesArray);
        setdimages(event.target.files);
    }


    const submitForm = (event) => {
        event.preventDefault();
        props.onSubmit(data, thumb, banner, dimages);

    }






    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <hr></hr><br></br>
                <form onSubmit={submitForm}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input defaultValue={data?.name} onChange={handleChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter System Name" required />
                        {/* <span className="text-red-700"> {error?.title}</span> */}
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thumbnail Image</label>
                        <input onChange={handleThumbFileChange}
                            type="file" name="thumb_image" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            thumbUrl ?
                                <img src={thumbUrl} className="w-50 h-40 justify-center ml-96 -mt-11"></img>
                                : ""
                        }
                        <img className="w-50 h-40 justify-center ml-96 -mt-11" src={data && data.thumb_image ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.thumb_image : ""}></img>
                    </div>

                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banner Image</label>
                        <input onChange={handleBannerFileChange}
                            type="file" name="banner_image" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            bannerUrl ?
                                <img src={bannerUrl} className="w-50 h-40 justify-center ml-96 -mt-11"></img>
                                : ""
                        }
                        <img className="w-50 h-40 justify-center ml-96 -mt-11" src={data && data.banner_image ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.banner_image : ""}></img>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="top_desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Top Description</label>

                        <div id="top_desc">
                            <Editor onChange={handleDescriptionChange}
                                apiKey="tuwl7f1nrrlk43exxx023ctbstg51teya3slwt5145nxbpwj"
                                initialValue={data?.top_desc}
                                onInit={(evt, editor) => editorRef.current = editor}
                                init={{
                                    height: 300,
                                    menubar: true,
                                }}
                            />
                        </div>
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Images</label>
                        <input onChange={handleImagesChange}
                            type="file" multiple name="images" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            images && images.map((img, index) => (

                                <img src={img} key={index} className="w-25 h-20 inline-block mr-1 justify-center"></img>

                            ))

                        }

                        {
                            data && data?.images ?

                                data?.images.map((o, index) => (
                                    <img className="w-25 h-20 inline-block mr-1 justify-center" src={data && data.images ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.images?.[index] : ""}></img>

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
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Summary</label>
                        <textarea defaultValue={data?.buttom_desc} onChange={handleChange} name="buttom_desc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summary of Description"></textarea>
                        {/* <span className="text-red-700"> {error?.headings}</span> */}
                    </div>


                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parent System</label>
                        <select value={data?.under_head} name="under_head" onChange={handleChange} className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option value="">Select Parent System</option>
                            {
                                systemlist && systemlist.map((o, index) => (
                                    <option key={index} value={o._id}>{o.name}</option>
                                ))
                            }
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