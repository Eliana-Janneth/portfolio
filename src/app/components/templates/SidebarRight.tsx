import { Title } from "../atoms";

export default function SidebarRight() {
    return (
        <div className=" bg-teal-100 flex flex-col items-center p-2 gap-2 ">
            <Title>Links</Title>

            <a href="https://github.com/eliana-janneth/" className="bg-teal-400 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--github-loop] text-teal-700 text-4xl" ></span>
            </a>
            <a href="https://www.instagram.com/elianaj_puerta/" className="bg-teal-400 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--linkedin] text-teal-700 text-4xl" ></span>
            </a>
            <a href="https://www.linkedin.com/in/eliana-puerta/" className="bg-teal-400 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--instagram] text-teal-700 text-4xl" ></span>
            </a>
        </div>
    )
}