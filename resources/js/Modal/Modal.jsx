import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdError } from "react-icons/md";
import useGoals from "../hooks/useGoals";

export default function Modal({ setIsOpenModal, goal }) {
    const [formData, setFormData] = useState({
        title: goal?.title ?? "",
        description: goal?.description ?? "",
    });
    const [error, setError] = useState("");
    const { goalsData, setGoalsData } = useGoals();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.title && formData.description) {
            if (goal?.id) {
                const findGoalIndex = goalsData.findIndex(
                    (data) => data.id === goal?.id
                );
                goalsData[findGoalIndex] = { ...formData, id: goal?.id };
                setGoalsData([...goalsData]);
            } else {
                formData.id = crypto.randomUUID();
                setGoalsData([...goalsData, { ...formData }]);
            }

            setIsOpenModal(false);
        } else {
            setError("title, description are required");
        }
    };
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl p-6 max-h-[99vh] overflow-auto relative">
                <div className="flex justify-end items-center">
                    <button
                        onClick={() => setIsOpenModal(false)}
                        className="text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out text-2xl"
                    >
                        <RxCross2 />
                    </button>
                </div>
                <div className="mt-1">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col text-gray-400 space-y-4"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                                value={formData?.title}
                                type="text"
                                name="title"
                                id="title"
                                className="bg-transparent border-2 border-gray-700 h-9 rounded-md py-1 outline-none px-1"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description">Description</label>
                            <textarea
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                                value={formData?.description}
                                type="text"
                                name="description"
                                id="description"
                                rows={5}
                                className="bg-transparent border-2 border-gray-700 rounded-md outline-none px-1 py-1"
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 flex gap-x-2 items-center">
                                <MdError />
                                {error}
                            </p>
                        )}
                        <button className="bg-[#0C4A6E] hover:bg-[#0C4A6E]/75 py-2 rounded-md text-gray-300">
                            {goal?.id ? "Edit Goal" : "Add New Goal"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
