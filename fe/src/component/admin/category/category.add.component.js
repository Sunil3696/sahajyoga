import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { success } from "../../../helper/notify.helper";
import { postItem } from "../../../services/httpclient.services";
import { CategoryForm } from "./category.form.component";

export function CategoryAdd() {
    let navigate = useNavigate();
    const addCategory = (data) => {
        postItem('category/create', data, true)
        .then((response)=> {
           success(response.message);
           navigate('/admin/category')
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    return (
        <>
          
          <CategoryForm onSubmit={addCategory}></CategoryForm>
          
        </>
    )
}