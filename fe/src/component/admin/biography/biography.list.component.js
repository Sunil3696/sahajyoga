import { useEffect, useState } from "react"
import { delItem, getItems } from "../../../services/httpclient.services";
import { ActionButton } from "../../../common/action.buton";
import { error, success } from "../../../helper/notify.helper";
import { useNavigate } from "react-router-dom";
export function BiographyList() {
    let navigate = useNavigate();
    let [data, setData] = useState();


    const loadData = () => {
        getItems('bio', false)
            .then((response) => {
                setData(response.result);
            })
            .catch((err) => {
                alert("Could not fetch data");
                console.log(err);
            })
    }

    useEffect(() => {
        loadData();
    }, []);


    const deleteAction = (id) => {
        delItem(`bio/del/${id}`, true)
            .then((response) => {
                success(response.message);
                loadData();
            })
            .catch((err) => {
                error("Error occured");
                console.log(err);
            })
    }


    const editAction = (id) => {
        navigate(`/admin/biography/edit/${id}`);
    }
    // console.log(data);
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
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Short Summary
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Wiki Link
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Quotes
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
                                    data && data.map((o, index) => (
                                        <tr key={index}>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {index + 1}
                                            </td>

                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.name}
                                            </td>
                                            <td className=" max-w-md overflow-hidden break-words border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.short_summ}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.wiki_link}
                                            </td>
                                            <td className="max-w-md overflow-hidden border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {o?.quotes}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
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