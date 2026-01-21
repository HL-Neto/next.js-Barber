import styles from "./local.module.css"
import { Phone, Clock, MapPin } from "lucide-react";

export default function Local() {
  return (
    <div className={styles.local} id="info">
        
        <h1 className="font-display block md:hidden font text-4xl md:text-5xl font-bold mt-4 line-decoration text-title">+ INFORMAÇÕES </h1>
      
      <div className={styles.localbox}>
         <h1 className="font-display hidden md:block font text-4xl md:text-5xl font-bold mt-4 line-decoration text-title">+ INFORMAÇÕES </h1>
        <div>
          <MapPin className="w-8 h-8 text-primary mb-4 text-red-700" />
          <h3 className="font-display text-xl font-semibold mb-2 text-red-700">Endereço</h3>
          <p>R. Vandick Pinto Filgueiras, 486 - Tambauzinho, João Pessoa - PB, 58043-022, Brasil</p>
        </div>

        {/* Caixa 2 */}
        <div>
          <Clock className="w-8 h-8 text-primary mb-4 text-yellow-500" />
          <h3 className="font-display text-xl font-semibold mb-2 text-yellow-500">Funcionamento</h3>
          <p>Segunda a Sexta: 10h às 19h / Sábado: 10h às 19h / Domingo: Fechado</p>
        </div>
      </div>

      {/* Mapa */}
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.017286183615!2d-34.8412163!3d-7.123993400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd4a96e2305d%3A0x1957c05dc8f828a6!2sR.%20Vandick%20Pinto%20Filgueiras%2C%20486%20-%20Tambauzinho%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058043-022!5e0!3m2!1spt-BR!2sbr!4v1768932983147!5m2!1spt-BR!2sbr"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Ferreira's Barber Studio"
          
        />
      </div>
    </div>
  )
}
