export default function LabelI({ classname = ' ', placeholder = ' ', ...props }) {
    return (
        <input {...props} className={`  ${classname ? classname : "border-none outline-none text-custom-grey-400 w-full h-[26px]  order-1"}`} placeholder={placeholder} />
    )
}
