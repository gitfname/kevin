import { ContactUsForm, FollowMeOnSocialPlatforms, TopNavigationBar } from "../components"

function ContactUs() {
    return (
        <div dir="rtl" className="max-w-7xl mx-auto pb-8">
            <TopNavigationBar />

            <div className="mt-12 grid grid-cols-2 gap-5 px-container">
                {/* right section */}
                <div>
                    <h2 className="text-lg font-semibold max-w-[48ch]">
                        یک پروژه یا سوال در ذهن دارید؟فقط برای من پیام بفرستید
                    </h2>

                    <p className="text-sm font-normal text-black/70 mt-6 leading-6 max-w-prose">
                        آیا می خواهید به من سلام کنید یا می خواهید با پروژه خود و خود شروع کنید به کمک من نیاز دارید؟هر موقع خواستی با من تماس بگیر.من ظرف 48 ساعت پاسخ خواهم داد
                    </p>


                    <div className="space-y-3 mt-5">
                        <div className="border border-gray-200 p-3 rounded-md w-full max-w-[15rem]">
                            <p className="text-xs text-black/70 font-medium">
                                اکنون با من تماس بگیرید
                            </p>
                            <a href="callto:09488788987" className="text-base font-semibold text-black/90 mt-0.5 block">
                                09488788987
                            </a>
                        </div>

                        <div className="border border-gray-200 p-3 rounded-md w-full max-w-[15rem]">
                            <p className="text-xs text-black/70 font-medium">
                                با من گپ بزند
                            </p>
                            <a href="mailto:hellowordl@gmail.com" className="text-base font-semibold text-black/90 mt-0.5 block">
                                hellowordl@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="mt-7 w-full max-w-xs">
                        <FollowMeOnSocialPlatforms />
                    </div>
                </div>

                {/* left section */}
                <div>
                    <div className="w-full max-w-lg mx-auto">
                        <ContactUsForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs