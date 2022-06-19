import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../../common/action.buton";
import { error, success } from "../../../helper/notify.helper";
import { delItem, getItems } from "../../../services/httpclient.services";

export function TestimonialList() {
    let navigate = useNavigate();
    let [data, setData] = useState();

    const loadData = () => {
        getItems('testimonials', false)
            .then((response) => {
                setData(response.result);
            })
            .catch((err) => {
                console.log(err);
                error('Error Occured')
            })
    }

    useEffect(() => {
        loadData();
    }, []);



    const deleteAction = (id) => {
        delItem(`testimonials/del/${id}`, true)
            .then((response) => {
                loadData();
                success(response.message);
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })
    }


    const editAction = (id) => {
        navigate(`/admin/testimonials/edit/${id}`);
    }

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
                                <th className="px-6bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Content
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Owner
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                data && data?.length > 0 ?
                                    data && data?.map((o, index) => (
                                        <tr key={index}>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {index + 1}
                                            </td>
                                            <td className=" max-w-md overflow-hidden  border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.title}
                                            </td>
                                            <td className=" max-w-md overflow-hidden  border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.content}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.owner}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.status}
                                            </td>

                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <ActionButton
                                                    onDelete={deleteAction}
                                                    onEdit={editAction}
                                                    dataId={o?._id}
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