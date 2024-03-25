import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-20 bottom-0 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center text-gray-400">© 2024 <Link className="hover:underline" href={'/'}>Tyler Scaringella</Link>. All Rights Reserved.</span>
        </footer>
    )
}