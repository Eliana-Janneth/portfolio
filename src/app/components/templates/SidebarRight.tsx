import { Title } from "../atoms";

export default function SidebarRight() {
    return (
        <div className=" bg-white flex flex-col items-center p-2 gap-2 ">
            <Title>Links</Title>

            <a href="https://github.com/eliana-janneth/" className="bg-pink-900 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--github-loop] text-pink-50 text-4xl" ></span>
            </a>
            <a href="https://www.instagram.com/elianaj_puerta/" className="bg-pink-900 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--linkedin] text-pink-50 text-4xl" ></span>
            </a>
            <a href="https://www.linkedin.com/in/eliana-puerta/" className="bg-pink-900 rounded-full flex p-2 justify-center" >
                <span className="icon-[line-md--instagram] text-pink-50 text-4xl" ></span>
            </a>
        </div>
    )
}