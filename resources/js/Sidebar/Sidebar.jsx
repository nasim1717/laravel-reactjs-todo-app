import GoloasLogo from "../assets/4371132.png";
import { FaHouse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoLayersSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const path = useLocation();
    return (
        <aside className="col-span-4 bg-gray-800 h-full border-r-[1px] border-gray-700">
            <nav className="ml-6 pr-3">
                <ul className="space-y-3">
                    <li className="flex gap-4 items-center py-6 text-3xl italic ml-1">
                        <img src={GoloasLogo} alt="goal" width="60px" />
                        <span>Goals</span>
                    </li>
                    <Link to={"/"}>
                        <li
                            className={`py-5 text-[27px] hover:text-pink-600 hover:bg-gray-700/50 rounded-md cursor-pointer flex items-center gap-x-3 ${
                                path.pathname === "/" && "text-pink-600"
                            }`}
                        >
                            <span className="pl-3">
                                <FaHouse />
                            </span>
                            <h1>Home</h1>
                        </li>
                    </Link>
                    <Link to="/favourite">
                        <li
                            className={`py-5 text-[27px] hover:text-pink-600 hover:bg-gray-700/50 rounded-md cursor-pointer flex items-center gap-x-3 ${
                                path.pathname === "/favourite" &&
                                "text-pink-600"
                            }`}
                        >
                            <span className="pl-3">
                                <FaHeart />
                            </span>{" "}
                            <h1>Favourite</h1>
                        </li>
                    </Link>
                    <Link to="/progress">
                        <li
                            className={`py-5 text-[27px] hover:text-pink-600 hover:bg-gray-700/50 rounded-md cursor-pointer flex items-center gap-x-3 ${
                                path.pathname === "/progress" && "text-pink-600"
                            }`}
                        >
                            <span className="pl-3">
                                <IoLayersSharp />
                            </span>{" "}
                            <h1>In Progress</h1>
                        </li>
                    </Link>
                    <Link to={"/complete"}>
                        <li
                            className={`py-5 text-[27px] hover:text-pink-600 hover:bg-gray-700/50 rounded-md cursor-pointer flex items-center gap-x-3 ${
                                path.pathname === "/complete" && "text-pink-600"
                            }`}
                        >
                            <span className="pl-3">
                                <FaCheck />
                            </span>{" "}
                            <h1>Completed</h1>
                        </li>
                    </Link>
                </ul>
            </nav>
        </aside>
    );
}
