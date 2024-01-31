import React from "react";

const Footer = () => {
    return (
        <footer className="mt-20 bg-white">
            <div className="py-10">
                <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                    <a
                        href="/"
                        className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0">

                        <span className="self-center whitespace-nowrap text-2xl">
                        Cnippet <span className="text-base">Blog.</span>
                        </span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-700 sm:mb-0 ">
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="me-4 hover:underline md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/cancellation" className="me-4 hover:underline md:me-6">
                                Cancellation
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="me-4 hover:underline md:me-6">
                                T&C
                            </a>
                        </li>
                        <li>
                            <a href="/shipping" className="hover:underline">
                                Shipping
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 w-full border-gray-300 lg:my-8" />
                <span className="block text-sm text-gray-700 sm:text-center">
                    Designed by:{" "}
                    <a target="_blank" href="https://www.deepaknegi.in/">
                        Deepak Negi
                    </a>
                </span>

                <span className="mt-2 block text-sm text-gray-700 sm:text-center">
                    © 2024{" "}
                    <a href="/" className="hover:underline">
                        CnippetUi™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
