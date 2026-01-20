import styles from "./about.module.css"
import Image from "next/image";
import Logo from "@/app/assets/face.png"


export default function About(){
    return(
       

        <div className={styles.about}>

        
            <div className={styles.imageWrapper}>
                <Image
                src={Logo}
                alt="Ferreira's Barber Studio"
                priority></Image>
                
            </div>

  
            <div className={styles.textContent}>
                
                <h1 className="text-primary text-sm uppercase tracking-widest font-body pb-4 ">
                Nossa História
                </h1>

                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-title">
                Tradição que se
                <span className="block">Reinventa</span>
                </h2>

                <div className="space-y-4 text-muted-foreground font-body leading-relaxed mt-6 pb-10">
                   
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

                <div className="grid grid-cols-3  pt-8 border-t border-border ">
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary text-title">
                        9+ <div className="text-sm text-muted-foreground mt-1">Anos de experiência</div>
                    </div>
                    
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary text-title">
                        15k <div className="text-sm text-muted-foreground mt-1">Clientes satisfeitos</div>
                    </div>

                    <div className="font-display text-3xl md:text-4xl font-bold text-primary text-title">
                        5  <div className="text-sm text-muted-foreground mt-1">Barbeiros experts</div>
                    </div>

                </div>
                
            </div>

        </div>

    )
}