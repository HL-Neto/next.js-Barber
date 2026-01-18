import styles from "./agendamento.module.css"


export default function agendamento(){
    return(
        <div  className={styles.agendamento}> 


        <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-primary text-sm uppercase tracking-widest font-body  pl-[36%]"> 
                Pronto para uma transformação? 
            </h1>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 pl-56">
                Agende seu Horário
            </h2>
            
            <div className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-20 ">
                <p >
                    Reserve agora e garanta uma experiência premium. A  tendemos com hora marcada
                
                </p>
                <p className="pl-[40%]">
                    para sua comodidade.</p> 
                </div>
        </div>




        </div>
    )
}