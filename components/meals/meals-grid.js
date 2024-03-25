import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({meals}) {
    return (
        <>
            <section className={classes.meals}>
                <ul className={classes.meals}>
                    {meals.map((meal) => (
                        <li key={meal.id}>
                            <MealItem {...meal} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
