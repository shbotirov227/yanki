import React from 'react'
import Header from "./../components/Header";
import Footer from "./../components/Footer";

import styles from "../styles/Return.module.scss"
import ReturnItem from "./../components/ReturnItem";

import { ReturnIcon1, ReturnIcon2, ReturnIcon3, ReturnIcon4, ReturnIcon5, ReturnIcon6 } from "../assets/icons.jsx";

const data = [
    {
        icon: <ReturnIcon1 />,
        text: "если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)"
    },

    {
        icon: <ReturnIcon2 />,
        text: "возврат и обмен осуществляется в течение двух дней с момента получения заказа"
    },

    {
        icon: <ReturnIcon3 />,
        text: "возврат и обмен товара возможен только при отправке по Украине"
    },

    {
        icon: <ReturnIcon4 />,
        text: "бланк возврата присутствует в каждой посылке"
    },

    {
        icon: <ReturnIcon5 />,
        text: "все расходы по обмену и возврату товара несет покупатель"
    },

    {
        icon: <ReturnIcon6 />,
        text: "после получения возврата мы делаем перевод денежных средств на карту клиента"
    },
]

const Return = () => {
	return (
		<div className="">
			<Header />
				<div className={`container ${styles.Return}`}>
					<h3 className={styles.Return_title}>Обмен и возврат</h3>
                    <p>Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат</p>
                    <p>Обмен и возврат возможен в случае :</p>

                    <div className="flex items-start justify-between mt-5">
                        {data.map((el, key) => <ReturnItem key={el.index} icon={el.icon} text={el.text} />)}
                    </div>
				</div>
			<Footer />
		</div>
	)
}

export default Return;