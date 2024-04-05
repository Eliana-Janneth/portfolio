import { Icon } from "../atoms";

export default function Footer() {
    return (
        <footer className="py-4 color-primary text-center justify-center items-center text-xs text-gray-700 w-full flex flex-col gap-1">
            <p>2024 All Rights Reserved</p>
            <div className="flex gap-1 items-center">
                <Icon iconName="icon-[mdi--copyright]" />
                <p>Eliana Puerta</p>
            </div>


        </footer>
    )
}