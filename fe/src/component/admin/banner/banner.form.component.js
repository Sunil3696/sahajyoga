import { useEffect, useState } from "react"

export function BannerForm(props) {

    let [data, setData] = useState([]);
    let [file, setFile] = useState();
    let [error, setError] = useState();
    let [isDisabled, setIsDisabled] = useState();
    let [url, setUrl] = useState();

    const handleChange = (event) => {
        let { type, name, value } = event.target;
        setData((preState) => {
            data = {
                ...preState,
                [name]: value
            }
            vailidateForm(name);
            return data;
        })
    }
    const vailidateForm = (fields) => {
        let message = "";
        switch (fields) {
            case 'title':
                message = data['title'] ? "" : "title field is required";
                break;
            case 'main_link':
                message = data['main_link'] ? "" : "Main Link is required";
                break;
            case 'sub_link':
                message = data['sub_link'] ? "" : "SubLink is required";
                break;
            case 'headings':
                message = data['headings'] ? "" : "Decription is required";
                break;
            case 'image':
                message = data['image'] ? "" : "Image is required";
                break;
            case 'status':
                message = data['status'] ? "" : "Status is required";
                break;
        }
        setError((prevState) => {
            error = {
                ...prevState,
                [fields]: message
            }
            let counter = 0;
            for (let key in error) {
                if (error[key]) {
                    counter++
                }
            }
            if (counter != 0) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
            return error;
        })
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        props.onSubmit(data, file)
    }

    useEffect(() => {
        setData(props.bannerData)
    }, [props])  //used props as dependancy to only set state while there is edit method called


    const handleFileChange = (event) => {
        let file_image = event.target.files[0];
        const urrr = URL.createObjectURL(event.target.files[0])
        setUrl(urrr);
        setData((pre) => {
            data = {
                ...pre,
                image: null
            }
            return data;
        })
        setFile(file_image)
    }
    // console.log("data state", data)
    // console.log("file state", file)


    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <hr></hr><br></br>
                <form onSubmit={submitForm}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input onChange={handleChange} defaultValue={data?.title} type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Banner Title" required />
                        <span className="text-red-700"> {error?.title}</span>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <textarea defaultValue={data?.headings} onChange={handleChange} name="headings" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Banner Description"></textarea>
                        <span className="text-red-700"> {error?.headings}</span>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="main_link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Link</label>
                        <input defaultValue={data?.main_link} onChange={handleChange} type="url" name="main_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Banner Main Link" required />
                        <span className="text-red-700"> {error?.main_link}</span>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="sub_link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sub Link</label>
                        <input defaultValue={data?.sub_link} onChange={handleChange} type="url" name="sub_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Banner Sub Link" required />
                        <span className="text-red-700"> {error?.sub_link}</span>
                    </div>

                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                        <input onChange={handleFileChange}
                            type="file" name="image" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            url ?
                                <img src={url} className="w-50 h-40 justify-center ml-96 -mt-11"></img>
                                : ""
                        }
                        <img id="old_image" className="w-50 h-40 justify-center ml-96 -mt-11" src={data && data.image ? process.env.REACT_APP_BASE_IMAGE_URL + '/' + data.image : ""}></img>
                        <span className="text-red-700"> {error?.image}</span>


                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                            <select value={data?.status} name="status" onChange={handleChange} className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <span className="text-red-700"> {error?.status}</span>
                        </div>


                    </div>
                    <div className="mb-6 ml-6">
                        {
                            isDisabled ?
                                <button type="submit" disabled={isDisabled} className="text-white bg-gray-300  focus:outline-none py-2 px-4 rounded">
                                    Submit
                                </button>
                                :
                                <button type="submit" disabled={isDisabled} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                        }
                    </div>


                </form>

            </div>

        </>
    )
} 