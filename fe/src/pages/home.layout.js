import { Outlet } from "react-router-dom";
import { HomeFooter } from "../home/footer/home.footer.component";
import { HomeNavBar } from "../home/nav/nav.component";

import "./style.css"
export function HomeLayout(){
    return (
        <>
        <HomeNavBar></HomeNavBar>
        <Outlet></Outlet>
        <HomeFooter></HomeFooter>
        </>
    )
}