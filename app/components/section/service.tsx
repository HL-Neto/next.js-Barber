import styles from "@/app/components/section/service.module.css"
import { Scissors, Sparkle,EyeClosed,PersonStandingIcon} from "lucide-react";

export default function Local(){
    return(

            <div className={styles.service_body}>
            
            <div className="text-center">
                <span className="text-primary text-sm uppercase tracking-widest font-body">
                    O que oferecemos
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 pb-32 line-decoration text-title">
                    Nossos Serviços
                </h2>
            </div>

            
           
            <div  className={styles.service}> 

                
            <div className={styles.colum1}>
                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Scissors className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">corte social <br/>R$40</h3>
                </div>

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Scissors className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">corte degradê <br/> R$40</h3>
                </div>

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Scissors className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">corte tesoura <br/>R$40</h3>
                </div>

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Scissors className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">degradê navalha<br/>R$45</h3>
                </div>
            </div>
            <div className={styles.colum1}>
               

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Sparkle className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">Cabelo & Barba<br/>R$70</h3>
                </div>

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <Sparkle className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">Pai & Filho<br/>R$75</h3>
                </div>
                
                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <EyeClosed className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">Sombranelhas <br/>R$10</h3>
                </div>

                <div className="bg-secondary/80 border border-border p-8 h-[180px] w-[220px] flex flex-col items-center justify-center text-center">
                    <PersonStandingIcon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="text-xl font-semibold">Acabamento <br/>R$20</h3>
                </div>

                
            </div>

                





            </div>
        </div>
    
    )
}