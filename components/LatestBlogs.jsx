import Link from "next/link";
import blogData from "../data/blog.json";
import Image from "next/image";
import { FaCalendar, FaUser } from "react-icons/fa";

const LatestBlogs = () => {
    return (
        <div className="container mx-auto w-11/12 sm:w-full ">
            <h2>Conoce mas nuestras Aventuras!</h2>
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-10 ">
                {blogData.blogs.map((blog, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-slate-100 w-full md:w-1/3 shadow-md transition-all hover:shadow-2xl hover:scale-[1.009] rounded-md " 
                        >
                            <Image
                                src={blog.ftimg}
                                height={300}
                                width={400}
                                alt={blog.short}
                                className="h-[300px] w-full object-cover rounded-t-md"
                            />
                            <div className="px-5 pb-10">
                                <h3>{blog.title}</h3>
                                <div className="flex gap-5 flex-row mb-2 -mt-1">
                                    <label className="flex flex-row items-center gap-1"><FaCalendar />{blog.date}</label>
                                    <label className="flex flex-row items-center gap-1"><FaUser />{blog.author}</label>
                                </div>
                                <div
                                    className="mb-3 mt-1"
                                    dangerouslySetInnerHTML={{
                                        __html: blog.short,
                                    }}
                                />
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="btn-primary"
                                >
                                    LEER MÁS
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestBlogs;
