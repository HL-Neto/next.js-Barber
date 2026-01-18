import Menu from "@/app/components/menu"
import Hero from "@/app/components/hero"
import About from "@/app/components/section/about"
import Agendamento from "./components/section/agendamento";
import Service from "@/app/components/section/service"
import Footer from "./components/footer";
import Local from "./components/section/local"



export default function Home() {
  return (
    
    <>
      
      <Menu/> 

      <Hero/>

      <About/> 

      <Service/>

      <Agendamento/>

      <Local/>      

      <Footer/>
    
    </>
    
         
  );
}    






