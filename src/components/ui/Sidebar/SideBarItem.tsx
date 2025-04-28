import { useEffect, useState } from "react"
import { useLocation } from "react-router"


export const SidebarItem = ({ activeicon, inactiveicon, text }: { activeicon?: string, inactiveicon?: string, text?: string }) => {
    const [active, setActive] = useState(false)
    const current = useLocation();
    const path = current.pathname.toString().toLowerCase();
    // console.log(typeof (path))
    // console.log(path.length)
    // console.log(path.slice(1, path.length) == text?.toLowerCase())
    // console.log(text)
    // console.log(typeof (text))
    useEffect(() => {
        if (path.slice(1, path.length) == text?.toLowerCase()) setActive(true)
    }, [])

    return (
        <div className={`flex w-full ${active ? "border-l-2 border-purple-primary-500" : ""}  px-5 py-2 mb-4 gap-4 hover:bg-gray-200 text-gray-500 cursor-pointer`}>
            {active ? <span>
                <img src={activeicon} alt="" />
            </span> :
                <span>
                    <img src={inactiveicon} alt="" />
                </span>}
            <span className={`text-md ${active ? "text-purple-primary-500" : ""}`}>
                {text}
            </span>
        </div>
    )
}