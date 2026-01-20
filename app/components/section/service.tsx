import styles from "@/app/components/section/service.module.css"
import { Scissors, Sparkle,EyeClosed,Star} from "lucide-react";

export default function Local(){
    return(

            <div className={styles.service_body} id="servicos">
            
                <div className="text-center">
                    <span className="text-primary text-sm uppercase tracking-widest font-body">
                        O que oferecemos
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 pb-20 line-decoration text-title">
                        Nossos Serviços
                        <div className="w-28 h-1 bg-black/25 mt-6 mx-auto rounded-lg " />
                    </h2>  
                    
                </div>

                
            
                <div  className={styles.service}> 

                    
                    <div className={styles.colum}>
                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Scissors className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold">corte <span className="text-title">social</span><br/>R$40</h3>
                        </div>

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Scissors className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold">corte <span className="text-title">degradê</span> <br/> R$40</h3>
                        </div>

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Scissors className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold">corte <span className="text-title">tesoura</span><br/>R$40</h3>
                        </div>

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Scissors className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold">degradê <span className="text-title">navalha</span><br/>R$45</h3>
                        </div>
                    </div>
                    <div className={styles.colum}>
                    

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg  hover:shadow-xl transition-shadow  duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Sparkle className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold text-title">Cabelo <span className="text-body">&</span> <span className="text-title">Barba</span><br/><span className="text-body">R$70</span></h3>
                        </div>

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Sparkle className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold text-title ">Pai <span className="text-body">&</span> <span className="text-title">Filho</span><br/><span className="text-body pr-2">R$75</span></h3>
                        </div>
                        
                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <EyeClosed className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold text-title">Sombrancelhas <br/><span className="text-body">R$10</span></h3>
                        </div>

                        <div className="bg-black/5 border border-border p-8 h-[200px] w-[240px] flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transition-transform duration-300 hover:bg-black/10">
                            <Star  className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-semibold text-title">Acabamento <br/><span className="text-body">R$20</span></h3>
                        </div>

                        
                    </div>

                </div>
        </div>
    
    )
}