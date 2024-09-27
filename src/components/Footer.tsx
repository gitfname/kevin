import { User } from "."
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="w-full p-container py-16">
            <div className="grid grid-cols-[1.2fr_2fr] gap-6">
                {/* right section */}
                <div>
                    <User
                        img="https://atiyehahmadi.ir/kevin-html/image/l-1/me.png"
                        title="جمال مسعودی"
                    />

                    <p className="text-sm text-black/80 mt-5 max-w-xs">
                        یک آدرس فرضی در شهر
                        خیابان فرضی و پلاک 125 در اینجا قرار دارد
                    </p>
                </div>

                {/* left section */}
                <div className="grid grid-cols-3">
                    <div>
                        <div className="w-full max-w-[10rem] mx-auto space-y-4">
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">خانه</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">درباره من</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">رزومه</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">مقالات</Link>
                        </div>
                    </div>

                    <div>
                        <div className="w-full max-w-[10rem] mx-auto space-y-4">
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">خدمات</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">نظرات</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">سفارش پروژه</Link>
                        </div>
                    </div>

                    <div>
                        <div className="w-full max-w-[10rem] mx-auto space-y-4">
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">تلگرام</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">لینکدین</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">کدپن</Link>
                            <Link to="/" className="text-sm font-normal w-max text-black/80 hover:text-black transition-colors block">یوتیوب</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer