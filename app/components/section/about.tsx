import styles from "./about.module.css"


export default function About(){
    return(
        <div  className={styles.about}> 

            
            <h1 className="text-primary text-sm uppercase tracking-widest font-body">
              Nossa História
            </h1>
           
            
            
            
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Tradição que se
                
                < h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">Reinventa</h3>
            </h2>
            
            <br/>

            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                    Desde 2015, combinamos técnicas clássicas de barbearia <br/>
                    com as tendências mais modernas. Cada corte é uma experiência única,<br/>
                    pensada para realçar sua personalidade.<br/>
                </p>
                
                <br/>
                
                <p>
                    Nossos profissionais são especialistas certificados,<br/>
                    constantemente atualizados com as últimas técnicas e estilos <br/>
                    internacionais.
                </p>
            </div>




        </div>
    )
}