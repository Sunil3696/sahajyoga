import { useNavigate } from "react-router-dom";
import { error, success } from "../../../helper/notify.helper";
import { uploadDataAndFile } from "../../../services/httpclient.services";
import { TestimonialsForm } from "./testimonials.form.component";

export function TestimonialAdd() {
    let navigate = useNavigate();
    const AddTestimonial = (data, file) => {
        let allData = new FormData();

        if (file) {
            allData.append('image', file);
        }

        for (let key in data) {
            allData.append(key, data[key]);
        }

        uploadDataAndFile('testimonials/create', allData, true)
        .then((response)=> {
            if(response.status){
                success(response.message);
                navigate('/admin/testimonials')
            }
        })
        .catch((err)=> {
            console.log(err);
            error("Error Occured");
        })
    }

    return (
        <>
            <TestimonialsForm onSubmit={AddTestimonial}></TestimonialsForm>
        </>
    )
}