import React from "react";
import styles from '../css/homepage.module.css';
interface Props {
  name: string;
  textSize?: string;
  color?: string;
  backgroundColor?: string;
}

const FlexButton: React.FC<Props> = ({ name, textSize = 'text-sm', color = 'text-black', backgroundColor = 'bg-yellow-50' }) => {
  return (
    <div className={`rounded-md p-2 ${backgroundColor} ${styles.smallDiv} hover:bg-gray-100 cursor-pointer`}>
      <p className={`${textSize} ${color} text-center ${styles.textInDiv}`}>{name}</p>
    </div>
  );
}

export default FlexButton;
