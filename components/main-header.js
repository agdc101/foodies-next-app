import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <img src={logoImg.src} alt="NextLevel Food" />
            </Link>
            <h1>NextLevel Food</h1>
            <nav>
                <ul>
                <li>
                    <Link href="/meals">All Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodie Community</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}
