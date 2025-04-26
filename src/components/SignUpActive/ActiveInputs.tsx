import InputI from "../ui/InputI"
export default function ActiveInputs({ name = '', type = '', placeholder = '', ...props }) {
    return (
        <div className="w-72 h-24 flex gap-7 flex-col">
            <label className="font-bold text-[18px] leading-[140%] tracking-[0.25px]" htmlFor={`${name}`}>{`${name}`}</label>
            <InputI type={`${type}`} classname="border-2 border-custom-grey-200 py-2 px-4 rounded-lg min-w-60 w-64 h-12 
       sm:min-w-72 sm:w-80 sm:h-14 
       md:min-w-80 md:w-96 md:h-16" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                }} placeholder={`${placeholder}`} />
        </div>
    )
}

// border-2 border-custom-grey-200 py-3 px-6 rounded-xl min-w-72 w-80 h-14