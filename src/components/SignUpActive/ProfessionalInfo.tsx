import { Link } from "react-router";
import ActiveInputs from "./ActiveInputs";

export default function ProfessionalInfo() {
    return (
        <div className="h-full w-3/4 mx-auto">
            <div className="flex items-center justify-center gap-8 border-b-[2px] border-gray-300 mx-auto mt-28 mb-11">
                <div className="flex gap-2  px-2">
                    <img src="/src/assets/user.svg" alt="" />
                    <Link className=" text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
                        Personal Info
                    </Link>
                </div>
                <div className="flex gap-2 border-b-[3px] border-blue-600  px-2">
                    <img src="/src/assets/account_circle_blue.svg" alt="" />
                    <Link className="text-blue-600 font-bold text-[16px]" to={"/personal"}>
                        Professional Info
                    </Link>
                </div>
                <div className="flex gap-2   px-2"><img src="/src/assets/globe.svg" alt="" />
                    <Link className="text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
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
            <div className="w-11/12 mx-auto flex flex-col gap-11 justify-between h-full">
                <div className="flex gap-28 h-28">
                    <ActiveInputs type="text" name="Enter Your Role" placeholder="Enter Your Role" />
                    <ActiveInputs type="text" name="Employment Type" placeholder="Enter Your Company Name" />
                    <ActiveInputs type="text" name="Date Of Joining" placeholder="Enter Your Date Of Joining" />
                </div>
                <hr />
                <div className="flex flex-col gap-12">
                    <div className="flex gap-28">
                        <ActiveInputs type="text" name="Your Previous Company" placeholder="Enter Your Company Name" />
                        <ActiveInputs type="text" name="Your Role" placeholder="Enter Your Role" />
                        <ActiveInputs type="text" name="Duration" placeholder="Enter Your Duration" />
                    </div>
                    <div>
                        <p className="pb-5"><span className="font-bold text-[16px] leading-[140%] tracking-[0.2px]">List Of Previous Company's Documents</span> 	&#40;Experience letter, NOC, Salary Slips etc..&#41;</p>
                        <div className=" w-5/12 flex flex-col items-center">
                            <div className=" bg-[#E9E9E9] w-full h-[216px] gap-8 border border-black border-dashed cursor-pointer">
                                <input className="opacity-0 w-full h-[216px] cursor-pointer" type="file" placeholder="image" />
                            </div>
                            <p className="font-bold text-[12px] leading-[140%] tracking-[0.2px] text-custom-grey-500 text-center pt-1">* Upload Your Pan Card</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 ">
                    <Link className="bg-gray-500 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white " to={"/pinfo"}>Previous</Link>
                    <Link className="bg-blue-600 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white mb-16" to={"/professionalinfo"}>Save & Next</Link>
                </div>

            </div>
        </div>
    )
}
