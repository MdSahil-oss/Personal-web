import buildingBlock from '../../images/BuildingBlocks.png'

let WelcomeCard = ({ handleSkillSection }) => {
    return (
        <div className={"border border-slate-400 rounded-xl h-70 sm:h-80 w-11/12 m-auto flex dark:bg-slate-800 bg-slate-200 py-2"}>
            <div className=" h-full w-4/6 pl-10 space-y-5 sm:space-y-1">
                <div className=" h-3/4 w-11/12 space-y-1 md:space-y-2.5 text-white">
                    <div className="h-12  text-slate-700 text-2xl md:text-4xl font-extrabold ">
                        Hey! there 👋
                    </div>
                    <p className=" text-xl md:text-3xl font-bold">
                        I'm Md Sahil <br />
                        <span className=" text-slate-400">Front-end</span> Developer
                    </p>
                    <p className='text-xs sm:text-base'>
                        Very soon will be a Full stack developer
                        Also an open source Enthusiastic with good coding & development skills.
                    </p>
                    <p className='text-xs sm:text-base'>
                        And also interested in cloud computing services.
                    </p>
                </div>
                <div className=" h-1/4 w-11/12 flex justify-start items-center space-x-3.5">
                    <a href="/">
                        <button className="w-20 h-7 text-sm sm:text-base sm:w-24 sm:h-10 rounded-3xl bg-slate-600
                         hover:bg-slate-700 text-white"
                        >Hire me</button>
                    </a>
                    <button className="w-20 h-7 text-sm sm:text-base sm:w-24 sm:h-10 rounded-3xl bg-white text-black
                         hover:bg-slate-700 hover:text-white  block lg:hidden"
                        onClick={handleSkillSection}
                    >skills</button>
                </div>
            </div>
            <div className=" h-full w-2/6">
                <img className="h-32 w-32 mt-32 sm:h-52 sm:w-52 mx-auto sm:mt-24 " src={buildingBlock} alt="BuildingBlock.png" />
            </div>
        </div>

    )
}

export default WelcomeCard;