import styles from "./menu.module.css"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/app/assets/Logo do Ferreira's Barber Studio.png";

export default function Menu(){
    return (
        
        
        <div className={styles.menu}>
           
              
            <section>
                    <nav>
                        <ul>
                            <li><a href="#servicos">SERVIÇOS</a></li>
                            <li><a href="#agendamento">AGENDAMENTO</a></li>
                            <li><a href="#info">INFORMAÇÕES</a></li>
                        </ul>
                    </nav> 
            </section>

        
        
        
        </div> 

    )
}