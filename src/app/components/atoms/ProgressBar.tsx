type ProgressBarProps = {
    value: number
}

export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="w-full bg-pink-300 rounded-lg overflow-hidden">
            <div className="bg-pink-900 h-2" style={{ width: `${props.value}%` }}></div>
        </div>
    )
}

