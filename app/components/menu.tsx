import styles from "./menu.module.css"
import { Button } from "@/components/ui/button";


export default function Menu(){
    return (
        
        // mid menu - rigth menu - left menu  ; em sequencia 
        <div className={styles.menu}>
           
             <section>
                    <nav>
                        <ul className={styles.left_menu}>
                            <li><a href=";">c</a></li>
                        </ul>
                    </nav>
            </section>
            
              
            <section>
                    <nav>
                        <ul>
                            <li><a href=".">a</a></li>
                            <li><a href=".">a</a></li>
                            <li><a href=".">a</a></li>
                            <li><a href=".">a</a></li>
                        </ul>
                    </nav> 
            </section>

        
            <section >
                    <nav>
                        <ul className={styles.right_menu}>
                            <li ><a href=",">b</a></li>
                            <li><Button variant="destructive" size="lg" className="rounded-full">Botão</Button> </li>
                        </ul>
                    </nav>
            </section>
        
        </div> 

    )
}