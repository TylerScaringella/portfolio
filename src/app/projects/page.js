import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata = {
    title: "Projects | Tyler Scaringella",
    description: "Tyler Scaringella Previous Projects",
}

const projects = [
    {

    }
]

export default function Projects() {
    return (
        <main>
            <Navbar />
            <p className="font-bold text-2xl text-center text-white">⚠️ Page Under Development ⚠️</p>
            <p className="text-sm text-white">Coming soon with a list of my previous projects.</p>
            <Footer />
        </main>
    )
}
