import AddNewGoals from "./AddNewGoal";
import GoalsCard from "./GoalsCard";

export default function Goals({ goalsTitle, goalsData }) {
    return (
        <>
            <section class="col-span-8 font-sans mr-6">
                <AddNewGoals />
                <GoalsCard goalsTitle={goalsTitle} goalsData={goalsData} />
            </section>
        </>
    );
}
