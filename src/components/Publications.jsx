import React from "react";
import { PublicationData } from "../data/publicationData";
import 'flowbite';

const Publications = () => {
    return (
        <div
            name="publications"
            className="w-full bg-gradient-to-r from-red-100 to-indigo-200 text-black publications"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
                <div class="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Publications
                    </p>
                </div>
                <div className="w-full p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    {PublicationData.map((elem, idx) => {
                        // Card
                        return (
                            <div class="bg-gradient-to-r from-red-100 to-indigo-200 border border-black rounded-lg shadow-md">
                                <a href={elem.href}>
                                    <img class="rounded-lg object-scale-down shadow-md shadow-black h-48 w-full" src={elem.image_path} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href={elem.href}>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black text-left">{elem.title}</h5>
                                    </a>
                                    <div class="pb-2">
                                        <a href={elem.href} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Publications;