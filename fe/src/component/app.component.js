import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../input.css"
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Login } from "./login/login.component";
import { AdminLayout } from "./admin/admin-layout";

//Home related
import { Dashboard } from "./admin/dashboard/dashboard.component";
import { HomeLayout } from "../pages/home.layout";
import { HomeViewBlog } from "../home/blog/viewblog.component";
import { HomeViewSystem } from "../home/system/home.view.system.component";
import { AllBlogList } from "../home/blog/home.allblog.list.component";
import { PageNotFound } from "../home/404/404.component";
import { About } from "../home/bio/about.component";


// admin relates component imports
import { HomeContent } from "../home/main/home.content.component";
import { Banner, BannerList, BannerAdd, BannerEdit } from "./admin/banner";
import { Category, CategoryList, CategoryAdd, CategoryEdit } from "./admin/category";
import { System, SystemList, SystemAdd, SystemEdit } from "./admin/system";
import { Biograpgy, BiographyList, BiographyAdd, BiographyEdit } from "./admin/biography";
import { BiographyForm } from "./admin/biography/biography.form.component";
import { Testimonial, TestimonialList, TestimonialAdd, TestimonialEdit } from "./admin/testimonials";
import { Blog, BlogList, BlogAdd, BlogEdit } from "./admin/blog";

export function App() {


    function AdminRoute({ component: Component }) {
        let access_token = localStorage.getItem('access_token');
        if (!access_token) {
            return <Navigate to="/login"></Navigate>
        } else {
            let userData = JSON.parse(localStorage.getItem('userData'));
            let isLoggedin = access_token ? true : false;
            let is_admin = userData.roles == 'admin' ? true : false;
            return isLoggedin && is_admin ? Component : <Navigate to='/login'></Navigate>
        }
    }
    return (
        <>
            <BrowserRouter>
                <ToastContainer></ToastContainer>



                <Routes>

                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

                    <Route path="/" element={<HomeLayout></HomeLayout>}>
                        <Route index element={<HomeContent></HomeContent>}></Route>
                        <Route path="blog/:id" element={<HomeViewBlog></HomeViewBlog>}></Route>
                        <Route path="system/:id" element={<HomeViewSystem></HomeViewSystem>}></Route>
                        <Route path="blogs" element={<AllBlogList></AllBlogList>}></Route>
                        <Route path="mataji" element={<About></About>}></Route>
                    </Route>






                    <Route path="/login" element={<Login></Login>}></Route>



                    {/* admin routerwrapper */}

                    <Route path="/admin" element={<AdminRoute component={<AdminLayout></AdminLayout>}></AdminRoute>}>
                        <Route index element={<Dashboard></Dashboard>}></Route>


                        <Route path="banner" element={<Banner></Banner>}>
                            <Route index element={<BannerList></BannerList>}></Route>
                            <Route path="create" element={<BannerAdd></BannerAdd>}></Route>
                            <Route path="edit/:id" element={<BannerEdit></BannerEdit>}></Route>
                        </Route>


                        <Route path="category" element={<Category />}>
                            <Route index element={<CategoryList></CategoryList>}></Route>
                            <Route path="create" element={<CategoryAdd></CategoryAdd>}></Route>
                            <Route path="edit/:id" element={<CategoryEdit></CategoryEdit>}></Route>
                        </Route>

                        <Route path="system" element={<System></System>}>
                            <Route index element={<SystemList></SystemList>}></Route>
                            <Route path="create" element={<SystemAdd></SystemAdd>}></Route>
                            <Route path="edit/:id" element={<SystemEdit />}></Route>
                        </Route>

                        <Route path="biography" element={<Biograpgy />}>
                            <Route index element={<BiographyList />}></Route>
                            <Route path="create" element={<BiographyAdd></BiographyAdd>} ></Route>
                            <Route path="edit/:id" element={<BiographyEdit />}></Route>
                        </Route>

                        <Route path="testimonials" element={<Testimonial></Testimonial>}>
                            <Route index element={<TestimonialList></TestimonialList>}></Route>
                            <Route path="create" element={<TestimonialAdd></TestimonialAdd>}></Route>
                            <Route path="edit/:id" element={<TestimonialEdit></TestimonialEdit>}></Route>
                        </Route>


                        <Route path="blogs" element={<Blog></Blog>}>
                            <Route index element={<BlogList></BlogList>}></Route>
                            <Route path="create" element={<BlogAdd></BlogAdd>}></Route>
                            <Route path="edit/:id" element={<BlogEdit></BlogEdit>}></Route>
                        </Route>

                    </Route>





                </Routes>
            </BrowserRouter>
        </>
    )
}