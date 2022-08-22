import buildingBlock from '../../images/BuildingBlocks.png'

let HomeSection = ({ handleSkillSection }) => {
    return (
        <div id="home-right-container" className="border-2 border-blue-500 basis-full overflow-y-scroll space-y-4" >
            <div className={"border border-slate-400 rounded-xl h-80 w-11/12 m-auto flex dark:bg-slate-800 bg-slate-200"}>
                <div className=" h-full w-4/6 pl-10">
                    <div className=" h-3/4 w-11/12 space-y-2.5 text-white">
                        <div className="h-12  text-slate-700 text-4xl font-extrabold ">
                            Hey! there 👋
                        </div>
                        <div className=" text-3xl font-bold">
                            <div>
                                I'm Md Sahil
                            </div>
                            <div>
                                <span className=" text-slate-400">Front-end</span> Developer
                            </div>
                        </div>
                        <p>
                            Very soon will be a Full stack developer
                            Also an open source Enthusiastic with good coding & development skills.
                        </p>
                        <p>
                            And also interested in cloud computing services.
                        </p>
                    </div>
                    <div className=" h-1/4 w-11/12 flex justify-start items-center space-x-3.5">
                        <button className="w-24 h-10 rounded-3xl bg-slate-600
                                 hover:bg-slate-700 text-white"
                        >Hire me</button>
                        <button className="border-2 border-slate-600 w-24 h-10 rounded-3xl bg-white text-black
                                 hover:bg-slate-700 hover:text-white  block lg:hidden"
                            onClick={handleSkillSection}
                        >skills</button>
                    </div>
                </div>
                <div className=" h-full w-2/6">
                    <img className="h-52 w-52 mx-auto mt-24" src={buildingBlock} alt="BuildingBlock.png" />
                </div>
            </div>
            <div className="border-2 border-green-400 h-auto w-11/12 m-auto space-y-8">
                <div className='text-center space-y-3'>
                    <h2 className='text-2xl font-bold'>
                        My Services
                    </h2>
                    <p className='m-auto border border-orange-500 w-4/6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus veniam nobis. Aliquid laboriosam, maiores,
                        dolor laborum saepe incidunt nemo sed adipisci ea doloribus dolore eum repudiandae, deleniti et beatae?
                    </p>
                </div>
                <div className='border border-gray-500 grid grid-cols-3 gap-8'>
                    <div className='border border-orange-500 h-60'></div>
                    <div className='border border-orange-500 h-60'></div>
                    <div className='border border-orange-500 h-60'></div>
                    <div className='border border-orange-500 h-60'></div>

                </div>
            </div>
        </div>
    )
}
export default HomeSection;