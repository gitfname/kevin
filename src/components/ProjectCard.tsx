
interface Props {
    title?: string;
    img: string;
    tools?: string[];
    text?: string;
    link?: string;
}

function ProjectCard({ title, text, link, tools, img }: Props) {
    return (
        <div className="w-full select-none h-[27rem] shadow-md shadow-primary/10 rounded-xl group relative overflow-hidden">
            <img
                alt={title}
                src={img}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
            />

            <div
                className="absolute top-0 left-0 w-full h-full bg-slate-900/70
            translate-y-full group-hover:translate-y-0 transition-all duration-300
            grid place-items-center"
            >
                <div>
                    <div className="flex items-center justify-center gap-3 gap-y-1 flex-wrap mb-4 px-4">
                        {
                            tools
                                ? tools.map((tool, index) => (
                                    <span key={tool + index} className="text-sm text-white/75 font-medium">{tool}</span>
                                ))
                                : null
                        }
                    </div>

                    {
                        title
                            ? <h2 className="text-lg text-white font-semibold text-center px-4">{title}</h2>
                            : null
                    }

                    {
                        text
                            ? <p className="text-sm text-white/90 font-medium leading-6 px-3">{text}</p>
                            : null
                    }

                    {
                        link
                            ?
                            <a
                                href={link}
                                target="_blank"
                                className="text-sm text-white/70 hover:text-white transition-colors
                            underline text-center block mt-7 w-max mx-auto"
                            >مشاهده</a>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard