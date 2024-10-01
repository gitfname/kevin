import { Button, Select, TextInput, Textarea } from "@mantine/core"
import { BsSend } from "react-icons/bs"

function ContactUsForm() {
    return (
        <div className="w-full border border-gray-200 rounded-xl p-5 py-8">
            <h2 className="text-lg font-semibold">
                فقط بگو 👋 سلام
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4">
                <TextInput
                    placeholder="ایمیل"
                />

                <TextInput
                    placeholder="نام"
                />

                <TextInput
                    placeholder="موضوع"
                    className="col-span-full"
                />

                <Select
                    placeholder="خدمات"
                    data={["ساخت سایت", "سایت برنامه اندروید", "ساخت برنامه آی او اس", "ساخت برنامه ویندوز", "ساخت برنامه مک", "ساخت برنامه لینوکس"]}
                />

                <Select
                    placeholder="بودجه"
                    data={["تومن 100", "تومن 200", "تومن 3000", "تومن 400", "تومن 5000"]}
                />

                <Textarea
                    rows={3}
                    placeholder="توضیحات"
                    className="col-span-full"
                />
            </div>

            <Button mt="xl">
                ارسال پیام
                &nbsp;
                <BsSend className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default ContactUsForm