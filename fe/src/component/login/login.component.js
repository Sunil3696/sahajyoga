import "./login.com.css"
import { useState, useEffect } from "react";
import { postItem } from "../../services/httpclient.services";
import { success, warning } from "../../helper/notify.helper";
import { useNavigate } from "react-router-dom";


let defaultData = {
    email: "",
    password: ""
}

export const Login = () => {
    let navigate = useNavigate();

    let [data, setData] = useState(defaultData);
    let [error, setError] = useState(defaultData);


    const handleChange = (event) => {
        const { value, name, type } = event.target;
        setData((preState) => {
            data = {
                ...preState,
                [name]: value
            }
            validateForm(name);
            return data;
        })
    }


    const validateForm = (field) => {
        let message = "";
        switch (field) {
            case 'email':
                message = data['email'] ? (data['email'].includes('@') ? '' : "invalid email format") : "Email Field is required"
                break;

            case "password":
                message = data['password'] ? data['password'].length < 8 ? 'password must be minimum 8 char' : '' : "Password is required"
                break;
        }

        setError((prevState) => {
            error = {
                ...prevState,
                [field]: message
            }
            return error;
        })
    }

    const submitForm = (event) => {
        event.preventDefault();

        postItem('auth/login', data, false)
            .then((response) => {
                let result = response.result;

                localStorage.setItem('access_token', response.token);

                let userData = {
                    name: result.name,
                    email: result.email,
                    roles: result.roles,
                    status: result.status
                }
                localStorage.setItem('userData', JSON.stringify(userData));
                if (result.roles == 'admin') {
                    success("Welcome to admin panel");
                    navigate('/admin')
                }
                if (result.roles == 'customer') {
                    success("Welcome to sahajyoga");
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log("cacught error")
            })

    }


    useEffect(() => {
        let token = localStorage.getItem('access_token');
        if (token) {
            let user_data = JSON.parse(localStorage.getItem('userData'));
            let isAdmin = user_data.roles == 'admin' ? true : false;

            if(token && isAdmin){
                navigate('/admin');
                warning("you are already authenticated as Admin")
            }
            if(token && !isAdmin){
                navigate('/');
                warning("you are already authenticated")
            }
        }
    }, [])
    return (
        <>
            <div className="container mx-auto px-4 h-full mt-20">
                <div className="flex cointent-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className=" bg-slate-100 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <big>Sign in</big>
                                </div>
                                <form onSubmit={submitForm}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Email
                                        </label> <span className="text-red-700 text-sm mt-1">{error?.email}</span>
                                        <input onChange={handleChange} name="email" type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password">Password</label>
                                        <span className="text-red-700 text-sm mt-1">{error?.password}</span>
                                        <input
                                            type="password" onChange={handleChange} name="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button type="submit"
                                            className="bg-gray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        >Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-blueGray-200" >
                                    <small>Forgot password?</small></a>
                            </div>
                            <div className="w-1/2 text-right">
                                <a href="#" className="text-blueGray-200">
                                    <small>Create new account</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}