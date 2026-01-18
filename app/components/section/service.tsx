import styles from "@/app/components/section/service.module.css"
import { Scissors } from "lucide-react";

export default function Local(){
    return(

        <div>
            
            <div className="text-center mt-20 ">
                <span className="text-primary text-sm uppercase tracking-widest font-body">
                    O que oferecemos
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 line-decoration">
                    Nossos Serviços
                </h2>
            </div>
            <div  className={styles.service}> 

                

                <div className="bg-secondary/50 border border-border p-20  ">
                    
                    <Scissors className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">CORTE SIMPLES</h3>
                 
                </div>
                <div className="bg-secondary/50 border border-border p-20  ">
                    
                    <Scissors className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">CORTE + DEGRADÊ</h3>
                    

                </div>
                <div className="bg-secondary/50 border border-border p-20  ">
                    
                    <Scissors className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">COMBO FAMILIA</h3>
                    
                    
                

                </div>





            </div>
        </div>
    
    )
}