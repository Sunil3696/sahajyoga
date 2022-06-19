import { Suspense, useEffect, useState } from "react"

export function CategoryForm(props) {

  let [data, setData] = useState([]);
  let [error, setError] = useState();

  const handleChange = (event) => {
    let { type, name, value } = event.target;
    setData((prevState) => {
      data = {
        ...prevState,
        [name]: value
      }
      validateForm(name);
      return data;
    })
  }



  const validateForm = (fields) => {
    let message = "";
    switch (fields) {
      case "name":
        message = data.name ? "" : "Name is required";
        break;
      case "description":
        message = data.description ? "" : "Description is required";
        break;
      case "status":
        message = data.status ? "" : "Status is required"
        break;
    }
    setError((pre) => {
      error = {
        ...pre,
        [fields]: message
      }
      return error
    })

  }

  const submitForm = (event) => {
    event.preventDefault();
    props.onSubmit(data);

  }

  useEffect(() => {
    setData(props.bannerData)
  }, [props])

console.log(data);
  return (
    <>
      <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <hr></hr><br></br>

        <form onSubmit={submitForm}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input defaultValue={data?.name} onChange={handleChange} type="text" name="name" required placeholder="Please enter title" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <span className="text-red-700"> {error?.name}</span>
          </div>
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
            <input defaultValue={data?.description}  type="text" onChange={handleChange} name="description" required placeholder="Please enter Description" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <span className="text-red-700"> {error?.description}</span>
          </div>

          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
            <select value={data?.status} name="status" onChange={handleChange} className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normaltext-gray-700bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
              <option value="">Slect Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <span className="text-red-700"> {error?.status}</span>
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