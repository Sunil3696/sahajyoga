import { Outlet } from "react-router-dom";
import { Sidebar } from "./partials/sidebar/sidebar.component";
import { AdminNavbar } from "./partials/nav/adminnav.component";
import { Banner } from "./banner/banner.component";
export function AdminLayout() {
    return (
        <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <h1 className="text-white">.</h1>
        <Outlet></Outlet>
      </div>
    </>
    )
}