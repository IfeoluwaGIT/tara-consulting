import Metrics from "./components/Metrics";
import Testimonial from "./components/Testimonial";
import Apart from "./components/Apart";
import ServicesSection from "./components/ServicesSection";
import JobOpenings from "./components/JobOpenings";
import Header from "./components/Header";
import ContactCollectionForm from "./components/ContactCollectionForm";
import Blog from "./components/Blog";
import WhatsAppChatSupport from "./components/Whatsapp";
import ClientLogos from "./components/ClientLogos";




export default function Home() {
  return (
    <>
      <Header />
      <Apart />
    <div className="">
      <ServicesSection />
      </div>
      
      <Testimonial />
      <Metrics />
      <Blog />
      <WhatsAppChatSupport />
      <ClientLogos />

    </>
  );
}
