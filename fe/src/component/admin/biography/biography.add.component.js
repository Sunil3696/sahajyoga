import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { uploadDataAndFile } from "../../../services/httpclient.services";
import { BiographyForm } from "./biography.form.component";

export function BiographyAdd() {
    let navigate = useNavigate();
    const addBio = (data, mainimages, descImages) => {
        let allData = new FormData();

        for (let key in data) {
            allData.append(key, data[key]);
        }


        if (mainimages) {
            for (let i = 0; i < mainimages.length; i++) {
                allData.append('main_images', mainimages[i]);
            }
        }

        if (descImages) {
            for (let i = 0; i < descImages.length; i++) {
                allData.append('desc_images', descImages[i]);
            }
        }

        uploadDataAndFile('bio/create', allData, true)
        .then((response)=> {
            success(response.message);
            navigate('/admin/biography');
        })
        .catch((err)=> {
            error("Error Occured");
            console.log(err);
        })

    }


    return (
        <>

            <BiographyForm onSubmit={addBio}></BiographyForm>
        </>
    )
}