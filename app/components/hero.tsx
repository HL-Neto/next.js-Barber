import styles from "./hero.module.css"
import Image from "next/image";
import Logo from "@/app/assets/Logo do Ferreira's Barber Studio.png";



export default function Hero(){
    return(
        <div  className={styles.hero}> 

          <div className={styles.center_logo}>
                <Image src={Logo} alt="Ferreira's Barber Studio" className={styles.logo} priority />
            </div>

        </div>

        

       
    )
}