import { Text, Title } from "../atoms";
import { Card, } from "../molecules";

export default function Knowledge() {
    return (

        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center p-2 gap-2 ">
                <Title size="text-4xl">My Knowledge</Title>
                <Text classText="w-1/2 text-center text-black">I have knowledge and experience in the following approaches:</Text>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                <Card title="Web development" text="Frontend and Backend Development." iconName="icon-[line-md--cloud-tags-loop]" size="text-8xl"></Card>
                <Card title="Principles and Patterns" text="Design patterns, component-based architecture, UI/UX patterns, SOLID, version control." iconName="icon-[line-md--cog-loop]" size="text-8xl"></Card>
                <Card title="Databases" text="SQL Server, MySQL, data modeling, database standardization, triggers, Amazon Redshift." iconName="icon-[line-md--cloud-print-loop]" size="text-8xl"></Card>

            </div>
        </main>
    )
}

