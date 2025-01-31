import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";

const App = () => {
  return (
    <div className="font-lora relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/Donut.jpeg")' }}
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative">
        <Header />
        <Hero />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default App;
