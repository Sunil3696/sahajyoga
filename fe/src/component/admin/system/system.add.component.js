import { error, success } from "../../../helper/notify.helper";
import { uploadDataAndFile } from "../../../services/httpclient.services";
import { SystemForm } from "./system.form.component";
import {useNavigate} from "react-router-dom"
export function SystemAdd() {
    let navigate = useNavigate()

    const addSystem = (data, thumb, banner, dimages) => {
        let allData = new FormData();

        if (thumb) {
            allData.append('thumb_image', thumb);
        }
        if (banner) {
            allData.append('banner_image', banner);
        }
        if (dimages) {
            for (let i = 0; i < dimages.length; i++) {
                allData.append('images', dimages[i]);
            }
        }
        for (let key in data) {
            allData.append(key, data[key]);
        }
        // for (var pair of allData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        uploadDataAndFile('systems/create', allData, true)
            .then((response) => {
               success(response.message);
               navigate('/admin/system')
            // console.log(response);
            })
            .catch((err) => {
                console.log(err, "error");
                error("error occured")
            })


    }
    return (
        <>
            <SystemForm onSubmit={addSystem}></SystemForm>
        </>
    )
}