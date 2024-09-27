
import { BsQuote } from "react-icons/bs"

interface Props {
    text: string;
    author?: string;
}

function Quote({ text, author }: Props) {
    return (
        <div className="w-full rounded-xl p-5 bg-primary">
            <BsQuote className="w-9 h-9 text-transparent stroke-white" strokeWidth={0.7} />

            <p className="text-base font-normal text-white leading-7 mt-5">
                {text}
            </p>

            <p className="text-sm font-semibold text-white/95 mt-6">
                {author}
            </p>
        </div>
    )
}

export default Quote