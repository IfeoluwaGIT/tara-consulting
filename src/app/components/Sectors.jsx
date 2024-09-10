import Image from "next/image";

const Data = [
  {
    id: 1,
    icon: '/agric.jpg',
    title: 'Agriculture',
    description: 'This is a brief description for box 1.',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    icon: '/IT.jpg',
    title: 'Information Technology',
    description: 'This is a brief description for box 2.',
    buttonText: 'Learn More',
  },
  {
    id: 3,
    icon: '/oil.jpg',
    title: 'Oil and Gas',
    description: 'This is a brief description for box 3.',
    buttonText: 'Learn More',
  },
  {
    id: 4,
    icon: '/telecoms.jpg',
    title: 'Telecommunications',
    description: 'This is a brief description for box 4.',
    buttonText: 'Learn More',
  },
  {
    id: 5,
    icon: '/manufacturing.jpg',
    title: 'Manufacturing',
    description: 'This is a brief description for box 5.',
    buttonText: 'Learn More',
  },
  {
    id: 6,
    icon: '/healthcare.jpg',
    title: 'Healthcare',
    description: 'This is a brief description for box 6.',
    buttonText: 'Learn More',
  },
  {
    id: 7,
    icon: '/Hospitality.jpg',
    title: 'Hospitality',
    description: 'This is a brief description for box 7.',
    buttonText: 'Learn More',
  },
  {
    id: 8,
    icon: '/retail.jpg',
    title: 'Retail',
    description: 'This is a brief description for box 8.',
    buttonText: 'Learn More',
  },
];

const Sectors = () => {
  return (
    <section className="px-[10%] py-12 bg-gray-50">
      {/* Two equal halves with text */}
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What services do we offer for your business</h2>
          <p className="text-gray-600">
            This is some text on the left side. You can add any content you want here.
          </p>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Right Side Title</h2>
          <p className="text-gray-600">
            This is some text on the right side. You can add any content you want here.
          </p>
        </div>
      </div>

      {/* Eight boxes in two rows */}
      <div className="grid grid-cols-4 gap-4">
        {Data.map((box) => (
          <div key={box.id} className="bg-white shadow rounded overflow-hidden">
            <div className="relative h-40 w-full">
              <Image 
                src={box.icon} 
                alt={`Icon ${box.id}`} 
                fill 
                className="object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{box.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
