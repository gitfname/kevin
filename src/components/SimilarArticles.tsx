
import { Carousel } from "@mantine/carousel"
import ArticleCard from "./ArticleCard";

interface Props {
    title?: string;
    subTitle?: string;
}

function SimilarArticles({ subTitle, title }: Props) {
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
            <Carousel
                slideSize="30%"
                slideGap="xl"
                align="start"
                withIndicators
                className="select-none"
                classNames={{
                    indicator: "bg-primary !rounded-full w-1.5 h-1.5 scale-75 data-[active]:w-5 data-[active]:scale-100 transition-all duration-300",
                    indicators: "translate-y-10 gap-1"
                }}
            >
                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-1.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-2.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-3.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-4.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-5.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <ArticleCard
                        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                        description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                        img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-6.png"
                        slug="an-article-about-something-important"
                        showShadow={false}
                    />
                </Carousel.Slide>
            </Carousel>
        </div >
    )
}

export default SimilarArticles