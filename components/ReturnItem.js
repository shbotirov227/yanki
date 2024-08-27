import React from 'react';

import styles from "../styles/ReturnItem.module.scss";

const ReturnItem = ({ icon, text }) => {
	return (
    	<div className={styles.ReturnItem}>
			<span className="ReturnItem-icon">{icon}</span>
			<p className="ReturnItem-text">{text}</p>
		</div>
  	)
	
 }

export default ReturnItem;