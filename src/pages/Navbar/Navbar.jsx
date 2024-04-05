/* eslint-disable jsx-a11y/heading-has-content */
import { MdBusinessCenter } from "react-icons/md";
import profileImage from "../../assets/profileImage.jpg";

const Navbar = () => {
    return (
        <div className="py-4 shadow-lg h-20">
            <div className="flex justify-around space-x-20">
                <div className="flex space-x-10 items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Aeonaxy</h1>
                    </div>
                    <div className="list-none flex items-center space-x-7 text-sm">
                        <li className="cursor-pointer">Inspiration</li>
                        <li className="cursor-pointer">Find Work</li>
                        <li className="cursor-pointer">Learn Developing</li>
                        <li className="cursor-pointer">Go Pro</li>
                        <li className="cursor-pointer">Hire Developer</li>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="bg-gray-100 rounded-md mt-1 pl-4 h-10 font-normal font-comicSans  block focus:outline-none focus:border-2 focus:border-gray-400"
                            placeholder="Search..."
                        />
                    </div>
                    <div>
                        <MdBusinessCenter className="text-2xl" />
                    </div>
                    <div>
                        <img
                            className="w-10 h-10 rounded-full"
                            src={profileImage}
                            alt=""
                        />
                    </div>
                    <div>
                        <button className="bg-pink-600 text-white text-sm px-3 py-2 rounded-md">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
