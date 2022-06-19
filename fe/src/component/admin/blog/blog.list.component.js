import { useEffect, useState } from "react"
import { delItem, getItems } from "../../../services/httpclient.services";
import { ActionButton } from "../../../common/action.buton";
import { error, success } from "../../../helper/notify.helper";
import { useNavigate } from "react-router-dom";
export function BlogList() {
    let navigate = useNavigate();
    let [data, setData] = useState([]);
    let [isloading, setisLoading] = useState(true);

    const loadData = () => {
        getItems('blog', false)
            .then((response) => {
                setData(response.result);
                setisLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        loadData();
    }, [])


    const deleteAction = (id) => {
        delItem(`blog/del/${id}`, true)
        .then((response)=> {
            success(response.message);
            // navigate('/admin/blogs');
            loadData();
        })
        .catch((err)=> {
            error('Error Occured while deleting Blogs');
            console.log(err);
        })
    }


    const editAction= (id) => {
      navigate(`/admin/blogs/edit/${id}`);
    }


    // console.log(data);

    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    SN
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    title
                                </th>
                                <th className="max-w-md px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Image
                                </th>

                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Video Link
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Published Date / Author Name
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{isloading && <img className="" src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + 'loader.gif'}></img>}</td>
                            </tr>

                            {
                               data.length > 0 ? 
                               data && data.map((o, index) => (
                                <tr key={index}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {index + 1}
                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o?.title}
                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <img src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + o?.image}></img>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o?.vid_url}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o?.createdAt}
                                    </td>
                                    <td  className={ o?.status == 'active' ? "text-green-800 border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4" : "text-red-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}>
                                        {o?.status}
                                    </td>

                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <ActionButton
                                            onDelete={deleteAction}
                                            dataId={o?._id}
                                            onEdit={editAction}

                                        ></ActionButton>
                                    </td>

                                </tr>

                            ))

                            : <tr>
                                <td>
                                    <p className="text-center text-red-700"> No data</p>
                                </td>
                            </tr>
                            }


                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}