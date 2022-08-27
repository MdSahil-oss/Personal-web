import profilePhoto from '../../images/Profile.png'
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"

let ProfileCard = () => {
    return (
        <div className=" w-full h-auto flex flex-col space-y-1 py-2 items-center">
            <div className='w-fit h-fit'>
                <img className='w-44 h-44 rounded-full' src={profilePhoto} alt="no profile" />
            </div>
            <div className=' text-center w-4/5 space-y-2'>
                <div>
                    <h4 className='font-bold text-xl'>Md Sahil</h4>
                    <p className='text-slate-400'>Front-End Developer</p>
                </div>
                <div className=' space-x-2'>
                    <a href="https://twitter.com/sahiloss" rel="noreferrer" target="_blank" className='w-fit h-fit'>
                        <button className='border p-1 rounded-full hover:bg-slate-800 '>
                            <BsTwitter size={24} />
                        </button>
                    </a>
                    <a href="https://github.com/MdSahil-oss" rel="noreferrer" target="_blank" className='w-fit h-fit'>
                        <button className='border p-1 rounded-full hover:bg-slate-800 '>
                            <BsGithub size={24} />
                        </button>
                    </a>
                    <a href="/" rel="noreferrer" target="_blank" className='w-fit h-fit'>
                        <button className='border p-1 rounded-full hover:bg-slate-800 '>
                            <BsLinkedin size={24} />
                        </button>
                    </a>
                </div>
                <hr />
                <div className='w-full space-y-1 h-30'>
                    <div className='flex justify-between'>
                        <p className='border bg-white text-slate-700 px-1'>Age :</p>
                        <p>21</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='border bg-white text-slate-700 px-1'>Residence :</p>
                        <p>IND</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='border bg-white text-slate-700 px-1'>Freelance :</p>
                        <p>Available</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='border bg-white text-slate-700 px-1'>Address :</p>
                        <p>New Delhi, India</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfileCard;