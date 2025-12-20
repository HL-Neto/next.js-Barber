import styles from "./menu.module.css"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/app/assets/Logo do Ferreira's Barber Studio.png";

export default function Menu(){
    return (
        
        // mid menu - rigth menu - left menu  ; em sequencia 
        <div className={styles.menu}>
           
          
              
            <section>
                    <nav>
                        <ul>
                            <li><a href=".">A</a></li>
                            <li><a href=".">A</a></li>
                            <li><a href=".">A</a></li>
                            <li><a href=".">A</a></li>
                        </ul>
                    </nav> 
            </section>

        
            <section >
                    <nav>
                        <ul className={styles.right_menu}>
                            <li ><a href=",">B</a></li>
                            <li ><a href=",">B</a></li>
                        </ul>
                           
                    </nav>
            </section>
        
        </div> 

    )
}