"use client";

import styles from "./agendamento.module.css";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Instagram } from "lucide-react";

export default function Agendamento() {
  return (
    <div className={styles.agendamento} id="agendamento">
      <span className="text-primary text-sm uppercase tracking-widest font-body">
        Pronto para uma transformação?
      </span>

      <span className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 font-title text-title">
        Entre em Contato Conosco!
      </span>

      <div className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-20">
        <p>Nos contate e garanta uma experiência premium. Atendemos com hora marcada</p>
        <p>para sua comodidade.</p>
      </div>

      {/* Container dos blocos */}
      <div className={styles.blocos}>
        {/* Bloco Telefone */}
        <div className={styles.bloco}>
          <Phone className="w-10 h-10 text-primary mx-auto mb-4 text-blue-600 " />
          <h3 className="font-display text-xl font-semibold mb-2 ">Telefone</h3>
          <p className="text-muted-foreground font-body mb-4">
            Nos ligue a qualquer momento <br /> estaremos esperando
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-gray-100 hover:text-blue-500">
            <Phone className="w-5 h-5" /> +55 (83) 9964 - 4988
          </Button>
        </div>

        {/* Bloco WhatsApp */}
        <div className={styles.bloco}>
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4 text-whatsapp" />
          <h3 className="font-display text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-muted-foreground font-body mb-4">
            Envie uma mensagem e marque seu <br /> horário com facilidade
          </p>
          <a href="https://wa.me/558399644988" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp hover:bg-gray-100 hover:text-whatsapp">
              <MessageCircle className="w-5 h-5" /> CHAMAR NO WHATSAPP
            </Button>
          </a>
        </div>

        {/* Bloco Instagram */}
        <div className={styles.bloco}>
          <Instagram className="w-10 h-10 text-primary mx-auto mb-4 text-pink-600" />
          <h3 className="font-display text-xl font-semibold mb-2">Instagram</h3>
          <p className="text-muted-foreground font-body mb-4">
            Veja nossos posts e fotos <br /> mais recentes!
          </p>
          <a href="https://www.instagram.com/ferreiras_barbearia_/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-pink-500 hover:bg-gray-100 hover:text-pink-500">
              <Instagram className="w-5 h-5" /> VEJA NOSSOS POSTS
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
