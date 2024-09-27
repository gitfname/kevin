
function OurCustomers() {
    return (
        <div className="w-full grid grid-cols-2 gap-5">

            {/* right section */}
            <div className="grid place-items-center">
                <div>
                    <h2 className="text-3xl font-semibold leading-10">
                        من تا الان با بیش از 279 کارفرما<br />از سراسر دنیا کار کردم :)
                    </h2>

                    <p className="max-w-prose text-sm text-black/80 mt-6 leading-7">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
            </div>

            {/* left section */}
            <div className="grid grid-cols-3 gap-5">
                <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/amazon.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>

                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/dribbble.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="space-y-3 mt-10">
                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/google.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>

                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/microsoft.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="space-y-3 mt-4">
                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/spotify.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>

                    <div className="p-4 rounded-xl bg-white w-full group">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/linkedin.png"
                            className="w-32 h-auto block mx-auto brightness-0 group-hover:brightness-100 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurCustomers