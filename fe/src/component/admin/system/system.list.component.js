import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../../common/action.buton";
import { success } from "../../../helper/notify.helper";
import { delItem, getItems } from "../../../services/httpclient.services";
export function SystemList() {
    let navigate = useNavigate();

    let [data, setData] = useState([]);
    let [isloading, setisLoading] = useState(true);

    const loadData = () => {
        getItems('systems/', false)
            .then((response) => {
                setData(response.result);
                // console.log(response.result)
                setisLoading(false)
            })
            .catch((err) => {
                console.log("can not fetched systems")
            })
    }

    useEffect(() => {
        loadData();
    }, []);


    const deleteAction = (id) => {
        delItem(`systems/del/${id}`, true)
            .then((response) => {
                success(response.message);
                console.log(response)
                loadData();
            })
            .catch((err) => {
                console.log("error Occured", err)
            })
    }

    const editAction = (id) => {
        navigate(`/admin/system/edit/${id}`);
    }
    console.log(typeof(data))
    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">

                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}

                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    SN
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Name
                                </th>
                                <th className="max-w-md px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    thumb_image
                                </th>
                                {/* <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    description
                                </th> */}
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Video Link
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Under Category
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{isloading && <img className="w-auto h-screen" src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + 'loader.gif'}></img>}</td>
                            </tr>
                            {
                                data && data?.length > 0 ?
                                    data && data.map((o, index) => (
                                        <tr key={index}>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {index + 1}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.name}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <img className="w-20" src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + o?.thumb_image} />
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.vid_url}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.under_head.name}
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
                                    :

                                    <tr>
                                        <td className="items-center text-red-700">No data</td>
                                    </tr>
                            }


                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}