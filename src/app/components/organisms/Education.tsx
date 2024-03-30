import { HorizontalLine, Text, Title } from "../atoms";
import { EducationCard } from "../molecules";

export default function Education() {
    return (

        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center p-2 ">
                <Title>My Education</Title>
                <p className="w-1/2 text-center font-roboto text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>

            <div className="flex flex-col bg-white">
                <EducationCard title="University of Antioquia" text="Student" initialDate="June 2019" finalDate="Present" typeEducation="Systems Engineering Degree" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium eius sapiente tempore commodi dolor omnis, perferendis itaque fugit debitis nesciunt nisi est eaque. Deserunt dolores culpa sint temporibus nostrum?" />
                <HorizontalLine />
                <EducationCard title="University of Antioquia" text="Student" initialDate="June 2019" finalDate="Present" typeEducation="Systems Engineering Degree" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel accusantium eius sapiente tempore commodi dolor omnis, perferendis itaque fugit debitis nesciunt nisi est eaque. Deserunt dolores culpa sint temporibus nostrum?" />
            </div>
        </main>
    )
}

