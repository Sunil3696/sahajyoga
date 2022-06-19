import { useState } from "react"
import { success, error } from "../../helper/notify.helper";
import { postItem } from "../../services/httpclient.services";
import Zoom from 'react-reveal/Zoom';
export function HomeContact() {
    let [data, setData] = useState();
    let [error, setError] = useState();

    const handleChange = (event) => {
        let { type, name, value } = event.target;
        setData((preState) => {
            data = {
                ...preState,
                [name]: value
            }
            validateForm(name)
            return data;
        })
    }

    const validateForm = (field) => {
        let error_message = "";
        switch (field) {
            case "email":
                error_message = data['email'] ? (data['email'].includes("@") ? "" : "Invalid email address") : "Email is Required"
                break;
            case "message":
                error_message = data['message'] ? "" : "Please enter your feedback or message"
                break;
        }

        setError((prevState) => {
            error = {
                ...prevState,
                [field]: error_message
            }
            return error;
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        postItem('feedback/create', data, false)
            .then((response) => {
                if (response.status) {
                    success(response.message);
                }
            })
            .catch((err) => {
                error("Sorry Could not send Feedback at this moment. Please try again")
            })
    }

    // console.log(data)
    return (
        <>
            <section data-aos="fade-up" className="text-gray-600 body-font relative mt-10">
                <div id="" className="absolute inset-0 bg-white">
                    <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.7945011626966!2d85.35609251453944!3d27.754483730026806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1c0091c9b079%3A0x7e196d0a2d798d14!2sSahaja%20Yoga%20Meditation%20Ashram!5e0!3m2!1sen!2snp!4v1649505063093!5m2!1sen!2snp" width="100%" height="800" style={{ border: 0 }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Zoom bottom>
                    <div className="container px-5 py-24 mx-auto flex">
                        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 className="text-lg mb-1 font-medium title-font text-indigo-600">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">Please Contact Us. If you want help from here, then please feel free to say.<br /><span className="font-bold text-center text-black mx-auto">Jay Shri Mataji</span></p>
                            <form onSubmit={submitForm}>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <span className="text-sm text-red-700"> {error?.email}</span>
                                    <input onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <span className="text-sm text-red-700"> {error?.message}</span>

                                    <textarea onChange={handleChange} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button type="submit" className="text-white bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-white hover:text-indigo-600 rounded text-lg border border-transparent hover:border-gray-300">Send</button>
                            </form>
                            <p className="text-xs text-gray-500 mt-3 font-semibold">We will reply within 24 hr. Thank you</p>
                        </div>
                    </div>
                </Zoom>
            </section>
        </>
    )
}