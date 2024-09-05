import { useState } from 'react';
import styles from '../styles/SwitchButton.module.css';

export default function SwitchButton({ onToggle }) {
  const [isOn, setIsOn] = useState(false);


  const toggleSwitch = () => {
    setIsOn(!isOn);
  
    if (!isOn) {
      onToggle(); // Call the function passed from the parent only when switching on
    }
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
      <span className={styles.slider}></span>
    </label>
  );
}
