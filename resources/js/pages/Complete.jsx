import Goals from "../Goals/Goals";
import useGoals from "../hooks/useGoals";

export default function Complete() {
    const { goalsData } = useGoals();
    const completeGoals = goalsData.filter((data) => data?.isComplete);
    return <Goals goalsTitle={"Completed Goals"} goalsData={completeGoals} />;
}
