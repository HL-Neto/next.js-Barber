import styles from "./hero.module.css"
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { Scissors, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function Hero(){
    return(
        <div  className={styles.hero}> 

            <div className={styles.bg_overlay}></div>

            <div className={styles.center_logo}>
               
                <Image src={Logo} alt="Ferreira's Barber Studio" className={styles.logo} priority />
                
                <div className={styles.bg_overlay}></div>
            </div>
            
        </div>

        

       
    )
}