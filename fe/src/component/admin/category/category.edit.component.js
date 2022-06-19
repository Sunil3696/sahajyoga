import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles, uploadDataAndFile } from "../../../services/httpclient.services";
import { CategoryForm } from "./category.form.component";

export function CategoryEdit() {
    let navigate = useNavigate();
    let [banner, setBanner] = useState();
    let params = useParams();
    useEffect(() => {
        getItems(`category/${params.id}`, false)
            .then((response) => {
                setBanner(response.result)
            })
            .catch((err) => {
                error("error Occured")
            })
    }, []);


    const editCategory = (data) => {
        let allData = new FormData();

        for (let key in data) {
            allData.append(key, data[key])
        }


        updateDataAndFiles(`category/edit/${params.id}`, data, true)
            .then((response) => {
                success(response.message);
                navigate('/admin/category');
            })
            .catch((err) => {
                error("Error Occured")
            })
    }

    return (
        <>
            <CategoryForm onSubmit={editCategory} bannerData={banner}> </CategoryForm>
        </>
    )
}