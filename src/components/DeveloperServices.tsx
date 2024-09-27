import { Card1 } from "."


function DeveloperServices() {
    return (
        <div className="bg-secondary p-container">
            <h2 className="text-4xl font-semibold text-center text-black/90">خدمات من</h2>
            <p className="text-sm font-medium text-black/80 max-w-prose mx-auto text-center mt-4 leading-6">
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>

            <div className="mt-9 grid grid-cols-3 gap-5">
                <Card1
                    img="/images/service-1.png"
                    title="توسعه بک اند"
                    subTitle="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
                    link="/order-project?type=backend"
                    linkText="سفارش پروژه بک اند"
                />

                <Card1
                    img="/images/service-2.png"
                    title="توسعه فرانت اند"
                    subTitle="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
                    link="/order-project?type=frontend"
                    linkText="سفارش پروژه فرانت اند"
                />

                <Card1
                    img="/images/service-3.png"
                    title="توسعه فول استک"
                    subTitle="کاربردهای متنوع با هدف بهبود ابزارهای کاربردی حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
                    link="/order-project?type=fullstack"
                    linkText="سفارش پروژه فول استک"
                />
            </div>
        </div>
    )
}

export default DeveloperServices