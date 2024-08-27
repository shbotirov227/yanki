import FooterBtn from "./FooterBtn";

import styles from "../styles/Footer.module.scss";

import { InstagramIcon, TelegramIcon } from "../assets/icons.jsx";

// const data = [
// 	{
// 		id: 0,
// 		title: "КОМПАНИЯ",
// 		btn: ["О нас", "Контакты"],
// 		link: ["/about", "/contact"]
// 	},
// 	{
// 		id: 1,
// 		title: "ПОЛЕЗНОЕ",
// 		btn: ["Оплата и доставка", "Условия возврата", "Бонусная система"],
// 		link: ["/about", "/contact"]
// 	},
// 	{
// 		id: 2,
// 		title: "ПОКУПАТЕЛЮ",
// 		btn: ["Избранное", "Публичная оферта", "Политика конфиденциальности"],
// 		link: ["/about", "/contact"]
// 	},
// 	{
// 		id: 3,
// 		title: "КОНТАКТЫ",
// 		btn: ["+38(073) 096 36 44", "info@yanki.com"],
// 		link: ["/about", "/contact"]
// 	}
// ]

// const btnData = [
// 	[
// 		{	
// 			id: 0,
// 			title: "О нас",
// 			link: "/about"
// 		},
	
// 		{
// 			id:1,
// 			title: "Контакты",
// 			link: "/contact"
// 		}
// 	],

// 	[
// 		{
// 			id: 0,
// 			title: "Оплата и доставка",
// 			link: "/"
// 		},
	
// 		{
// 			id: 1,
// 			title: "Условия возврата",
// 			link: "/"
// 		},
	
// 		{
// 			id:2,
// 			title: "Бонусная система",
// 			link: "/"
// 		}
// 	],

// 	[
// 		{
// 			id: 0,
// 			title: "Избранное",
// 			link: "/"
// 		},
	
// 		{
// 			id: 1,
// 			title: "Публичная оферта",
// 			link: "/"
// 		},

// 		{
// 			id: 2,
// 			title: "Политика конфиденциальности",
// 			link: "/"
// 		}
// 	]
// ]


const Footer = () => {
    return (
        <div className={`container ${styles.Footer}`}>
			<FooterBtn title="КОМПАНИЯ" btn={["О нас", "Контакты"]} link="/" />
			<FooterBtn title="ПОЛЕЗНОЕ" btn={["Оплата и доставка", "Условия возврата", "Бонусная система"]} link="/return" />
			<FooterBtn title="ПОКУПАТЕЛЮ" btn={["Избранное", "Публичная оферта", "Политика конфиденциальности"]} link="/" />
			<FooterBtn title="КОНТАКТЫ" btn={[<InstagramIcon />, <TelegramIcon />, "+38(073) 096 36 44", "info@yanki.com"]} link="/" />
		</div>
    )
}

export default Footer;