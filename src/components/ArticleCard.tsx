
import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

interface Props {
    slug: string;
    img: string;
    title: string;
    description: string;
    showShadow?: boolean;
}

function ArticleCard({ description, img, slug, title, showShadow = true }: Props) {
    return (
        <Link
            to={"/articles/" + slug}
            className={"p-6 rounded-xl " + showShadow ? "hover:[box-shadow:1px_3px_20px_rgba(0,0,0,0.1)] transition-all duration-300" : ""}
        >
            <img
                alt={title}
                loading="lazy"
                src={img}
                className="w-full aspect-video object-cover rounded-lg shadow-md shadow-primary/5"
            />

            <div className="mt-4 px-1.5">
                <h2 className="text-base font-semibold text-black/90 line-clamp-2">{title}</h2>

                <p className="text-sm text-black/70 leading-6 mt-4 line-clamp-6">{description}</p>

                <Button mt="xl" color="primaryColor" variant="outline">
                    بیشتر بخوانید
                </Button>
            </div>
        </Link>
    )
}

export default ArticleCard