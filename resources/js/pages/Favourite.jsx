import Goals from "../Goals/Goals";
import useGoals from "../hooks/useGoals";

export default function Favourite() {
    const { goalsData } = useGoals();
    const favouriteGoals = goalsData?.filter((data) => data?.isFavourite);
    return <Goals goalsTitle={"Favourite Goals"} goalsData={favouriteGoals} />;
}
