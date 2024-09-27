
import { Carousel as MantineCarousel } from "@mantine/carousel"
import { ProjectCard } from ".";

interface Props {
    title?: string;
    subTitle?: string;
    slides: [string, { title?: string; tools?: string[]; link?: string; text?: string }][];
}

function Carousel({ slides, subTitle, title }: Props) {
    return (
        <div>
            {/* carousel header */}
            <div className="flex items-center justify-between mb-7">
                {/* right section */}
                <div>
                    {
                        title ?
                            <h2 className="text-2xl font-semibold">
                                {title}
                            </h2> : null
                    }

                    {
                        subTitle ?
                            <p className="text-sm font-medium text-black/80 mt-3 max-w-prose">
                                {subTitle}
                            </p>
                            : null
                    }
                </div>


                {/* buttons section */}
                <div>

                </div>
            </div>

            {/* carousel */}
            <MantineCarousel
                slideSize="33%"
                slideGap="xs"
                align="start"
                withIndicators
                classNames={{
                    indicator: "bg-primary !rounded-full w-1.5 h-1.5 scale-75 data-[active]:w-5 data-[active]:scale-100 transition-all duration-300",
                    indicators: "translate-y-10 gap-1"
                }}
            >
                {
                    slides.map(slide => (
                        <MantineCarousel.Slide key={slide[0]} p="xs">
                            <ProjectCard
                                title={slide[1].title}
                                text={slide[1].text}
                                link={slide[1].link}
                                img={slide[0]}
                                tools={slide[1].tools}
                            />
                        </MantineCarousel.Slide>
                    ))
                }
            </MantineCarousel>
        </div >
    )
}

export default Carousel