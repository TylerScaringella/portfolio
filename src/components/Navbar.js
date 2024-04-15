import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mb-3">
            <ul className="flex flex-row space-x-0 pr-10">
                <li className="inline-flex items-center gap-x-3 pr-3 text-sm font-medium text-white">
                    <Link href={'/'}>home</Link>
                </li>
                <li className="inline-flex items-center gap-x-3 p-3 px-4 text-sm font-medium text-white">
                    <Link href={'/projects'}>projects</Link>
                </li>
                <li className="inline-flex items-center gap-x-3 p-3 px-4 text-sm font-medium text-white">
                    <Link href={'/contact'}>contact</Link>
                </li>
            </ul>
      </nav>
    )
}
