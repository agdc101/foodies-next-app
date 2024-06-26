import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
    title: 'All Meals',
    description: 'All meals innit',
};

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>Nice Meals <span className={classes.highlight} >by you</span></h1>
                <p>Choose your recipes and cook yourself!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share" >Share your Fave Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading} >Loading...</p>} >
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}