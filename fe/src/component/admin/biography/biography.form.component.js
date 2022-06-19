
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
export function BiographyForm(props) {
    const editorRef = useRef();

    let [data, setData] = useState([]);
    let [mainImgUrl, setMainImgUrl] = useState();
    let [descImgUrl, setDescImgUrl] = useState();
    let [error, setError] = useState();


    let [mainImages, setMainImages] = useState();
    let [descImages, setDescImages] = useState();

    const handleChange = (event) => {
        let { type, value, name } = event.target;
        setData((prevState) => {
            data = {
                ...prevState,
                [name]: value
            }
            return data;
        })
    }
    const handleContentChange = () => {
        setData((prevState) => {
            data = {
                ...prevState,
                "brief_summ": editorRef.current.getContent()
            }
            return data;
        })

    }

    const handleMainImagesChange = (event) => {
      if (event.target.files) {
            let fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
            setMainImgUrl(fileArray);

        }
        validateImg(event.target.files);
        setMainImages(event.target.files);

    }

    const validateImg = (fl) => {
        let message = "";
        if (Object.keys(fl).length < 3) {
            setError((prestate) => {
                error = {
                    'main_images': "You have to upload three images Please reselect images"
                }
                return error;
            })
        }
        else if (Object.keys(fl).length > 3) {
            setError((prestate) => {
                error = {
                    'main_images': "You can only upload three images Please reselect images"
                }
                return error;
            })
        }
        else {
            setError((prestate) => {
                error = {
                    'main_images': ""
                }
                return error;
            })
        }
    }

    const handleSDescImagesChange = (event) => {
        setData((pre)=> {
            data = {
                ...pre,
                desc_images : null
            }
            return data;
        }) 
       if (event.target.files) {
            let fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL((file)));
            setDescImgUrl(fileArray);
        }

        setDescImages(event.target.files);
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.onSubmit(data, mainImages, descImages);
    }

    useEffect(() => {
        setData(props.bioData);
    }, [props])



    // console.log(data);
    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <hr></hr><br></br>
                <form onSubmit={submitForm}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input defaultValue={data?.name} onChange={handleChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Biography Head" required />
                        {/* <span className="text-red-700"> {error?.title}</span> */}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Summary</label>
                        <textarea defaultValue={data?.short_summ} onChange={handleChange} name="short_summ" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="short summary goes here"></textarea>
                        {/* <span className="text-red-700"> {error?.headings}</span> */}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="brief_summ" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">BioGraphy Content</label>

                        <div id="brief_summ">
                            <Editor
                                apiKey="tuwl7f1nrrlk43exxx023ctbstg51teya3slwt5145nxbpwj"
                                onChange={handleContentChange}
                                initialValue={data?.brief_summ}
                                onInit={(evt, editor) => editorRef.current = editor}
                                init={{
                                    height: 300,
                                    menubar: true,
                                }}
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="wiki_link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wiki Link</label>
                        <input defaultValue={data?.wiki_link} onChange={handleChange} type="url" name="wiki_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Wiki Link Here" required />
                        {/* <span className="text-red-700"> {error?.title}</span> */}
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Images <span className="text-blue-700">upload exactly 3 images only</span></label>
                        <input onChange={handleMainImagesChange} type="file" multiple name="main_images" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {

                            error?.main_images ? <span className="text-red-700"> {error?.main_images}</span> :

                                mainImgUrl && mainImgUrl.map((imges, index) => (
                                    <img src={imges} key={index} className="w-25 h-20 inline-block mr-1 justify-center"></img>
                                ))
                        }

                        {
                            data?.main_images ?
                                data?.main_images.map((o, index) => (
                                    <img key={index} className="w-25 h-20 inline-block mr-1 justify-center" src={data && data.main_images ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.main_images?.[index] : ""}></img>

                                ))
                                :
                                ""
                        }
                    </div>


                    <div className="mb-6">
                        <label htmlFor="quotes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quotes</label>
                        <input defaultValue={data?.quotes} onChange={handleChange} type="text" name="quotes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Quotes" required />
                        {/* <span className="text-red-700"> {error?.title}</span> */}
                    </div>


                    <div className="mb-6 ">
                        <label htmlFor="desc_images" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extra Images <span className="text-blue-700">Min 6 pictures</span></label>
                        <input onChange={handleSDescImagesChange} type="file" multiple name="desc_images" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            descImgUrl && descImgUrl.map((imges, index) => (
                                <img src={imges} key={index} className="w-25 h-20 inline-block mr-1 justify-center"></img>
                            ))
                        }

                        {
                            data?.desc_images ?
                                data?.desc_images.map((o, index) => (
                                    <img key={index} className="w-25 h-20 inline-block mr-1 justify-center" src={data && data.desc_images ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.desc_images?.[index] : ""}></img>

                                ))
                                :
                                ""
                        }

                    </div>



                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                        <select value={data?.status} onChange={handleChange} name="status" className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">inactive</option>

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