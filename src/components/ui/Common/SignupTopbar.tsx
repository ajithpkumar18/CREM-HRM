import { redirect } from "react-router-dom"
import Crumb from "./Crumb"

export default function SignupTopbar() {
    return (
        <div className='box-border border-b flex items-center justify-center py-1 px-[250] gap-6 absolute w-[1176px] h-9 left-1/2 -translate-x-[588px] top-40 border-b-secondary-blue'>
            <Crumb onclick={() => {
                redirect("/personal")
            }} active={true} img="/src / assets / user.svg" name="Personal Info" />
            < Crumb onclick={() => {
                redirect("/professional")
            }} active={false} img="/src/assets/account_circle.svg" name="Professional Info" />
            <Crumb onclick={() => {
                redirect("/social")
            }} active={false} img="/src/assets/globe.svg" name="Social Info" />
            <Crumb onclick={() => {
                redirect("/contact")
            }} active={false} img="/src/assets/at_the _rate.svg" name="Contact" />
        </div >
    )
}
