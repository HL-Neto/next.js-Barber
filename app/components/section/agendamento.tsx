import styles from "./agendamento.module.css"
import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin } from "lucide-react";


export default function agendamento(){
    return(
        
        <div  className={styles.agendamento}> 


        
            <span className="text-primary text-sm uppercase tracking-widest font-body "> 
                Pronto para uma transformação? 
            </span>
            
            <span className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 ">
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
                
                <Button  size="lg"> <Phone className="w-5 h-5" />(11) 99999-9999</Button>
                <Button  size="lg" className="pr-16"> <Instagram className="w-5 h-5"/>@barbearia</Button>
            
            </div>

            <div className="bg-secondary/50 border border-border p-4  ">
                
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Nossa Localização</h3>
                <p className="text-muted-foreground font-body">
                Rua NaoSei, 1234 - Tambauzinho<br />
                João Pessoa - PB, 01304-001
                </p>
            

            </div>

            




        </div>
    )
}