import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Projects | Tyler Scaringella",
    description: "Tyler Scaringella Previous Projects",
}

const projects = [
    {
        title: "AI Patient Scheduler",
        description: "Developed an AI-driven patient scheduling platform in Python using NLP, rule-based logic, and SMS APIs for a national autism clinic. Expedited access to care by optimizing appointment matching, accounting for patient location and provider availability. Deployed a production-ready AWS MVP with automated intake workflows and database, achieving first live registration within 24 hours.",
        thumbnail: null,
        technologies: ["LangGraph", "LangChain", "Flask", "AWS"],
        links: {},
        date: "2025",
        important: true
    },
    {
        title: "Event Management Platform",
        description: "Built a mobile/web event management platform with ticketing, Apple Wallet integration, and an intuitive UI to boost student engagement. Designed for the Duke Community.",
        thumbnail: null,
        technologies: ["React Native", "PostgreSQL", "Prisma", "Express.js"],
        links: {},
        date: "2024 - 2025"
    },
    {
        title: "Swatting Hoax Call Detection",
        description: "Designed an AI pipeline and custom ML models to detect swatting incidents from 911 audio using NLP and acoustic feature extraction. Built a 500+ sample dataset and trained a multi-model fusion system, achieving 98% classification accuracy. Researched NLP-based AI solutions for detecting swatting incidents using Human-Centered Design principles. Published findings and received Honorable Mention at the Worcester Regional Science & Engineering Fair.",
        thumbnail: null,
        technologies: ["PyTorch", "Hugging Face", "Support Vector Machines"],
        links: {},
        date: "2023 - 2024",
        important: true
    },
    {
        title: "Lion Link",
        description: "Developed a schoolwide academic portal for 450+ users and led a 4 person team on architecture and code reviews. Implemented full stack using Nuxt.js, Node.js, Prisma, and MySQL, and designed an intuitive UI to enhance user experience.",
        thumbnail: null,
        technologies: ["Nuxt.js", "Node.js", "Prisma", "MySQL"],
        links: {
            blog: "https://www.thestmarker.com/news-1/2024/6/8/lion-link"
        },
        date: "2022 - 2024"
    },
    {
        title: "Voice Chat",
        description: "Built a WebRTC/Redis real-time voice system for 500+ concurrent Minecraft players, improving in-game communication reliability.",
        thumbnail: null,
        technologies: ["WebRTC", "Redis"],
        links: {},
        date: "2021 - 2022"
    }
]

const ProjectCard = ({ project, isImportant = false }) => {
    return (
        <div className={`bg-gray-900 border rounded-lg overflow-hidden hover:border-gray-600 transition-colors duration-200 ${
            isImportant 
                ? "border-blue-500/50 shadow-lg shadow-blue-500/10" 
                : "border-gray-800 hover:border-gray-700"
        }`}>
            {project.thumbnail && (
                <div className="relative w-full h-48 bg-gray-800">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                {project.date && (
                    <p className="text-xs text-gray-500 mb-3">{project.date}</p>
                )}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {project.links && (project.links.github || project.links.demo || project.links.blog) && (
                    <div className="flex gap-3 mt-4">
                        {project.links.github && (
                            <Link 
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:text-blue-400 hover:underline"
                            >
                                GitHub →
                            </Link>
                        )}
                        {project.links.demo && (
                            <Link 
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:text-blue-400 hover:underline"
                            >
                                Live Demo →
                            </Link>
                        )}
                        {project.links.blog && (
                            <Link 
                                href={project.links.blog}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:text-blue-400 hover:underline"
                            >
                                Article →
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            
            <section className="mt-4">
                <h1 className="text-3xl text-white font-bold mb-2">
                    Projects
                </h1>
                <p className="text-sm text-gray-400 mb-8">
                    A collection of my work and side projects.
                </p>
            </section>

            {projects.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-400">No projects to display yet. Add projects to the projects array!</p>
                </div>
            ) : (
                <>
                    {/* Important Projects */}
                    {projects.filter(p => p.important).length > 0 && (
                        <div className="mb-10">
                            <div className="space-y-6">
                                {projects
                                    .filter(project => project.important)
                                    .map((project, index) => (
                                        <ProjectCard key={`important-${index}`} project={project} isImportant={true} />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Projects */}
                    {projects.filter(p => !p.important).length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {projects
                                .filter(project => !project.important)
                                .map((project, index) => (
                                    <ProjectCard key={`regular-${index}`} project={project} isImportant={false} />
                                ))}
                        </div>
                    )}
                </>
            )}

            <Footer />
        </main>
    )
}
