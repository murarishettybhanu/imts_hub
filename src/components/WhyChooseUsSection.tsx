import { CheckCircle, Users, Award, Zap } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Experience',
      description: '10+ years of proven expertise in electronics design, development, and manufacturing with a strong track record in defense and aerospace sectors.',
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'State-of-the-art design tools, manufacturing equipment, and testing facilities to ensure highest quality products and solutions.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated team of experienced engineers and technocrats committed to delivering innovative solutions tailored to your needs.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Rigorous quality control processes and international standards compliance (Mil Grade, Space Grade, Industrial Grade) for every project.',
    },
    {
      icon: Award,
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality. We deliver value for money with optimized manufacturing processes.',
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service to ensure your projects are always on track.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Your Complete <span className="gradient-text">Electronics Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver comprehensive electronics solutions with unmatched expertise, 
            advanced technology, and dedicated customer support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
