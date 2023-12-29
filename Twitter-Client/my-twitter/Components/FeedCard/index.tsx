import React from "react";
import Image from "next/image";
import { BiMessageRounded ,BiUpload} from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const FeedCard: React.FC = () => {
    return <div className="border-gray-400 border-l-0 border-r-0 p-1 hover:bg-slate-400 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1 rounded-full">
                <Image src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw" alt="user-image" height={60} width={60} />
            </div>
            <div className="col-span-11">
                <h5>Nikhil</h5>
                <p>I raised you, and loved you, I've given you weapons, taught you techniques, endowed
                 you with knowledge. There's nothing more for me to give you. All that's left for you to
                  take is my life. </p>
                  <div className="flex justify-between mt-5 text-xl items-center pr-10 w-[90%]">
                    <div>
                    <BiMessageRounded />
                    </div>
                    <div>
                    <FaRetweet />
                    </div>
                    <div>
                    <CiHeart />
                    </div>
                    <div>
                    <BiUpload />
                    </div>
                  </div>
            </div>
        </div>
    </div>
}

export default FeedCard