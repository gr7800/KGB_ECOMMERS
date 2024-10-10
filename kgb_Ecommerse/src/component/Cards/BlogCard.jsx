import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ id, title, body }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Link to={`/blog/${id}`}>
            <div
                className="flex flex-col bg-rose-300 w-96 h-64 p-4 rounded cursor-pointer hover:bg-[#fef4f2]  max-sm:bg-[#fef4f2] transition shadow-xl"
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <p className='bg-rose-900 p-2 rounded-full w-10 text-center text-white font-bold'>{id}</p>

                <p className="py-3 font-bold text-xl text-rose-900 ">{title}</p>

                <p className={` ${isHovering && "text-rose-300"} text-white font-semibold`}>
                    {body.split(" ").slice(0, 15).join(" ") + "..."}
                </p>
            </div>
        </Link>
    )
}

export default BlogCard