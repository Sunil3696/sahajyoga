import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles } from "../../../services/httpclient.services";
import { BiographyForm } from "./biography.form.component";

export function BiographyEdit() {
    let params = useParams();
    let navigate = useNavigate();

    let [bioData, setBioData] = useState();

    useEffect(() => {
        getItems(`bio/${params.id}`)
            .then((response) => {
                setBioData(response.result)
            })
            .catch((err) => {
                console.log(err);
                error('Error Occured')
            })
    }, []);


    const editBio = (data, mainImages = null, descImages = null) => {
        const allData = new FormData();

       
        if (mainImages) {
            for (let i = 0; i < mainImages.length; i++) {
                allData.append('main_images', mainImages[i]);
            }
        }
        if (descImages) {
            for (let i = 0; i < descImages.length; i++) {
                allData.append('desc_images', descImages[i]);
            }
        }

        for (let key in data) {
            allData.append(key, data[key]);
        }

        updateDataAndFiles(`bio/edit/${params.id}`, allData, true)
            .then((response) => {
                success(response.message)
                navigate('/admin/biography');
            })
            .catch((err) => {
                console.log(err);
            })
    }




    return (
        <>
            <BiographyForm bioData={bioData} onSubmit={editBio}></BiographyForm>
        </>
    )
}