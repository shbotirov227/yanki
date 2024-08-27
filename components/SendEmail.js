import React from 'react';
import styles from "../styles/SendEmail.module.scss";

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<h3 className={styles.SendEmail_title}>Узнайте  первым о новинках</h3>
			<form action="/contact" method="post">
				<input className={styles.email} type="email" name="email" id="email" placeholder="Ваш e-mail*" />
				<button type="submit">ПОДПИСАТЬСЯ</button>
				<p className={styles.text}>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
			</form>
		</div>
	)
}

export default SendEmail;