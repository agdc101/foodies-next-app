import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "@/components/main-header.module.css";

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="NextLevel Food" priority />
                NextLevel Food
            </Link>

            <nav className={styles.nav} >
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
