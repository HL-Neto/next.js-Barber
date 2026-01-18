import styles from "./hero.module.css"
import Image from "next/image";
import Logo from "@/app/assets/Logo do Ferreira's Barber Studio.png";
import { Scissors, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function Hero(){
    return(
        <div  className={styles.hero}> 

            <div className={styles.center_logo}>
               
                <Image src={Logo} alt="Ferreira's Barber Studio" className={styles.logo} priority />
            
            </div>
            
            <div className="pt-48">

                    <span > Experiência premium em barbearia masculina. Tradição, qualidade e estilo em </span><br/>
                    <span className=" pl-56">cada detalhe.</span>

                <div className="pt-20 pl-24 flex gap-4">

                    <Button  size="lg">Agendar Horário</Button><Button  size="lg">Nossos Serviços</Button>
                
                </div>
                
                <div className="flex items-center pt-14 pl-44">
                
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Seg - Sáb: 09:00 - 20:00</span>
                    
                </div>
            
            </div>
            
            

        </div>

        

       
    )
}