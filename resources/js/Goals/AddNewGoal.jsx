import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Portal from "../Portal";

export default function AddNewGoals() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <div class="flex justify-end mt-2 mr-8">
                <button onClick={() => setIsOpenModal(true)}>
                    <h1 class="bg-[#0C4A6E] hover:bg-[#0C4A6E]/75 w-[130px] py-2 px-2 rounded-md text-xl flex items-center gap-x-1">
                        <FaPlus />
                        <span>New Goal</span>
                    </h1>
                </button>
            </div>
            {isOpenModal && (
                <Portal>
                    <Modal setIsOpenModal={setIsOpenModal} />
                </Portal>
            )}
        </>
    );
}
