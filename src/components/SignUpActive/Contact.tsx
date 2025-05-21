import { Link } from "react-router";

export default function Contact() {
    return (
        <div className="h-full w-3/4 mx-auto">
            <div className="flex items-center justify-center gap-8 border-b-[2px] border-gray-300 mx-auto mt-28 mb-11">
                <div className="flex gap-2  px-2">
                    <img src="/src/assets/user.svg" alt="" />
                    <Link className=" text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
                        Personal Info
                    </Link>
                </div>
                <div className="flex gap-2   px-2">
                    <img src="/src/assets/account_circle.svg" alt="" />
                    <Link className="text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
                        Professional Info
                    </Link>
                </div>
                <div className="flex gap-3 px-2"><img src="/src/assets/globe.svg" alt="" />
                    <Link className="text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
                        Social Info
                    </Link>
                </div>
                <div className="flex gap-2 border-b-[3px] border-blue-600  px-2">
                    <img src="/src/assets/at_the _rate_blue.svg" alt="" />
                    <Link className="text-blue-600 font-bold text-[16px]" to={"/personal"}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="w-9/12 mx-auto flex flex-col gap-11 justify-between h-full">
                <div>
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.2px] mb-8 mt-5">
                        Contact Number
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p>Primary Phone Number</p>
                            <div className="flex border items-center pl-4 pr-20 py-2 rounded-xl">
                                <div className="flex w-5/12">
                                    <img className="w-7 h-6" src="/src/assets/twemoji_flag-india.svg" alt="" />
                                    <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">+91</p>
                                    <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                                </div>
                                <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p>Alternate Number</p>
                            <div className="flex border items-center pl-4 pr-20 py-2 rounded-xl">
                                <div className="flex w-5/12">
                                    <img className="w-6 h-6" src="/src/assets/twemoji_flag-india.svg" alt="" />
                                    <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">+91</p>
                                    <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                                </div>
                                <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.2px] mb-8 mt-5">
                        Contact Number
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p>Primary Phone Number</p>
                            <div className="flex border items-center pl-4 pr-20 py-2 rounded-xl">
                                <div className="flex w-5/12">
                                    <img className="w-7 h-6" src="/src/assets/twemoji_flag-india.svg" alt="" />
                                    <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">+91</p>
                                    <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                                </div>
                                <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p>Alternate Number</p>
                            <div className="flex border items-center pl-4 pr-20 py-2 rounded-xl">
                                <div className="flex w-5/12">
                                    <img className="w-6 h-6" src="/src/assets/twemoji_flag-india.svg" alt="" />
                                    <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">+91</p>
                                    <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                                </div>
                                <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="flex gap-5 mt-24 pl-12">
                <Link className="bg-gray-500 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white " to={"/social"}>Previous</Link>
                <Link className="bg-blue-600 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white mb-16" to={"/"}>Save & Finish</Link>
            </div>
        </div>
    )
}
