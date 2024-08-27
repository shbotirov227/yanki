import React from 'react'
import { Link } from "next/link";

import styles from "../styles/FooterBtn.module.scss";

const FooterBtn = ({title, btn, link}) => {
  return (
    <div className={styles.FooterBtn}>
		<h3 className={styles.FooterBtn_title}>{title}</h3>
		{
			btn.map(el => <a className={styles.FooterBtn_link} href={link}>{el}</a>)
		}
    </div>
  )
}

export default FooterBtn;