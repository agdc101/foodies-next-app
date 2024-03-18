import Link from "next/link";

export default function MealsFeaturePage({ params }) {
    return (
        <div>
            <h1>Meals Feature</h1>
            <p><Link href="" ></Link></p>
            <p>Params: {params.slug}</p>
        </div>
    );
}