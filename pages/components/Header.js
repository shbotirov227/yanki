import Link from "next/link";
import { BuyIcon, CloseBtn, LikeIcon, Logo, MenuBtn, UserIcon, SearchIcon } from "../../assets/icons.jsx";

import { useState } from "react";

import styles from "../../styles/Header.module.scss";

const Header = () => {

    const [ state, setState ] = useState(false);

    return (
        <div className={`${styles.Header} container`}>

            <div className="flex">
                <button className="mr-28" onClick={() => setState(!state)}>{state ? <CloseBtn /> : <MenuBtn />}</button>

                <div>
                    <Link className={styles.HeaderLink} href="/new">NEW</Link>
                    <Link className={styles.HeaderLink} href="/catalog">КАТАЛОГ</Link>
                    <Link className={styles.HeaderLink} href="/about">О НАС</Link>
                </div>
            </div>

			<Link className={styles.Logo} href="/"><Logo /></Link>

            <div className="flex">
                <div>
                    <select id="" name="">
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                    </select>

                    <select className="ml-5" id="" name="">
                        <option value="">UAH</option>
                        <option value="">USD</option>
                        <option value="">RUBL</option>
                        <option value="">SO'M</option>
                    </select>
                </div>

                <div className="flex">
                    <SearchIcon className="ml-16 w-6 h-6" fill="#fff" />
                    <Link className="ml-8 w-6 h-6" href=""><UserIcon fill="#fff" /></Link>
                    <Link className="ml-8 w-6 h-6" href=""><LikeIcon fill="#fff" /></Link>
                    <Link className="ml-8 w-6 h-6" href=""><BuyIcon fill="#fff" /></Link>
                </div>
            </div>

        </div>
    )
}

export default Header;