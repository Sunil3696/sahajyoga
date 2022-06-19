import { useEffect, useState } from "react"
import { delItem, getItems } from "../../../services/httpclient.services";

import { ActionButton } from "../../../common/action.buton";
import { success } from "../../../helper/notify.helper";
import { useNavigate } from "react-router-dom";
export function BannerList() {
    let navigate = useNavigate();
    let [banner, setBanner] = useState([]);
    let [isloading, setisLoading] = useState(true);

    const loadData = () => {
        getItems('banner', false)
            .then((response) => {
                setBanner(response.result);

            })
            .catch((err) => {
                console.log(err)
            })
        setisLoading(false)
    }

    useEffect(() => {

        loadData();

    }, [])



    const deleteAction = (id) => {
        delItem(`banner/del/${id}`, true)
            .then((response) => {
                success(response.message);
                loadData();
            })
            .catch((err) => {
                console.log("HH")
            })
    }

    const editAction = (id) => {
        navigate(`/admin/banner/edit/${id}`);

    }

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
                                    Title
                                </th>
                                <th className="max-w-md px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Heading
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    main Link
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Sub Link
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    image
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
                                <td>{isloading && <img className="w-60" src={process.env.REACT_APP_BASE_IMAGE_URL + "/" + 'loader.gif'}></img>}</td>
                            </tr>
                            {
                               banner && banner?.length > 0 ? 
                               banner?.map((o, index) => (
                                <tr key={index}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {index + 1}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o.title}
                                    </td>
                                    <td className="max-w-md overflow-hidden border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                                        {o.headings}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o.main_link}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o.sub_link}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {
                                            o?.image ?
                                                <img src={process.env.REACT_APP_BASE_IMAGE_URL + '/' + o?.image[0]}></img>
                                                : "-"
                                        }
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {o?.status}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <ActionButton
                                            onDelete={deleteAction}
                                            dataId={o._id}
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