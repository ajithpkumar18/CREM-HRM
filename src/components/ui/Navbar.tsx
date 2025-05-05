
export default function Navbar() {
    return (
        <div className="w-full  flex h-24 justify-between items-center px-7">
            <div className=" my-auto">
                <p className=" font-semibold text-[20px] leading-7 text-dark-500">Hello Robert</p>
                <p className="font-light text-[14px] leading-[22px] text-nav-gray-500">Good Morning</p>
            </div>
            <div className="w-2/4 flex justify-between items-center">
                <div className="flex items-center px-3 border rounded-[10px] w-6/12 my-auto h-[50px] gap-3">
                    <img className="w-6 h-6" src="/src/assets/dashboard/Navbar/search.svg" alt="" />
                    <input className="w-full outline-none" type="text" placeholder="Search" />
                </div>
                <div className="border h-[50px] w-[50px] rounded-[10px] flex items-center bg-gray-200 cursor-pointer">
                    <img className="mx-auto w-6 h-6" src="/src/assets/dashboard/Navbar/bell_notification.svg" alt="" />
                </div>
                <div className="border w-[184px] gap-1 flex items-center justify-between p-1 rounded-lg">
                    <img className="w-10 h-10 rounded-lg " src="/src/assets/images/profile.png" alt="" />
                    <div className="my-auto">
                        <p className="font-semibold text-[16px] leading-6 text-dark-500">Robert Allen</p>
                        <p className="font-light text-[12px] leading-[18px] text-nav-gray-500">HR Manager</p>
                    </div>
                    <div>
                        <img className="w-5 h-5" src="/src/assets/chevron-down.svg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}
