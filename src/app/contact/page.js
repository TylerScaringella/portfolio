import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata = {
    title: "Contact | Tyler Scaringella",
    description: "Tyler Scaringella Contact Methods",
}

const contacts = [
    { href: 'www.linkedin.com/in/tyler-scaringella', text: 'LinkedIn - linkedin.com/in/tyler-scaringella' },
    { href: 'https://github.com.com/TylerScaringella', text: 'GitHub - TylerScaringella' },
    { href: 'https://tylerscaringella.com', text: 'Website - tylerscaringella.com' },
    { href: 'mailto:tyler.scaringella@duke.edu', text: 'Email - tyler.scaringella@duke.edu' }
]

export default function Contact() {
    return (
        <main>
            <Navbar />
            <p className="mb-1 font-bold text-lg">🔗 Tyler Scaringella</p>
            { contacts.map(contact => <p key={contact.href} className="hover:underline"><Link href={contact.href}>{ contact.text }</Link></p>)}

            <Footer />
        </main>
    )
}