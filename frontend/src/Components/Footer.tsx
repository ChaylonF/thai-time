import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-4">
                <Button variant="link" asChild><a href="https://chaylon.co" target="_blank" rel="noopener">Built by Chaylon</a></Button>
            </p>
        </footer>
    )
}