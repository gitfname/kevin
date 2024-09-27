
import { Link } from "react-router-dom"
import { Button } from "@mantine/core"
import TopNavigationBarDropDownLink from "./TopNavigationBarDropDownLink"
import User from "./User"

function TopNavigationBar() {

    return (
        <nav className="w-full py-8 border-b border-b-gray-200">
            <div className="flex items-center justify-between px-container">
                {/* right section */}
                <div>
                    <User
                        img="https://atiyehahmadi.ir/kevin-html/image/l-1/me.png"
                        title="جمال مسعودی"
                    />
                </div>

                {/* left section */}
                <div className="flex items-center gap-x-10">
                    <div className="flex items-center gap-x-7">
                        <TopNavigationBarDropDownLink
                            text="لندینگ"
                            items={[
                                { text: "توسعه دهنده", link: "/landings/developer" },
                                { text: "طراح رابط کاربری", link: "/landings/designer" },
                                { text: "فریلنسر", link: "/landings/freelancer" },
                                { text: "عکاس", link: "/landings/photographer" },
                                { text: "دکتر", link: "/landings/doctor" },
                                { text: "وکیل", link: "/landings/lawyer" }
                            ]}
                        />

                        <TopNavigationBarDropDownLink
                            text="صفحات"
                            items={[
                                { text: "خانه", link: "/" },
                                { text: "مقالات", link: "/articles" },
                                { text: "تماس با ما", link: "/contact-us" },
                                { text: "درباره ما", link: "/about-us" },
                                { text: "پروژه های ما", link: "/projects" },
                                { text: "خدمات ما", link: "/services" }
                            ]}
                        />

                        <TopNavigationBarDropDownLink
                            text="خدمات ما"
                            items={[
                                { text: "خدمات ما", link: "/services" },
                                { text: "جزییات خدمات", link: "/services/123" }
                            ]}
                        />

                        <TopNavigationBarDropDownLink
                            text="پروژه ها"
                            items={[
                                { text: "پروژه های من", link: "/projects" },
                                { text: "جزییات پروژه", link: "/projects/123" }
                            ]}
                        />

                        <Link to="/" className="text-sm">ارتباط با ما</Link>
                    </div>

                    <Button color="primaryColor">
                        ارتباط با ما
                    </Button>

                </div>
            </div>
        </nav>
    )
}

export default TopNavigationBar