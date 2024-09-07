const Testimonial = () => {
    const testimonials = [
      {
        id: 1,
        name: "Jane Doe",
        organization: "ABC Corp",
        text: "Tara Consulting provided us with exceptional service, helping us streamline our processes and achieve our business goals.",
        rating: 5,
      },
      {
        id: 2,
        name: "John Smith",
        organization: "XYZ Ltd.",
        text: "Working with Tara Consulting was a game-changer for our company. Their expertise and dedication were evident throughout the project.",
        rating: 5,
      },
      {
        id: 3,
        name: "Alice Johnson",
        organization: "Tech Innovations",
        text: "The team at Tara Consulting went above and beyond to ensure our success. Their strategic insights were invaluable.",
        rating: 5,
      },
      {
        id: 4,
        name: "Michael Brown",
        organization: "Global Enterprises",
        text: "We were impressed with the professionalism and attention to detail that Tara Consulting brought to our project.",
        rating: 5,
      },
      {
        id: 5,
        name: "Emily White",
        organization: "Creative Solutions",
        text: "Tara Consulting helped us unlock our potential and reach new heights. Their support was critical to our success.",
        rating: 5,
      },
      {
        id: 6,
        name: "David Green",
        organization: "NextGen Tech",
        text: "Our experience with Tara Consulting was nothing short of excellent. Their team is knowledgeable, responsive, and results-driven.",
        rating: 5,
      },
    ];
  
    return (
      <section className="px-[10%] py-12 bg-header-blue text-white">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow rounded">
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.374 2.125 10.626 2.125 10.951 2.927l1.388 2.813c.142.29.417.49.736.532l3.106.451c.809.118 1.13 1.11.546 1.68l-2.25 2.194c-.227.222-.33.544-.277.862l.53 3.09c.14.815-.72 1.435-1.445 1.051L10 14.847l-2.777 1.46c-.725.384-1.585-.236-1.445-1.051l.53-3.09c.052-.318-.05-.64-.277-.862L3.781 8.403c-.584-.57-.263-1.563.546-1.68l3.106-.451c.319-.043.594-.243.736-.532L9.049 2.927z" />
                  </svg>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.organization}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  