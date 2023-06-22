"use client";
import Image from "next/image";
import blogsData from "../../../data/blog.json";
import { useEffect, useState } from "react";
import { FaUserAlt, FaClock } from "react-icons/fa";
import LatestBlogs from "../../../components/LatestBlogs";
import ToursSidebar from "@/components/ToursSidebar";

const Blog = ({ params: { slug } }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getBlog();
    });

    const getBlog = () => {
        const blogFinded = blogsData.blogs.find((blog) => blog.slug === slug);
        setBlog(blogFinded);
    };

    if (!blog) {
        return (
            <div>
                <p>{slug}</p>
            </div>
        );
    }
    return (
        <>
            <Image
                src={blog.ftimg}
                alt={blog.short}
                width={1200}
                height={700}
                className="mx-auto object-cover w-full h-[500px] object-center"
            />
            <div className="container mx-auto w-11/12 mt-6">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3">
                        <h1>{blog.title}</h1>

                        <div className="flex flex-row gap-4">
                            <label className="flex gap-1 items-center">
                                <FaUserAlt />
                                {blog.date}
                            </label>
                            <label className="flex gap-1 items-center">
                                <FaClock />
                                {blog.author}
                            </label>
                        </div>
                        <div
                            className="container mt-5 pr-5 text-justify"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                    </div>
                    <div className="w-full md:w-1/3 "> 
                        <ToursSidebar />
                    </div>

                </div>
                <div className="my-5">
                    <LatestBlogs />
                </div>
            </div>
        </>
    );
};

export async function generateStaticParams() {
    return [
        { slug: "avistamiento-de-ballenas-y-delfines" },
        { slug: "aventuras-acuaticas-en-bahia-de-banderas" },
        { slug: "historia-pesca-deportiva-puerto-vallarta" },
    ];
}

export default Blog;
