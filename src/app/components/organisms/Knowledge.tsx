import { Text, Title } from "../atoms";
import { Card, } from "../molecules";

export default function Knowledge() {
    return (

        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center p-2 ">
                <Title size="text-3xl">My Knowledge</Title>
                <p className="w-1/2 text-center font-roboto text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                <Card title="Web development" text="Frontend and Backend Development." iconName="icon-[line-md--cloud-tags-loop]" size="text-8xl"></Card>
                <Card title="Principles and Patterns" text="Design patterns, component-based architecture, UI/UX patterns, SOLID, version control." iconName="icon-[line-md--cog-loop]" size="text-8xl"></Card>
                <Card title="Databases" text="SQL Server, MySQL, data modeling, database standardization, triggers, Amazon Redshift." iconName="icon-[line-md--cloud-print-loop]" size="text-8xl"></Card>

            </div>
        </main>
    )
}

