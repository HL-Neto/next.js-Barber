import styles from "./about.module.css"


export default function About(){
    return(
        <div  className={styles.about}> 

            <h1> NOSSA HISTORIA</h1>
            <h2>
                Tradição que se
                Reinventa
            </h2>
            
            <br/>
            
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
    )
}