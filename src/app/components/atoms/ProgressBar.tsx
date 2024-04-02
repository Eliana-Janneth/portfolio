type ProgressBarProps = {
    value: number
}

export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className="w-full rounded-lg overflow-hidden border  border-pink-700 p-0.5 hover:border-pink-500 ">
            <div className="bg-pink-700 h-2 rounded-lg hover:bg-pink-500" style={{ width: `${props.value}%` }}></div>
        </div>
    )
}

