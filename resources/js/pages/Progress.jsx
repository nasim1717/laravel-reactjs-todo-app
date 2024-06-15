import Goals from "../Goals/Goals";
import useGoals from "../hooks/useGoals";

export default function Progress() {
    const { goalsData } = useGoals();
    const progressGoals = goalsData.filter((data) =>
        data?.isComplete ? false : true
    );
    return <Goals goalsTitle={"In Progress Goals"} goalsData={progressGoals} />;
}
