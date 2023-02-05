import Image from 'next/image';
import styles from "../../styles/Card.module.scss";

const Card = ({ img }) => {
    return (
        <div className={style.Card}>
			{ img.map(el => <Image src={el} />)}
		</div>
    )
}
