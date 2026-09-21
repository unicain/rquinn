import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import SobreRoberta from "./components/SobreRoberta";
import Equipe from "./components/Equipe";
import Espaco from "./components/Espaco";
import Depoimentos from "./components/Depoimentos";
import DepoimentosVideo from "./components/DepoimentosVideo";
import Localizacao from "./components/Localizacao";
import FAQ from "./components/FAQ";
import VideoFAQ from "./components/VideoFAQ";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import { TextProvider } from "./context/TextContext";

export default function App() {
  return (
    <TextProvider>
      <div className="min-h-screen bg-cream text-ink antialiased">
        <Header />
        <main>
          <Hero />
          <Servicos />
          <Diferenciais />
          <SobreRoberta />
          <Equipe />
          <Espaco />
          <Depoimentos />
          <DepoimentosVideo />
          <Localizacao />
          <FAQ />
          <VideoFAQ />
          <Contato />
        </main>
        <Footer />
      </div>
    </TextProvider>
  );
}
