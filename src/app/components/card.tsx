import React from "react";
import styles from '../css/homepage.module.css';
import { HeartIcon } from "@heroicons/react/16/solid";
import {ShoppingCartIcon} from "@heroicons/react/16/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import {InformationCircleIcon} from "@heroicons/react/16/solid";

interface props{
    image:string,
    name:string,
    heartType?:string
    onHeartClick?:()=> void
}
const Card:React.FC<props> = ({image, name, heartType = 'fill', onHeartClick}) => {
    const checkType = () => {
        return heartType == 'fill' ?<HeartIcon className={styles.heartIcon} onClick={onHeartClick}></HeartIcon>
        : <HeartOutline className={styles.heartIcon} onClick={onHeartClick}></HeartOutline>
    }
    return (
        <div className={styles.container}>
        <img className={styles.cardImage} src={image}></img>
        <div className={styles.cardH}>
        <h2 className={styles.name}>{name}</h2>
        {checkType()}
        </div>
        <div className={styles.purchase}>
          <div className={styles.cardbutton}>
          <ShoppingCartIcon className={styles.cartSize}></ShoppingCartIcon>
          <p className={styles.pSize}>Add to cart</p>
          </div>
        <u><p className={styles.cardDetails}>More details</p></u>
        <InformationCircleIcon className={styles.infoIcon} title="More details"></InformationCircleIcon>
        </div>
      </div>
    );
}
export default Card;