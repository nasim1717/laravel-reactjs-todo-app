import { FaRegHeart } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Fragment, useState } from "react";
import Portal from "../Portal";
import Modal from "../Modal/Modal";
import useGoals from "../hooks/useGoals";

export default function GoalsCard({ goalsTitle, goalsData }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { setGoalsData } = useGoals();
    const handleDelete = (id) => {
        const deleteGoals = goalsData.filter((data) => data.id !== id);
        setGoalsData([...deleteGoals]);
    };

    const handleFavourite = (id) => {
        const favouriteGoal = goalsData.map((data) => {
            if (data.id === id) {
                data.isFavourite = data?.isFavourite ? false : true;
            }
            return data;
        });
        setGoalsData([...favouriteGoal]);
    };

    const handleComplete = (id) => {
        const copleteGoal = goalsData.map((data) => {
            if (data.id === id) {
                data.isComplete = data?.isComplete ? false : true;
            }
            return data;
        });
        setGoalsData([...copleteGoal]);
    };

    const content = goalsData.map((goal) => (
        <Fragment key={goal?.id}>
            <div className="bg-gray-800 w-[700px] px-4 py-3 border-[1px] border-gray-700 rounded-md mt-6">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold text-gray-100">
                        {goal?.title}
                    </h1>
                    <div className="space-x-4 flex text-xl">
                        <span
                            onClick={() => setIsOpenModal(true)}
                            className="cursor-pointer"
                        >
                            <FaRegEdit />
                        </span>
                        <span
                            onClick={() => handleDelete(goal?.id)}
                            className="cursor-pointer"
                        >
                            <MdDelete />
                        </span>
                    </div>
                </div>
                <p className="mt-3 text-gray-300">{goal?.description}</p>
                <div className="mt-3 space-x-3 flex items-center-center">
                    <button
                        onClick={() => handleFavourite(goal?.id)}
                        className={`flex gap-x-2 items-center ${
                            goal?.isFavourite && "text-pink-600"
                        }`}
                    >
                        <FaRegHeart /> <span> Fav</span>
                    </button>
                    <button
                        onClick={() => handleComplete(goal?.id)}
                        className={`flex gap-x-2 items-center ${
                            goal?.isComplete && "text-green-600"
                        }`}
                    >
                        <CiCircleCheck />
                        <span>
                            {goal?.isComplete ? "Completed" : "Complete"}
                        </span>
                    </button>
                </div>
            </div>
            {isOpenModal && (
                <Portal>
                    <Modal setIsOpenModal={setIsOpenModal} goal={goal} />
                </Portal>
            )}
        </Fragment>
    ));

    return (
        <>
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-3xl font-semibold">
                        {goalsTitle}{" "}
                        <sub className="text-xs">({goalsData?.length})</sub>
                    </h1>
                    {content}
                </div>
            </div>
        </>
    );
}
