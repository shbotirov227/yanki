import Link from "next/link";
import Header from "./components/Header";
import Card from "./components/Card";
import styles from "../styles/Home.module.scss";
import { Arrow } from "../assets/icons.jsx";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import { Image } from "next/image";

const arr = [Img1, Img2, Img3]

const Home = () => {
	return (
		<div className={`${styles.Home} `}>

			<div className={`${styles.collections}`}>
			<Header />

				<div className={`${styles.inner} text-center container`}>
					<h2 className={styles.title}>Новая коллекция</h2>
					<span className={styles.line}></span>
					<Link className={`${styles.link} flex items-center`} href="/collections">Смотреть Новинки <Arrow /></Link>
				</div>
			</div>

			<div className={styles.categorySection}>
				<h2 className={styles.categorySectionTitle}>Категории</h2>

				{/* <Card img={Img1} /> */}
				<Card img={arr} />
			</div>

		</div>
	)
}

export default Home;