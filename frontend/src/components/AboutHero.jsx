import React from 'react';

const AboutHero = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Gradients */}
                <div
                    aria-hidden="true"
                    className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
                >
                    <div
                        className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"/>
                    <div
                        className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"/>
                </div>
                {/* End Gradients */}
                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                                Jahir's WorkShop: A vision for 2026
                            </p>
                            {/* Title */}
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                    The Intuitive Web Solutions
                                </h1>
                            </div>
                            {/* End Title */}
                            <div className="mt-5 max-w-3xl">
                                <p className="text-lg text-gray-600 dark:text-neutral-400">
                                    Jahir's Workshop is an open-source set of prebuilt Software Firm,
                                    ready-to-use Software and Websites for your system based on the
                                    requirement.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;