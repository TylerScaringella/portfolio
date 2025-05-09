import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const education = [
  {
    school: 'Duke University',
    start: 'August 2024',
    end: 'May 2028',
    degree: 'GPA: 3.86/4.00 | Bachelor of Science in Computer Science; Minor: Statistical Science; Concentrations in AI and Machine Learning, Software Engineering & Design.'
  },
  {
    school: 'St. Mark\'s School',
    start: 'September 2020',
    end: 'June 2024',
    degree: 'High School Diploma. Graduated with distinction.'
  },
]

const experience = [
  {
    place: 'Xochi Tech',
    timeline: [
      {
        start: 'January 2022',
        end: 'May 2025',
        title: 'Lead Java Developer',
        description: 'Developing applications utilizing different stacks, but primarily in Java. Projects ranging from internal utility tools to user add-on cosmetics. Developed backend infrastructure to support 1500 concurrent users in a production environment.'
      },
      {
        start: 'June 2021',
        end: 'January 2022',
        title: 'Java Developer',
        description: ''
      }
    ]
  },
  {
    place: 'WAVLab @ LTI, Carnegie Mellon University',
    timeline: [
      {
        start: 'October 2023',
        end: 'April 2024',
        title: 'Outside Collaborator',
        description: 'Conducting research under the mentorship of Dr. Samuele Cornell on the application of artificial intelligence and machine learning to mitigate hoax swatting crime calls.'
      },
    ]
  },
  {
    place: 'St. Mark\'s School',
    timeline: [
      {
        start: 'July 2023',
        end: 'June 2024',
        title: 'STEM Research Fellow',
        description: `Conducting research as an outside collaborator at the WAVLab within the Language Technologies Institute at Carnegie Mellon University. 

        Research Question: How can the number of victims who experience a swatting crime be reduced through the development and implementation of artificial intelligence?
        
        Identifying trends among hoax and non hoax 911 calls to utilize artificial intelligence that will listen to an ongoing 911 call to determine the legitamacy of the report to give emergency responders insight ahead of time of a potential swatting incident.
        
        A “swatting” call is an emergency call made under false pretenses to incite an emergency response. It is often used as a scare tactic, as well as a form of terrorism.`
      },
      {
        start: 'September 2022',
        end: 'June 2024',
        title: 'Full Stack Developer',
        description: 'Holding a leading role into the development of St. Mark\'s propietary mobile application, "Lion Link." An application with the purpose of taking St. Mark\'s information ranging from student class schedules, sports schedules, club events and information, etc. to provide St. Mark\'s students and faculty with a platform that has all of their needs in one place. Limiting the number of unncessary emails received by the school, making information more successful, simultaneously improving the quality of life for the community.'
      },
    ]
  }
]

const achievements = [
  {
    title: 'Edward A. Taft \'69 Computer Science Prize',
    awarded: 'June 2023',
    awardedBy: 'St. Mark\'s School',
    description: 'Awarded to that student who by interest, curiosity, original thought, and practical application of ideas has acquired a deeper understanding of the field of computer science.'
  },
  {
    title: 'WRSEF Honorable Mention',
    awarded: 'March 2024',
    awardedBy: 'Worcester Regional Science and Engineering Fair',
    description: 'Qualified for the Massachusetts State Science and Engineering Fair'
  },
  {
    title: 'United States Air Force Certificate of Achievement',
    awarded: 'March 2024',
    awardedBy: 'Worcester Regional Science and Engineering Fair',
    description: 'Outstanding Science or Engineering Fair Project'
  }
]

const TimelineItem = ({ item }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
      <h3 className="text-lg font-semibold text-white">{ item.school || item.title }</h3>
      <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.start} - {item.end}</time>
      <p className="text-base font-normal text-gray-400">{ item.degree || item.description }</p>
    </li>
  )
}

const Achievement = ({ achievement }) => {
  return (
    <div className="mt-5">
      <h1 className="text-lg font-regular text-white">{ achievement.title }</h1>
      <span className="text-xs font-thin text-white">Received { achievement.awarded } by { achievement.awardedBy }</span>
      <p className="text-sm text-white">{ achievement.description }</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

      {/* navigation */}
      <Navbar />

      {/* introduction bit */}
      <section>
        <h1 className="text-3xl text-white font-bold">
        Tyler Scaringella
        </h1>
        <h5 className="text-sm font-light text-gray-300">📍 Boston, MA | Durham, NC</h5>
        <h5 className="text-sm font-light text-gray-300 mb-4">🎓 Duke University '28</h5>

        <p className="text-sm text-white">I'm a rising second-year college student with a passion for computer science who is fasincated by interdiscinplinary topics. I am highly motivated to apply programming to create real world solutions.</p>

      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Education
        </h2>
        
        <ol className="relative border-s border-gray-700">
          { education.map((school, index) => <TimelineItem key={index} item={school} />)}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Experience
        </h2>

        {experience.map((exp, index) => { 
          return (
            <div key={index}>
              <h3 className="text-lg font-semibold mt-2">{ exp.place }</h3>
              <ol className="relative border-s border-gray-700">
                { exp.timeline.map((item, index) => <TimelineItem key={index} item={item} />)}
              </ol>
            </div>
          )
        })}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Skills
        </h2>
        <p className="text-white">My skills are listed on my LinkedIn profile <Link className="hover:underline text-blue-500" href={'https://www.linkedin.com/in/tyler-scaringella/'}>here</Link>.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Achievements
        </h2>
        { achievements.map((achievement, index) => <Achievement key={index} achievement={achievement} />)}
        <p className="mt-3 text-sm text-gray-400">More of my achievements are listed on my LinkedIn profile <Link className="hover:underline text-blue-500" href={'https://www.linkedin.com/in/tyler-scaringella'}>here</Link>.</p>
      </section>

      <Footer />
    </main>

  )
}
