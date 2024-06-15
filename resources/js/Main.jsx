import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { GoalsCoontext } from "./context";
import { useState } from "react";

export default function Main() {
    const [goalsData, setGoalsData] = useState([]);
    return (
        <div className="h-screen">
            <Navbar />
            <main className="text-white font-sans grid grid-cols-12 h-[calc(100%-4rem)]">
                <GoalsCoontext.Provider value={{ goalsData, setGoalsData }}>
                    {" "}
                    <Sidebar />
                    <Outlet />
                </GoalsCoontext.Provider>
            </main>
        </div>
    );
}
