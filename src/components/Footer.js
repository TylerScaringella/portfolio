import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-20 bottom-0 md:flex md:items-center md:justify-between">
        {/* <footer className="flex flex-row items-start px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative fixed bottom-0 mt-10 static"> */}
            <span className="text-sm sm:text-center text-gray-400">© 2024 <Link className="hover:underline" href={'/'}>Tyler Scaringella</Link>. All Rights Reserved.</span>
        </footer>
        // <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600">
        //     <span className="text-sm sm:text-center text-gray-400">© 2024 <Link className="hover:underline" href={'/'}>Tyler Scaringella</Link>. All Rights Reserved.</span>
        // </footer>
    )
}