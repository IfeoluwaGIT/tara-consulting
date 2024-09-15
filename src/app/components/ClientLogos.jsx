import Image from 'next/image';

const ClientLogos = () => {
  // Sample logos (replace with your client logos)
  const logos = [
    { id: 1, src: '/dangote-logo.png', alt: 'Client 1' },
    { id: 2, src: '/mtn-icon-256x256-d5u8kgr7.png', alt: 'Client 2' },
    { id: 3, src: '/guaranty-trust-bank-icon-253x256-agkpobxa.png', alt: 'Client 3' },
    { id: 4, src: '/first-city-monument-bank-ltd-icon-256x256-65ag4uwc.png', alt: 'Client 4' },
    { id: 5, src: '/Total.png', alt: 'Client 5' },
    { id: 6, src: '/Seven-Up-Bottling-Company.jpg', alt: 'Client 6' },
  ];

  return (
    <section className="py-12 bg-header-peach border border-border-color"> 
      <h2 className="text-center text-2xl font-bold mb-8">Our Clients</h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap justify-center items-center space-x-8 md:space-x-24 px-4">
          {logos.map((logo) => (
            <div key={logo.id} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain sm:w-[100px] sm:h-[50px] md:w-[150px] md:h-[75px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
