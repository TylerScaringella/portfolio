import Link from "next/link";
import Navbar from "@/components/Navbar";

const education = [
  {
    school: 'Duke University',
    start: 'August 2024',
    end: 'May 2028',
    degree: 'Bachelor of Science in Economics',
    details: ''
  },
  {
    school: 'Duke University',
    start: 'August 2024',
    end: 'May 2028',
    degree: 'Bachelor of Science in Computer Science',
    details: ''
  },
  {
    school: 'St. Mark\'s School',
    start: 'September 2020',
    end: 'June 2024',
    degree: 'High School Diploma',
    details: ''
  },
]

const experience = [
  {
    place: 'Xochi Tech',
    timeline: [
      {
        start: 'January 2022',
        end: 'Present',
        title: 'Lead Java Developer',
        description: 'Developing applications utilizing different stacks, but primarily in Java. Projects ranging from internal utility tools to user add-on cosmetics. Developed cosmetic backend infrastructure to support 800 concurrent users in a production environment.'
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
        end: 'Present',
        title: 'Outside Collaborator',
        description: 'Conducting research under the mentorship of Dr. Samuele Cornell on the application of artificial and machine learning to mitigate hoax swatting crime calls.'
      },
    ]
  },
  {
    place: 'St. Mark\'s School',
    timeline: [
      {
        start: 'July 2023',
        end: 'Present',
        title: 'STEM Research Fellow',
        description: `Conducting research as an outside collaborator at the WAVLab within the Language Technologies Institute at Carnegie Mellon University. 

        Research Question: How can the number of victims who experience a swatting crime be reduced through the development and implementation of artificial intelligence?
        
        Identifying trends among hoax and non hoax 911 calls to utilize artificial intelligence that will listen to an ongoing 911 call to determine the legitamacy of the report to give emergency responders insight ahead of time of a potential swatting incident.
        
        A “swatting” call is an emergency call made under false pretenses to incite an emergency response. It is often used as a scare tactic, as well as a form of terrorism.`
      },
      {
        start: 'September 2022',
        end: 'Present',
        title: 'Full Stack Developer',
        description: 'Holding a leading role into the development of St. Mark\'s propietary mobile application, "Lion Link." An application with the purpose of taking St. Mark\'s information ranging from student class schedules, sports schedules, club events and information, etc. to provide St. Mark\'s students and faculty with a platform that has all of their needs in one place. Limiting the number of unncessary emails received by the school, making information more successful, simultaneously improving the quality of life for the community.'
      },
    ]
  }
]

const achievements = [
  {

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

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

      {/* navigation */}
      <Navbar />

      {/* introduction bit */}
      <section>
        <h1 className="text-3xl text-white font-bold mb-4">
        Tyler Scaringella
        <h5 className="text-sm font-light text-gray-300">📍 Boston, MA | Durham, NC</h5>
        <h5 className="text-sm font-light text-gray-300">🎓 Duke University '28</h5>
        </h1>

        <p className="text-sm">I'm an incoming first-year college student with a passion for computer science who is fasincated by interdiscinplinary fields. I am highly motivated to apply programming to create real world solutions.</p>

      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Education

          <ol className="relative border-s border-gray-700">
            { education.map(school => <TimelineItem key={school.degree} item={school} />)}
          </ol>

        </h2>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Experience
          
          {experience.map(exp => { 
            return (
              <div>
                <h3 className="text-lg font-semibold mt-2">{ exp.place }</h3>
                <ol className="relative border-s border-gray-700">
                  { exp.timeline.map(item => <TimelineItem key={item.title} item={item} />)}
                </ol>
              </div>
            )
          })}
        </h2>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Skills
        </h2>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl text-white font-bold">
          Achievements
        </h2>
      </section>
    </main>
  )
}
