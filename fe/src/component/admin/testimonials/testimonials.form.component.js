import { useEffect, useState } from "react"

export function TestimonialsForm(props) {

    let [data, setData] = useState();
    let [file, setFile] = useState();
    let [imgURL, setImgURL] = useState();

    const handleChange = (event) => {
        let { value, name, type } = event.target;
        setData((preState) => {
            data = {
                ...preState,
                [name]: value
            }
            return data;
        })
    }

    useEffect(() => {
        setData(props.testimonialData);
    }, [props])


    const handleFileChange = (event) => {
        setData((pre)=> {
            data = {
                ...pre,
                image : null
            }
            return data;
        }) 

        const files = event.target.files[0];
        let imageURL = URL.createObjectURL(files);
        setImgURL(imageURL);
        setFile(files);
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.onSubmit(data, file);
    }


    // console.log(data);
    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <hr></hr><br></br>

                <form onSubmit={submitForm}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input defaultValue={data?.title} type="text" onChange={handleChange} name="title" required placeholder="Please enter title" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* <span className="text-red-700"> {error?.name}</span> */}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Summary</label>
                        <textarea defaultValue={data?.content} onChange={handleChange} name="content" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content goes here"></textarea>
                        {/* <span className="text-red-700"> {error?.headings}</span> */}
                    </div>

                    <div className="mb-6 ">
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                        <input onChange={handleFileChange} type="file" name="main_images" id="formFile" accept="image/*" className="form-control block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                        {
                            imgURL ?
                                <img src={imgURL} className="w-50 h-40 justify-center ml-96 -mt-11"></  img>
                                : ""
                        }

                        <img className="w-50 h-40 justify-center ml-96 -mt-11" src={data && data.image ? process.env.REACT_APP_BASE_IMAGE_URL + "/" + data?.image : ""}></img>

                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input defaultValue={data?.owner} onChange={handleChange} type="text" name="owner" required placeholder="Please enter owner Name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* <span className="text-red-700"> {error?.name}</span> */}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                        <input defaultValue={data?.address} onChange={handleChange} type="text" name="address" required placeholder="Please enter Address" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* <span className="text-red-700"> {error?.name}</span> */}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Post</label>
                        <input defaultValue={data?.post} onChange={handleChange} type="text" name="post" placeholder="Please enter Post if any" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* <span className="text-red-700"> {error?.name}</span> */}
                    </div>


                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                        <select value={data?.status} onChange={handleChange} name="status" className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
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