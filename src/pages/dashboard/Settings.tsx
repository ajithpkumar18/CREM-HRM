
import Dropdown from "../../components/ui/Common/Dropdown";
import Toggle from "../../components/ui/Common/Toggle";

export default function Settings() {
    return (
        <>
            <div className="w-12/12 mr-7 rounded-[10px] p-[22px] flex flex-col gap-[22px] border ">
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Appearance</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Customize how your theme looks on your device</p>
                    </div>
                    <Dropdown start={"Light"} />
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Language</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Select your language</p>
                    </div>
                    <Dropdown start={"English"} />
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Two-factor Authentication</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Keep your account secure by enabling 2FA via mail</p>
                    </div>
                    <Toggle />
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Mobile Push Notification</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Receive push notification</p>
                    </div>
                    <Toggle />
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Desktop Notification</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Receive push notification in desktop</p>
                    </div>
                    <Toggle />
                </div>
                <div className="w-full flex justify-between ">
                    <div>
                        <p className="font-semibold text-[16px] leading-[24px]">Email Notification</p>
                        <p className="font-light text-nav-gray-500 text-[16px] leading-[24px]">Receive email notification</p>
                    </div>
                    <Toggle />
                </div>
            </div>
        </>
    )
}
