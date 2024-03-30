import { HorizontalLine, Text, Title } from "../atoms";
import { EducationCard } from "../molecules";

export default function Education() {
    return (

        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center p-2 ">
                <Title size="text-3xl">My Education</Title>
                <p className="w-1/2 text-center font-roboto text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>

            <div className="flex flex-col bg-white">
                <EducationCard title="University of Antioquia" text="Student" initialDate="June 2019" finalDate="Present" typeEducation="Systems Engineering Degree" description="The Systems Engineering program focuses on researching and applying knowledge to develop innovative solutions in physical and abstract systems. Students acquire skills in areas such as software development and systems management, preparing them to face today's technological challenges." />
                <HorizontalLine />
                <EducationCard title="SENA" text="Student" initialDate="April 2016" finalDate="Nov 2018" typeEducation="Technology in Analysis and Development Information systems" description="As a graduate, I execute in an integral way the process of generating information systems, including analysis, design, implementation, testing and adjustments. My goal is to systematize and automate processes, contributing to the success and efficiency of business operations." />
            </div>
        </main>
    )
}

