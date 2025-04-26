import { Link } from "react-router";
import ActiveInputs from "./ActiveInputs";

export default function PInfo() {
    return (
        <div className="h-full w-3/4 mx-auto">
            <div className="flex items-center justify-center gap-8 border-b-[2px] border-gray-300 mx-auto mt-28 mb-11">
                <div className="flex gap-2 border-b-[3px] border-blue-600 px-2">
                    <img src="/src/assets/user_blue.svg" alt="" />
                    <Link className="text-blue-600 font-bold text-[16px]" to={"/personal"}>
                        Personal Info
                    </Link>
                </div>
                <div className="flex gap-2  px-2">
                    <img src="/src/assets/account_circle.svg" alt="" />
                    <Link className="text-custom-grey-500 font-bold text-[16px]" to={"/personal"}>
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
            <div className="  w-10/12 mx-auto flex flex-col justify-between">
                <div className="flex justify-between gap-6">
                    <div className=" w-8/12 flex gap-16">
                        <div className="flex flex-col gap-10 ">
                            <ActiveInputs type="text" name="Full Name" placeholder="Enter Your Full Name" />
                            <ActiveInputs type="text" name="Date of Birth" placeholder="Enter Your Date Of Birth" />
                        </div>
                        <div className="flex flex-col gap-10">
                            <ActiveInputs type="text" name="Place Of Residence" placeholder="Enter Your Place Of Residence" />
                            <ActiveInputs type="text" name="Full Address" placeholder="Enter Your Full Address" />
                        </div>
                    </div>
                    <div className=" flex flex-col items-center mx-auto">
                        <div className=" bg-[#E9E9E9] w-full h-[216px] gap-8 border border-black border-dashed cursor-pointer">
                            <input className="opacity-0 w-full h-[216px] cursor-pointer" type="file" placeholder="image" />
                        </div>
                        <p className="font-bold text-[16px] leading-[140%] tracking-[0.2px] text-custom-grey-500 text-center">* Upload Photo</p>
                    </div>
                </div>
                <div className="w-4/5">
                    <div className="font-bold text-[18px] leading-[140%] tracking-[0.25px] mt-10 mb-6 relative left-0">Aadhar & Pancard</div>
                    <div className="flex flex-col gap-3 mb-3">
                        <div className="font-bold text-[16px] leading-[140%] tracking-[0.2px] text-custom-grey-500">Upload Your Aadhar Card</div>
                        <div className="flex w-full  gap-2">
                            <div className=" w-5/12 flex flex-col items-center">
                                <div className=" bg-[#E9E9E9] w-full h-[216px] gap-8 border border-black border-dashed cursor-pointer">
                                    <input className="opacity-0 w-full h-[216px] cursor-pointer" type="file" placeholder="image" />
                                </div>
                                <p className="font-bold text-[12px] leading-[140%] tracking-[0.2px] text-custom-grey-500 text-center pt-1">* Upload Your Aadhar Card Front </p>
                            </div>
                            <div className=" w-5/12 flex flex-col items-center mx-auto">
                                <div className=" bg-[#E9E9E9] w-full h-[216px] gap-8 border border-black border-dashed cursor-pointer">
                                    <input className="opacity-0 w-full h-[216px] cursor-pointer" type="file" placeholder="image" />
                                </div>
                                <p className="font-bold text-[12px] leading-[140%] tracking-[0.2px] text-custom-grey-500 text-center pt-1">* Upload Your Aadhar Card Back</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-10">
                        <div className="font-bold text-[16px] leading-[140%] tracking-[0.2px] text-custom-grey-500">Upload Your Pan Card</div>
                        <div className="flex w-full  gap-2">
                            <div className=" w-5/12 flex flex-col items-center">
                                <div className=" bg-[#E9E9E9] w-full h-[216px] gap-8 border border-black border-dashed cursor-pointer">
                                    <input className="opacity-0 w-full h-[216px] cursor-pointer" type="file" placeholder="image" />
                                </div>
                                <p className="font-bold text-[12px] leading-[140%] tracking-[0.2px] text-custom-grey-500 text-center pt-1">* Upload Your Pan Card</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link className="bg-blue-600 w-48 h-14 rounded-xl flex items-center justify-center font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white my-16" to={"/professionalinfo"}>Save & Next</Link>

            </div>
        </div>
    )
}
