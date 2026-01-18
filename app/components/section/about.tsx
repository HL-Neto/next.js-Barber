import styles from "./about.module.css"
import Image from "next/image";
import Logo from "@/app/assets/Sobre nos logo.png"


export default function About(){
    return(
       

        <div className={styles.about}>

        
            <div className={styles.imageWrapper}>
                <Image
                src={Logo}
                alt="Ferreira's Barber Studio"
                className="mw-[150px]"
                priority></Image>
                
            </div>

  
            <div className={styles.textContent}>
                
                <h1 className="text-primary text-sm uppercase tracking-widest font-body">
                Nossa História
                </h1>

                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Tradição que se
                <span className="block">Reinventa</span>
                </h2>

                <div className="space-y-4 text-muted-foreground font-body leading-relaxed mt-6">
                   
                    <p>
                        Desde 2015, combinamos técnicas clássicas de barbearia
                        com as tendências mais modernas. Cada corte é uma experiência única,
                        pensada para realçar sua personalidade.
                    </p>

                    <p>
                        Nossos profissionais são especialistas certificados,
                        constantemente atualizados com as últimas técnicas e estilos
                        internacionais.
                    </p>
                
                </div>
            
            </div>

        </div>

    )
}