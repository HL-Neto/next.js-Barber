import styles from "./agendamento.module.css"


export default function agendamento(){
    return(
        <div  className={styles.agendamento}> 


                
            <h1 className="text-primary text-sm uppercase tracking-widest font-body"> 
                Pronto para uma transformação? 
            </h1>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Agende seu Horário
            </h2>
            
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-12">
                Reserve agora e garanta uma experiência premium. Atendemos com hora marcada
                para sua comodidade.
            </p> 





        </div>
    )
}