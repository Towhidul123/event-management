

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-white p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                    <img src="/13082.jpg" alt="logo-ct" className="w-10" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                License
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Contribute
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    © 2023 Copyright Protected by Excali
                </p>
            </footer>
        </div>
    );
};

export default Footer;