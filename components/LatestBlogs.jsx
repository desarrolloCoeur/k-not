import Link from "next/link";
import blogData from "../data/blog.json";
import Image from "next/image";

const LatestBlogs = () => {
    return (
        <>
            <h2 className="text-center md:text-left">Nuestros ultimos blogs</h2>
            <div className="container mx-auto flex flex-wrap justify-center md:flex-nowrap gap-3">
                {blogData.blogs.map((blog, i) => {
                    return (
                        <div
                            key={i}
                            className="w-10/12  md:w-1/3  text-center "
                        >
                            <Image
                                src={blog.ftimg}
                                height={300}
                                width={400}
                                alt={blog.short}
                                className="h-[300px] w-full object-cover rounded-xl"
                            />
                            <div className="px-5 pb-5">
                                <h3>{blog.title}</h3>
                                <div
                                    className="mb-5 mt-2"
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
        </>
    );
};

export default LatestBlogs;
