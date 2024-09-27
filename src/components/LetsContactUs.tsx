import { ContactBox } from "."

function LetsContactUs() {
    return (
        <div className="w-full p-container py-20 bg-slate-900 grid grid-cols-2">
            {/* right section */}
            <div>
                <h2 className="text-4xl font-medium text-white leading-[3rem]">
                    یه ایده داری ؟, پس وقت تلف نکن و بیا باهم اونو تبدیل به واقعیت کنیم
                </h2>

                <p className="text-sm text-white/80 leading-6 mt-5">
                    میخوایی برام یه سلام کنی ؟ یا میخوایی با کمک من ایده میلیون دلاری ات رو به واقعیت تبدیل کنی ؟ ویا بلکه میخوایی برام یه قهوه سفارش بدی ؟ :)
                    <br />
                    فرقی نمیکنه. بیا باهم حرف بزنیم
                </p>
            </div>


            {/* left section */}
            <div>
                <div className="w-full max-w-xs mx-auto space-y-4">
                    <ContactBox
                        img="/svg/email.svg"
                        title="helloworld@gmail.com"
                        subTitle="با من گپ بزن"
                        href="mailto:helloworld@gmail.com"
                    />

                    <ContactBox
                        img="/svg/phone.svg"
                        title="09785676556"
                        subTitle="تماس با من"
                        href="callto:09785676556"
                    />
                </div>
            </div>
        </div>
    )
}

export default LetsContactUs