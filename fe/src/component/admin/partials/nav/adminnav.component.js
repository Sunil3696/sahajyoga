export function AdminNavbar() {


  let current= new Date();
  const year = current.getFullYear();
  const date = current.getDate();
  const month = current.getMonth();

  const dates = year + "/" + month + "/" + date

    return (
        <>
      {/* Navbar */}
      <nav className="hidden sm:block absolute top-0 left-0 w-full z-10 bg-blue-500 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <span className="hidden sm:block">
          Date : {dates}
          </span>
            
          
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
    )
}