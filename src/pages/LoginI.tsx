import { useState } from "react"
import InputI from "../components/ui/Common/InputI"
import { Link } from "react-router";

export default function LoginI() {

    const [username, setUsername] = useState("");

    return (
        <div className="absolute size-[404px] h-[636px] flex items-center justify-center left-1/2 -translate-x-[202px] top-1/2 -translate-y-[318px]">
            <div className="absolute w-[274px] h-7 left-1/2 -translate-x-[137px] top-0">
                <p className="font-bold text-2xl leading-(125%) tracking-[0.2px] text-custom-grey-900">
                    Sign Up for an Account
                </p>
            </div>

            <div className="flex flex-col items-start p-0 gap-4 absolute w-[404px] h-[200px] left-0 top-16">
                <div className=" flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch">
                    <img src="/src/assets/user.png" className="w-6 h-6" alt="user" />
                    <InputI type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        console.log(username)
                        setUsername(e.target.value)
                    }} className=" w-full order-1" placeholder="Username" />
                </div>
                <div className=" flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch">
                    <img src="/src/assets/mail.svg" className="w-6 h-6" alt="user" />
                    <input type="text" className="w-full order-1 " placeholder="Username" />
                </div>
                <div className=" box-border flex items-center justify-between gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch">
                    <img src="/src/assets/Group.svg" className="w-6 h-6" alt="user" />
                    <input type="text" className="w-4/5 " placeholder="Username" />
                    <img className="w-6 h-7 pr-1" src=" /src/assets/eye.svg" alt="" />
                </div>
            </div>
            <p className="absolute w-64 h-5 left-0 top-[274px] font-normal text-[12px] leading-[160%] text-custom-grey-500">Your password must have at least 8 characters</p>
            <div className="flex items-start gap-3 absolute w-80 h-9 left-0 top-[317]">
                <input type="checkbox" className="w-5 h-5" />
                <p className="font-normal text-[12px] leading-[160%] text-custom-grey-500 order-1 flex-grow">
                    By creating an account means you agree to the <span className="text-black font-semibold text-[12px] leading-[160%]">
                        Terms
                        & Conditions </span> and our <span className="text-black font-semibold text-[12px] leading-[160%]"> Privacy Policy </span>
                </p>
            </div>
            <Link to={"/personal"} className="flex justify-center items-center p-2 gap-2 absolute w-[404px] h-[56px] left-0 top-[386px] bg-blue-600 rounded-2xl">
                <p className="w-16 h-5 font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white">
                    Sign Up
                </p>
            </Link>
            <div className="flex items-center p-0 gap-4 absolute w-[404px] h-5 left-0 top-[475px]">
                <p className="w-[143px] h-0 border border-custom-grey-200"></p>
                <p className="w-[86px] h-5 font-normal text-[12px] leading-[160%] text-center text-custom-grey-500">Or sign up with</p>
                <p className="w-[143px] h-0 border border-custom-grey-200"></p>
            </div>
            <div className=" flex items-start p-0 gap-4 absolute w-[403px] h-[56px] left-1 top-[526px] ">
                <button className="box-border flex justify-center items-center p-0 gap-4 w-[194px] h-14 bg-white border border-custom-grey-200 rounded-xl"> <img src="/src/assets/google.svg" className="w-5 h-5" alt="" /> <span className="w-14 h-6 font-semibold text-[16px] leading-[150%] tracking-[0.2px]">Google</span></button>
                <button className="box-border flex justify-center items-center p-0 gap-4 w-[194px] h-14 bg-white border border-custom-grey-200 rounded-xl"> <img src="/src/assets/akar-icons_facebook-fill.svg" className="w-5 h-5" alt="" /> <span className="w-14 h-6 font-semibold text-[16px] leading-[150%] tracking-[0.2px]">Facebook</span></button>
            </div>
            <div className="absolute w-[216] h-[22px] left-24 top-[614px] 
            font-normal text-[14px] leading-[160%] text-center text-custom-grey-900
            ">
                Already have an account? <span className="font-bold text-[14px] leading-[160%] justify-center text-blue-500">Log In</span>
            </div>
        </div>
    )
}
