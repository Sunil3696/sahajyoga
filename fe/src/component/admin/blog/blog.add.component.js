import { useNavigate } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { uploadDataAndFile } from "../../../services/httpclient.services";
import { BlogForm } from "./blog.form.component";

export function BlogAdd() {
    let navigate = useNavigate();
    const addBlog = (data, image, carouselImg) => {
        let allData = new FormData();

        for (let key in data) {
            allData.append(key, data[key]);
        }

        if (carouselImg) {
            for (let i = 0; i < carouselImg.length; i++) {
                allData.append('carousel', carouselImg[i]);
            }
        }

        allData.append('image', image);



        uploadDataAndFile('blog/create', allData, true)
            .then((response) => {
                if (response.status) {
                    success(response.message);
                    navigate('/admin/blogs')
                }
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })

    }


    return (
        <>
            <BlogForm onSubmit={addBlog}></BlogForm>
        </>
    )
}