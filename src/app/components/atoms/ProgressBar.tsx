type ProgressBarProps = {
    value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div className="w-full rounded-lg overflow-hidden border  border-pink-300 p-0.5 hover:border-pink-400 ">
            <div className="color-secondary h-2 rounded-lg " style={{ width: `${value}%` }}></div>
        </div>
    )
}

