import { Text, Title } from "../atoms";
import { Card, } from "../molecules";

export default function Portfolio() {
    return (

        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center p-2 ">
                <Title>Portfolio</Title>
                <p className="w-1/2 text-center font-roboto text-base text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>

            <div className="grid grid-cols-3 gap-4">

                <Card title="web development" text="Frontend and Backend" iconName="icon-[iconoir--favourite-window]" size="text-8xl"></Card>
                <Card title="web development" text="Frontend and Backend" iconName="icon-[iconoir--favourite-window]" size="text-8xl"></Card>
                <Card title="web development" text="Frontend and Backend" iconName="icon-[iconoir--favourite-window]" size="text-8xl"></Card>

            </div>
        </main>
    )
}
