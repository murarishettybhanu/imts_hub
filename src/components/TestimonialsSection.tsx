import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vasantha Lakshmi',
    role: 'Client',
    content:
      'I have a very good experience with IMTS. I highly recommend this education service to my friends and family members. Service is very good and understandable. Megha ma\'am is very fast responding.',
    rating: 5,
  },
  {
    name: 'Srikanth Gs',
    role: 'Client',
    content:
      'I have a very good experience with IMTSHUB. They delivered PCB designs promptly and their quotes are mostly competitive in the market. Company leadership developed an enthusiastic and energetic team to deliver customer needs.',
    rating: 5,
  },
  {
    name: 'Rama Krishna',
    role: 'Client',
    content:
      'I have a great experience with IMTSHUB. Excellent Multilayer PCB designs and Components & Materials delivered on time. Reasonable quotations. The team works around the clock to meet customer timelines.',
    rating: 5,
  },
  {
    name: 'Avinash Thota',
    role: 'Client',
    content:
      'One stop shop for all your needs - PCB design, System Level Designs, Sensor based systems, Production, NPI\'s, and Mechanical Enclosures. Always ready to fulfill client requirements with software assistance and training for fresh graduates.',
    rating: 5,
  },
  {
    name: 'Sankar Rao Battina',
    role: 'Client',
    content:
      'This hub works well and completes jobs in the given time period with reasonable cost. Very respectful response with customers. Their working style is great and they solve problems very easily.',
    rating: 5,
  },
  {
    name: 'Vineeth Konda',
    role: 'Client',
    content:
      'Excellent service by team. We can get solutions on time with competitive prices. Keep it up and continue your amazing work. Highly satisfied with the service delivery and quality.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by leading organizations in defense, aerospace, and industrial sectors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 relative group hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
