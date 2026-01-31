import { Button } from "@/components/ui/button";
import { FaClock } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-4 border-b border-b-slate-200 dark:border-b-slate-700">
            <span className="flex flex-row items-center space-x-2">
                <FaClock />
                <h1 className="font-kanit font-normal text-lg">thaitime.app</h1>
            </span>
            <Button 
                onClick={() => window.open("https://github.com/ChaylonF/thai-time", "_blank")}
                variant="outline"
                >GitHub</Button>
        </header>
    )
}