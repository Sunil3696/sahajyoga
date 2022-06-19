import { useNavigate } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { uploadDataAndFile } from "../../../services/httpclient.services";
import { BannerForm } from "./banner.form.component";

export function BannerAdd() {
    let navigate = useNavigate();
    const submitBanner = (data, file) => {
        let allData = new FormData();
        allData.append('image', file);

        for (let key in data) {
            allData.append(key, data[key])
        }
        

        uploadDataAndFile('banner/create', allData, true)
        .then((response)=> {
            if(response.status){
                success(response.message);
                navigate('/admin/banner')
            }
        })
        .catch((err)=> {
            error("Banner could not be added")
            console.log("err", err)
        })

    }
    return (
        <>
            <BannerForm onSubmit={submitBanner}></BannerForm>
        </>
    )
}