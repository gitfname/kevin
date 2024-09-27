
interface Props {
    img: string;
    title: string;
    subTitle: string;
    href: string;
}

function ContactBox({ img, subTitle, title, href }: Props) {
    return (
        <a
            href={href}
            className="w-full p-5 border-2 border-white/15 rounded-xl flex items-center gap-4
            hover:bg-white group transition-colors duration-300"
        >
            <img
                alt={title}
                loading="lazy"
                src={img}
                className="w-9 h-auto"
            />

            <div className="*:transition-colors duration-300">
                <p className="text-sm text-white/65 font-normal group-hover:text-primary">{subTitle}</p>
                <p className="text-lg font-medium text-white mt-1 group-hover:text-primary">{title}</p>
            </div>
        </a>
    )
}

export default ContactBox