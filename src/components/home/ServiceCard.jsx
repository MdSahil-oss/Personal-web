import { BsCodeSlash, BsBook } from "react-icons/bs"

let ServiceCard = () => {
    return (
        <div className="h-auto w-11/12 m-auto space-y-2 rounded-xl text-white bg-slate-200 dark:bg-slate-800">
            <div className='text-center space-y-1'>
                <h2 className='text:xl md:text-2xl font-bold'>
                    My Services
                </h2>
                <p className='m-auto w-4/6 text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus veniam nobis. Aliquid laboriosam, maiores,
                    dolor laborum saepe incidunt nemo sed adipisci ea doloribus dolore eum repudiandae, deleniti et beatae?
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-evenly py-5 space-y-2'>
                <div className='border border-gray-500 w-4/5 sm:w-96 h-96 rounded-xl flex flex-col justify-evenly items-center'>
                    <div className='w-min p-3 border border-gray-500 rounded-full'>
                        <BsCodeSlash size={64} />
                    </div>
                    <div className='w-4/5 text-center space-y-3'>
                        <h3 className='text-2xl font-semibold'>
                            Web Development
                        </h3>
                        <p>
                            I'm a <span>freelancer</span> for Web and Not Web related projects
                            so If you have any project to build and want to hire someone to get project done <br /> I'm here for that.
                        </p>
                    </div>
                    <a href="/">
                        <button className="w-28 h-10 rounded-3xl bg-slate-600 hover:bg-slate-700 text-white">
                            Checkout
                        </button>
                    </a>
                </div>
                <div className='border border-gray-500 w-4/5 h-96 sm:w-96 sm:h-96 rounded-xl flex flex-col justify-evenly items-center'>
                    <div className='w-min border border-gray-500 p-3 rounded-full'>
                        <BsBook size={64} />
                    </div>
                    <div className='w-4/5 text-center space-y-3'>
                        <h3 className='text-2xl font-semibold'>
                            Blogs
                        </h3>
                        <p>
                            I also write Blogs sometimes on my achievements that can help people in achieving what I have achieved. If you have not checked out so Check it out Now.
                        </p>
                    </div>
                    <a href="/">
                        <button className="w-28 h-10 rounded-3xl bg-slate-600 hover:bg-slate-700 text-white">
                            Checkout
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;