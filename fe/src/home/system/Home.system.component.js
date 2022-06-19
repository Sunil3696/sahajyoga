import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getItems } from "../../services/httpclient.services";

export function HomeSystem() {
  let [data, setData] = useState();
  let [active, setActive] = useState(null);
  let [sysData, setSysData] = useState();

  let params = useParams();
  useEffect(() => {
    getItems('systems/fe')
      .then((response) => {
        setData(response.result);
        setActive("1");
      })
  }, [])

  useEffect(() => {
    let ShowData = data?.filter((obj) => obj?.under_head == "62ad9c8e2c0d9d99d350db4e")
    setSysData(ShowData);
  }, [data])

  const handleActive = (event) => {
    // console.log(event.target.name)

    setActive(event.target.name);
    setDataForPreview(event.target.name);

  }

  const setDataForPreview = (typeId) => {
    if (typeId == 2) {
      let ShowData = data?.filter((obj) => obj?.under_head == "62ad9c992c0d9d99d350db51")
      setSysData(ShowData)
    }
    if (typeId == 3) {
      let ShowData = data?.filter((obj) => obj?.under_head == "62ad9ca32c0d9d99d350db54")
      setSysData(ShowData)
    }
    if (typeId == 4) {
      let ShowData = data?.filter((obj) => obj?.under_head == "62ad9cb32c0d9d99d350db57")
      setSysData(ShowData)
    }
    if (typeId == 1) {
      let ShowData = data?.filter((obj) => obj?.under_head == "62ad9c8e2c0d9d99d350db4e")
      setSysData(ShowData)
    }
  }








  // console.log("ss", sysData)
  // console.log(data?.[0].under_head._id)
  return (
    <>

      <div className="overflow-hidden">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] max-w-[510px]">
              <span className="font-semibold text-2xl text-indigo-500 mb-2 block text-center">
              </span>
              <h2
                className="font-bold text-5xl sm:text-4xl tracking-normal md:text-[58px] text-dark text-center mb-4 mt-8 inter-line-height">
                Sahaja Yoga Nepal
              </h2>
              <p className="text-gray-500 mt-8 text-lg">You cannot know the meaning of your life until you are connected to the power that created you. Freedom is when you really get your own powers which are within you."</p>
              <p className="mt-6 mb-5 text-2xl text-center font-semi-bold"> Shri Mataji Nirmala Devi</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              <li className="mb-1">
                <button name="1" onClick={handleActive} className={active == "1" ? "bg-red-700 text-white  inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition" : "bg-blue-700 text-white hover:bg-red-700 inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition ease-out"}>
                  The Human Subtle System
                </button>
              </li>
              <li className="mb-1">
                <button name="2" onClick={handleActive} className={active == "2" ? "bg-red-700 text-white  inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition" : "bg-blue-700 text-white hover:bg-red-700 inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition"}>
                  The 7 Chakras
                </button>
              </li>
              <li className="mb-1">
                <button onClick={handleActive} name="3" className={active == "3" ? "bg-red-700 text-white  inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition" : "bg-blue-700 text-white hover:bg-red-700 inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition"} >
                  The 3 Nadis
                </button>
              </li>
              <li className="mb-1">
                <button onClick={handleActive} name="4" className={active == "4" ? "bg-red-700 text-white  inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition" : "bg-blue-700 text-white hover:bg-red-700 inline-block py-2 md:py-3 px-5 lg:px-8 rounded-lg text-base font-semibold text-center transition"}>
                  The Kundalini
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap sm:mx-40 cursor-pointer">


          {
            sysData && sysData.length > 0 ?
              sysData && sysData.map((o, index) => (
                <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="relative mb-12">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={sysData && process.env.REACT_APP_BASE_IMAGE_URL + "/" + o?.thumb_image}
                        alt="portfolio"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="text-center bg-white relative z-10 py-9 px-3 rounded-lg shadow-lg mx-7-mt-20">
                      <span className="text-sm text-gray-500 font-semibold block mb-2">
                        Sahaja Yoga
                      </span>
                      <h3 className="font-bold text-base text-dark mb-4">
                        {o?.name}
                      </h3>
                      <Link to={`/system/${o?._id}`} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 md:py-4 md:text-lg md:px-10 hover:bg-red-600 hover:text-white hover:border-red-600"> View Details </Link>
                    </div>
                  </div>
                </div>
              ))
              :
              <h1 className="text-red-700 text-center">Sorry There are no any data uploaded at this moment. Please try again later or Contact Sahaja Yoga Nepal
              </h1>
          }





        </div >
      </div >

    </>
  )
}