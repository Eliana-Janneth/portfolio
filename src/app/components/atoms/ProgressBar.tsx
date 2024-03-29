type ProgressBarProps = {
    value: number
}

export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="w-full bg-teal-300 rounded-lg overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: `${props.value}%` }}></div>
        </div>
    )
}

