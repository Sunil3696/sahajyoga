import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles } from "../../../services/httpclient.services";
import { SystemForm } from "./system.form.component";

export function SystemEdit() {
    let navigate = useNavigate();
    let params = useParams();
    let [systemData, setSystemData] = useState();

    useEffect(() => {
        getItems(`systems/${params.id}`)
            .then((response) => {
                setSystemData(response.result);
            })
            .catch((err) => {
                console.log("error occured", err);
                alert("error occured");
            })
    }, []);

    const editSystem = (data, thumb = null, banner = null, dimages = null) => {
        let allData = new FormData();

        if (thumb) {
            allData.append('thumb_image', thumb)
        }
        if (banner) {
            allData.append('banner_image', banner)
        }


        for (let key in data) {
            allData.append(key, data[key]);
        }

        if (dimages) {
            for (let i = 0; i < dimages.length; i++) {
                allData.append('images', dimages[i]);
            }
        }


        updateDataAndFiles(`systems/edit/${params.id}`, allData, true)
        .then((response)=> {
            success(response.message);
            navigate('/admin/system');
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    return (
        <>
            <SystemForm systemData={systemData} onSubmit={editSystem}> </SystemForm>
        </>
    )
}