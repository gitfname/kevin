
interface Props {
    title: string;
    img: string;
}

function User({ img, title }: Props) {
    return (
        <div className="flex items-center gap-x-2">
            <img
                alt=""
                loading="lazy"
                src={img}
                className="w-11 aspect-square object-center rounded-full"
            />

            <p className="text-lg font-semibold">{title}</p>
        </div>
    )
}

export default User