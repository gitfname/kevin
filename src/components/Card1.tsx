
import { Link } from "react-router-dom"

interface Props {
    img: string;
    title: string;
    subTitle: string;
    link: string;
    linkText: string;
}

function Card1({ img, link, linkText, subTitle, title }: Props) {
    return (
        <div className="w-full h-[27rem] bg-white p-5 rounded-xl shadow-md shadow-black/5">
            <img
                alt=""
                loading="lazy"
                src={img}
                className="w-full aspect-video rounded-lg"
            />

            <div className="mt-2 px-1">
                <h2 className="text-xl font-medium">{title}</h2>

                <p className="mt-3.5 text-sm font-medium leading-6 text-black/80">{subTitle}</p>

                <Link
                    to={link}
                    className="text-primary text-sm underline block mt-8"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    )
}

export default Card1