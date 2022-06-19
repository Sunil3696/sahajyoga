import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles } from "../../../services/httpclient.services";
import { BannerForm } from "./banner.form.component";

export function BannerEdit() {
    let params = useParams();
    let navigate = useNavigate();
    let [banner, SetBanner] = useState([]);

    useEffect(() => {
        getItems(`banner/${params.id}`, false)
            .then((response) => {
                SetBanner(response.result);
            })
            .catch((err) => {
                console.log(err);
                error("Sorry there was an error")
            })
    }, []);

    const submitForm = (data, file = null) => {
        let allData = new FormData();

        if (file) {
            allData.append('image', file);
        }
        
        for (let key in data) {
            allData.append(key, data[key])
        }


        updateDataAndFiles(`banner/edit/${params.id}`, allData, true)
            .then((response) => {
                success(response.message);
                navigate('/admin/banner');
            })
            .catch((err) => {
                console.log(err);
                error("Sorry there wa an error");
            })


    }


    return (
        <>
            <BannerForm onSubmit={submitForm} bannerData={banner}></BannerForm>
        </>
    )
}