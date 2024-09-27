import { Carousel, DeveloperServices, Footer, IntroCard, LetsContactUs, OurCustomers, Statistic, TopNavigationBar } from "../components"

function Home() {
    return (
        <div dir="rtl">
            <TopNavigationBar />

            <div className="px-container bg-gradient-to-b from-white to-secondary">
                <IntroCard />
            </div>

            <div className="px-container py-12 pt-20 bg-secondary">
                <OurCustomers />
            </div>

            <div className="mt-20 px-container">
                <Carousel
                    title="نمونه کار های من"
                    subTitle="چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
                    slides={[
                        [
                            "https://atiyehahmadi.ir/kevin-html/image/l-1/project-1.png",
                            {
                                title: "سایت فروشگاهی برای شرکت فلان بهمان",
                                link: "https://google.com",
                                tools: ["HMTL", "CSS", "JS", "ReactJs"]
                            }
                        ],
                        [
                            "https://atiyehahmadi.ir/kevin-html/image/l-1/project-2.png",
                            {
                                title: "سایت فروشگاهی برای شرکت فلان بهمان",
                                link: "https://google.com",
                                tools: ["HMTL", "CSS", "JS", "ReactJs"]
                            }
                        ],
                        [
                            "https://atiyehahmadi.ir/kevin-html/image/l-1/project-3.png",
                            {
                                title: "سایت فروشگاهی برای شرکت فلان بهمان",
                                link: "https://google.com",
                                tools: ["HMTL", "CSS", "JS", "ReactJs"]
                            }
                        ],
                        [
                            "https://atiyehahmadi.ir/kevin-html/image/l-1/project-1.png",
                            {
                                title: "سایت فروشگاهی برای شرکت فلان بهمان",
                                link: "https://google.com",
                                tools: ["HMTL", "CSS", "JS", "ReactJs"]
                            }
                        ],
                        [
                            "https://atiyehahmadi.ir/kevin-html/image/l-1/project-2.png",
                            {
                                title: "سایت فروشگاهی برای شرکت فلان بهمان",
                                link: "https://google.com",
                                tools: ["HMTL", "CSS", "JS", "ReactJs"]
                            }
                        ]
                    ]}
                />
            </div>

            <div className="mt-28">
                <DeveloperServices />
            </div>

            <div className="mt-28 grid grid-cols-4 gap-5 p-container divide-x divide-x-reverse divide-gray-200 pb-14 border-b border-b-gray-200">
                <Statistic
                    img="/svg/layers.svg"
                    title="+12"
                    subTitle="سال تجربه"
                />

                <Statistic
                    img="/svg/bag.svg"
                    title="+325"
                    subTitle="پروژه تکمیل شده"
                />

                <Statistic
                    img="/svg/smiling-face.svg"
                    title="+279"
                    subTitle="کارفرمای خوشحال"
                />

                <Statistic
                    img="/svg/coffee.svg"
                    title="+1652"
                    subTitle="ساعت کار"
                />
            </div>


            <div className="p-container mt-16">
                <Carousel
                    title="نظرات مشتریان"
                    subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                    slides={[
                        [
                            "/images/1.jpg",
                            {
                                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                            }
                        ],
                        [
                            "/images/2.jpg",
                            {
                                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                            }
                        ],
                        [
                            "/images/3.jpg",
                            {
                                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                            }
                        ],
                        [
                            "/images/4.jpg",
                            {
                                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
                            }
                        ]
                    ]}
                />
            </div>

            <div className="mt-20">
                <LetsContactUs />
            </div>

            <div className="mt-20">
                <Footer />
            </div>

        </div>
    )
}

export default Home