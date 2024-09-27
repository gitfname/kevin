import { Footer, ProjectCard, TopNavigationBar } from "../components"
import { Button } from "@mantine/core"
import { IoReload } from "react-icons/io5"

function MyProjects() {
    return (
        <div dir="rtl" className="max-w-7xl mx-auto">
            <TopNavigationBar />

            <h2
                className="text-center text-4xl font-semibold mt-12 text-black/90"
            >
                پروژه های من
            </h2>

            <p className="text-base font-normal text-black/75 mt-6 max-w-4xl mx-auto text-center">
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>

            <div className="w-full grid grid-cols-3 mt-16 gap-4 px-container">
                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-4.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
                />

                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-12.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
                />

                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-10.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
                />

                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-7.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
                />

                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-6.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
                />

                <ProjectCard
                    title={"سایت فروشگاهی برای شرکت فلان بهمان"}
                    link={"https://google.com"}
                    img={"/images/project-5.png"}
                    tools={["HMTL", "CSS", "JS", "ReactJs"]}
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

export default MyProjects