import { Link } from "react-router";

export default function SocialProfile() {
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
                <div className="flex gap-3 border-b-[3px] border-blue-600  px-2"><img src="/src/assets/world_blue.svg" alt="" />
                    <Link className="text-blue-600 font-bold text-[16px]" to={"/personal"}>
                        Social Info
                    </Link>
                </div>
                <div className="flex gap-2  px-2">
                    <img src="/src/assets/at_the _rate.svg" alt="" />
                    <Link className="text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="w-9/12 mx-auto flex flex-col gap-11 justify-between h-full">
                <div>
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.2px] mb-8 mt-5">
                        Social link 1
                    </div>
                    <div className="flex border items-center px-5 py-2 rounded-xl">
                        <div className="flex w-3/12 gap-5">
                            <img className="w-7 h-6" src="/src/assets/logos_facebook.svg" alt="" />
                            <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">Facebook</p>
                            <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                        </div>
                        <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                    </div>
                </div>
                <div>
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.2px] mb-8 mt-5">
                        Social link 2
                    </div>
                    <div className="flex border items-center px-5 py-2 rounded-xl">
                        <div className="flex w-3/12 gap-6">
                            <img className="w-6 h-6" src="/src/assets/prime_twitter.svg" alt="" />
                            <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">Twitter</p>
                            <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                        </div>
                        <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                    </div>
                </div>
                <div>
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.2px] mb-8 mt-5">
                        Social link 3
                    </div>
                    <div className="flex border items-center px-5 py-2 rounded-xl">
                        <div className="flex w-3/12 gap-5">
                            <img className="w-6 h-6" src="/src/assets/skill-icons_linkedin.svg" alt="" />
                            <p className="font-semibold text-[16px] leading-[150%] tracking-[0.2px] text-custom-grey-500">Linkedin</p>
                            <img className="w-6 h-6" src="/src/assets/chevron-down.svg" alt="" />
                        </div>
                        <input type="text" className=" w-full h-full border-l py-2 outline-none" />
                    </div>
                </div>
            </div>

            <div className="flex gap-5 mt-24 pl-12">
                <Link className="bg-gray-500 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white " to={"/professionalinfo"}>Previous</Link>
                <Link className="bg-blue-600 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white mb-16" to={"/contact"}>Save & Next</Link>
            </div>
        </div>
    )
}
