import classes from "./page.module.css";
// import Link from "next/link";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

export default function MealsFeaturePage({ params }) {
    const meal = getMeal(params.slug);

    //replace newlines with <br /> tags
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image
                        src={meal.image}
                        alt={meal.title}
                        fill
                    />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        By <a href={`mailto:${meal.creator_title}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }} ></p>
            </main>
        </>
    );
}