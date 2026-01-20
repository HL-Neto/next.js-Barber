import styles from "./agendamento.module.css"
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";


export default function agendamento(){
    return(
        
        <div  className={styles.agendamento}> 


        
            <span className="text-primary text-sm uppercase tracking-widest font-body "> 
                Pronto para uma transformação? 
            </span>
            
            <span className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6  text-title">
                Agende seu Horário
            </span>
            
            <div className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-20 ">
                <p >
                    Reserve agora e garanta uma experiência premium. A  tendemos com hora marcada
                
                </p>
                <p className="pl-[37%]">
                    para sua comodidade.</p> 
                
            </div>

            <div className="  flex gap-4 pb-10 ">
                
                <div className="bg-secondary/50 border border-border p-24">
                
                    < MessageCircle  className="w-10 h-10 text-primary mx-auto mb-4 " />
                    <h3 className="font-display text-xl font-semibold mb-2">Agende pelo WhatsApp</h3>
                    <p className="text-muted-foreground font-body mb-4">
                    Envie uma menssagem e marque seu<br/> horário com facilidade
                    </p>

                    <Button  size="lg"> <MessageCircle className="w-5 h-5" />CHAMAR NO WHATSAPP</Button>
                
                </div>

                   <div className="bg-secondary/50 border border-border p-24">
                
                    < Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">Agende pelo Telefone</h3>
                    <p className="text-muted-foreground font-body mb-4">
                    Nos ligue a qualquer momento <br/> estaremos esperando
                    </p>

                    <Button  size="lg"> <Phone className="w-5 h-5" />FAZER UMA LIGAÇÃO</Button>
                
                </div>
            
            </div>

          

            




        </div>
    )
}