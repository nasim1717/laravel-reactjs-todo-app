import Goals from "../Goals/Goals";
import useGoals from "../hooks/useGoals";

export default function Home() {
    const { goalsData } = useGoals();

    return <Goals goalsTitle={"All Goals"} goalsData={goalsData} />;
}
