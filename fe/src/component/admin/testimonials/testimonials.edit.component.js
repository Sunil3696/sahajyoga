import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { error, success } from "../../../helper/notify.helper";
import { getItems, updateDataAndFiles } from "../../../services/httpclient.services";
import { TestimonialsForm } from "./testimonials.form.component"

export function TestimonialEdit() {
    let navigate = useNavigate();
    let params = useParams();
    let [testimonialData, setTestimonialData] = useState();

    useEffect(() => {
        getItems(`testimonials/${params.id}`, true)
            .then((response) => {
                setTestimonialData(response.result);
            })

            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })
    }, [])


    const editTestimonial = (data, file = null) => {
        let allData = new FormData();

        if (file) {
            allData.append('image', file);
        }

        for (let key in data) {
            allData.append(key, data[key]);
        }

        updateDataAndFiles(`testimonials/edit/${params.id}`, allData, true)
            .then((response) => {
                success(response.message);
                navigate('/admin/testimonials');
            })
            .catch((err) => {
                console.log(err);
                error("Error Occured")
            })


    }



    return (
        <>
            <TestimonialsForm testimonialData={testimonialData} onSubmit={editTestimonial}></TestimonialsForm>
        </>
    )
}