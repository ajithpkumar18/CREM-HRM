interface Card {
    source: string, count: string, text: string, className?: string
}
export default function OverviewCard({ source, count, text, className }: Card) {
    return (
        <div className={`flex flex-col gap-1  p-2 rounded-lg shadow-sm border border-gray-200 ${className}`}>
            <div className=" w-10 h-10 flex justify-center items-center">
                <img className="h-5 w-5" src={source} alt="" />
            </div>
            <p className="font-semibold text-[25px] leading-[25px]">{count}</p>
            <p className="font-normal text-[14px] leading-[22px]">{text}</p>
        </div>
    )
}
