import { Footer, TopNavigationBar } from "../components"
import ArticleCard from "../components/ArticleCard"
import { Button } from "@mantine/core"
import { IoReload } from "react-icons/io5"

function Articles() {
    return (
        <div dir="rtl" className="max-w-7xl mx-auto">
            <TopNavigationBar />

            <h2
                className="text-center text-4xl font-semibold mt-12 text-black/90"
            >
                مقاله و وبلاگ
            </h2>

            <p className="text-base font-normal text-black/75 mt-6 max-w-4xl mx-auto text-center">
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>

            <div className="w-full grid grid-cols-3 mt-16 gap-4 px-container">
                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-1.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-2.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-3.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-4.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-5.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-6.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-7.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-8.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-9.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-11.png"
                    slug="an-article-about-something-important"
                />

                <ArticleCard
                    title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم م از صنعت چاپ است"
                    description="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد."
                    img="https://atiyehahmadi.ir/kevin-html/image/innerpage/blog-12.png"
                    slug="an-article-about-something-important"
                />
            </div>

            <Button variant="light" color="primaryColor" display="block" mx="auto" mt="xl">
                بارگذاری بیشتر
                &nbsp;
                <IoReload className="w-3.5 h-3.5" />
            </Button>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}

export default Articles