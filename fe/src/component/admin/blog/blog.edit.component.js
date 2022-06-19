import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles } from "../../../services/httpclient.services";
import { BlogForm } from "./blog.form.component";

export function BlogEdit() {
    let navigate = useNavigate();
    let params = useParams();
    let [blogData, setBlogData] = useState();

    useEffect(() => {
        getItems(`blog/${params.id}`)
            .then((response) => {
                setBlogData(response.result[0]);
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })
    }, []);



    const editBlog = (data, image = null, carouselimg = null) => {
        let allData = new FormData();
        if (carouselimg) {
            for (let i = 0; i < carouselimg.length; i++) {
                allData.append('carousel', carouselimg[i]);
            }
        }

        if (image) {
            allData.append('image', image);
        }
        for (let key in data) {
            allData.append(key, data[key]);
        }

        updateDataAndFiles(`blog/edit/${params.id}`, allData, true)
            .then((response) => {
              success(response.message);
              navigate('/admin/blogs')
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })

    }

    return (
        <>
            <BlogForm blogData={blogData} onSubmit={editBlog}></BlogForm>
        </>
    )
}