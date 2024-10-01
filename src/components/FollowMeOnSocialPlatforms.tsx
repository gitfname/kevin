
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

function FollowMeOnSocialPlatforms() {
    return (
        <div className="w-full p-4 rounded-xl bg-primary/10">
            <p className="text-xs font-semibold">
                مرا در رسانه های اجتماعی دنبال کنید
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full hover:bg-primary bg-white grid place-items-center text-primary hover:text-white transition-colors duration-200">
                    <FaTelegram className="w-5 h-5" />
                </a>

                <a href="#" className="w-10 h-10 rounded-full hover:bg-primary bg-white grid place-items-center text-primary hover:text-white transition-colors duration-200">
                    <FaInstagram className="w-5 h-5" />
                </a>

                <a href="#" className="w-10 h-10 rounded-full hover:bg-primary bg-white grid place-items-center text-primary hover:text-white transition-colors duration-200">
                    <FaTwitter className="w-5 h-5" />
                </a>

                <a href="#" className="w-10 h-10 rounded-full hover:bg-primary bg-white grid place-items-center text-primary hover:text-white transition-colors duration-200">
                    <FaFacebook className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}

export default FollowMeOnSocialPlatforms