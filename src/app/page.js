import Metrics from "./components/Metrics";
import Testimonial from "./components/Testimonial";
import Apart from "./components/Apart";
import ServicesSection from "./components/ServicesSection";
import Sectors from "./components/Sectors";
import JobOpenings from "./components/JobOpenings";
import Header from "./components/Header";



export default function Home() {
  return (
    <>
    <Header />
      <Metrics />
      <Apart />
      <ServicesSection />
      <Sectors />
      <JobOpenings />
      <Testimonial />
    </>
  );
}
