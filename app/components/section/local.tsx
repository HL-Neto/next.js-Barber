import styles from "./local.module.css"

import { Phone,Clock, MapPin } from "lucide-react";


export default function Footer(){
    return(
        <div  className={styles.local}> 

            <div className={styles.localbox}>
                <div className="bg-secondary/50 border border-border p-5  ">
                    
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">Endereço</h3>
                    <p>Rua das Barbearias, 123 Miramar - João Pessoa, PB</p>
                 
                </div>
                <div className="bg-secondary/50 border border-border p-5  ">
                    
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold mb-2">Funcionamento</h3>
                    <p> Segunda a Sexta: 9h às 20h / Sábado: 9h às 18h</p>
                    
                </div>

            </div>

            <div className={styles.map}>
                <div className="rounded-xl overflow-hidden md:h-[100%]  border border-border/30 ">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974747376127!2d-46.65390542374455!3d-23.561684961650774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1702000000000!5m2!1spt-BR!2sbr"
                    className="w-full h-full" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Ferreira's Barber Studio"
                    />
                </div>
            </div>





        </div>
    )
}