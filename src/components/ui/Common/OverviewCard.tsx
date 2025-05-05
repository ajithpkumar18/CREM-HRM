interface Card {
    source: string, count: string, text: string, className?: string
}
export default function OverviewCard({ source, count, text, className }: Card) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className="bg-gray-100 w-10 h-10 flex justify-center items-center rounded-md">
                <img className="h-5 w-5" src={source} alt="" />
            </div>
            <p className="font-semibold text-[30px] leading-[40px]">{count}</p>
            <p className="font-light text-[13px] leading-[22px]">{text}</p>
        </div>
    )
}
