
interface Props {
    img: string;
    title: string;
    subTitle: string;
}

function Statistic({ img, subTitle, title }: Props) {
    return (
        <div className="w-full">
            <img
                alt={title}
                loading="lazy"
                src={img}
                className="w-12 h-auto block mx-auto"
            />

            <h2 className="text-2xl font-semibold text-center mt-4">{title}</h2>

            <p className="text-sm font-normal text-black/75 text-center mt-1.5">{subTitle}</p>
        </div>
    )
}

export default Statistic