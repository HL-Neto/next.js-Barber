import { Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" text-title  text-center">
      {/* Conteúdo principal */}
      
        
        <div className="flex justify-center gap-6 p-2 py-5">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-pink-500"
          >
            <Instagram className="w-5 h-5" />
          </a>
          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-400"
          >
            <Twitter className="w-5 h-5" />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-700"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
     

      {/* Copyright */}
      <p className="text-gray-400 text-sm">
        © 2026 Ferreira's Barber Studio. Todos os direitos reservados.
      </p>
    </footer>
  )
}
