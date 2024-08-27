import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";
import { Arrow } from "../assets/icons.jsx";
import { Image } from "next/image";
import Carousel from "./../carousels/Carousel";
import SendEmail from "../components/SendEmail";

// const arr = [Img1, Img2, Img3]

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
				{/* <Card /> */}
				<Carousel />

				<SendEmail />
			</div>
			<Footer />
		</div>
	)
}

export default Home;