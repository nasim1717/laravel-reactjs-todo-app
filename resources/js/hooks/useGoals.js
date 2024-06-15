import { useContext } from "react";
import { GoalsCoontext } from "../context";

export default function useGoals() {
    return useContext(GoalsCoontext);
}