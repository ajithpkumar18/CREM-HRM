interface Crumb {

    name: string,
    img: string,
    active: boolean,
    onclick: any
}
export default function Crumb({ name = ' ', img = ' ', active, ...props }: Crumb) {
    return (
        <div className={`flex justify-center items-center py-1 px-2 gap-2 h-8 ${active ? "border-b-4" : ""} border-b-blue-600 mb-2`} {...props}>
            <img className={``} src={img} alt="" />
            <div className={`${active ? "text-blue-600" : "text-secondary-blue"} w-auto h-5 font-bold text-[16px] leading-[125%] tracking-tight  `}>{name}</div>
        </div>
    )
}
