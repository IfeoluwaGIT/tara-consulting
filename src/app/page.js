import Metrics from "./components/Metrics";
import Testimonial from "./components/Testimonial";
import Apart from "./components/Apart";
import Header from "./components/Header";
import Blog from "./components/Blog";
import WhatsAppChatSupport from "./components/Whatsapp";
import ClientLogos from "./components/ClientLogos";
import AboutTara from "./components/AboutTara";




export default function Home() {
  return (
    <>
      <Header />
      <Apart />
      <AboutTara />
      <Testimonial />
      <Metrics />
      <Blog />
      <WhatsAppChatSupport />
      <ClientLogos />

    </>
  );
}
