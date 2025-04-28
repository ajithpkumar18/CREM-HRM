import InputI from "../ui/Common/InputI"
export default function ActiveInputs({ name = '', type = '', placeholder = '', ...props }) {
    console.log({ ...props })
    return (
        <div className="w-72 h-24 flex gap-7 flex-col">
            <label className="font-bold text-[18px] leading-[140%] tracking-[0.25px]" htmlFor={`${name}`}>{`${name}`}</label>
            <InputI type={`${type}`} classname="border-2 border-custom-grey-200 py-3 px-6 rounded-xl w-72 h-14 outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value)
            }} placeholder={`${placeholder}`} />
        </div>
    )
}
