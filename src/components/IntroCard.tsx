
import { Button } from "@mantine/core"
import { AiOutlineArrowLeft } from "react-icons/ai"

function IntroCard() {
    return (
        <div
            className="w-full rounded-2xl bg-[rgba(60,103,79,1)] p-6 min-h-[28rem] grid grid-cols-2
            bg-cover overflow-hidden"
            style={{ backgroundImage: "url(/images/hero.png)" }}
        >
            {/* right section */}
            <div className="flex flex-col gap-5 justify-center">
                <h2 className="text-white text-[2.65rem] font-medium leading-[3.7rem]">
                    سلام, من جمال هستم
                    <br />
                    فول استک دولوپرم
                </h2>

                <p className="text-sm text-white/80 font-medium leading-6">
                    جمال یک فول استک دولوپر هست که 6 سال سابقه کار دارد و کار کردن برروی پروژه های مختلف تیز خوشحال هست بسیار بسیار خوشحال هست چون بدبخت جمال تنها راه درآمد کردنش همین هست
                </p>

                <div>
                    <Button color="primaryColor">
                        پروژه های من
                        &nbsp;
                        <AiOutlineArrowLeft className="w-3.5 h-3.5" />
                    </Button>
                    &nbsp;&nbsp;
                    <Button color="primaryColor" variant="light" c="white" className="!border-white !bg-white/5">
                        ارتباط با من
                    </Button>
                </div>
            </div>

            {/* left section */}
            <div>
                {/* put here whatever you want */}
            </div>
        </div>
    )
}

export default IntroCard