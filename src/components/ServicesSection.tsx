import { CircuitBoard, Cpu, Settings, Wrench, Zap, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: CircuitBoard,
    title: 'Hardware & PCB Design',
    description:
      'Complete schematic and PCB design services including analog, digital, and antenna design for multilayer boards.',
    features: ['Schematic Design', 'PCB Antenna Design', 'Analog & Digital Circuits'],
  },
  {
    icon: Factory,
    title: 'PCB Fabrication & Assembly',
    description:
      'High-quality PCB fabrication meeting Mil Grade, Space Grade, and Industrial Grade specifications.',
    features: ['Mil/Space Grade', 'SMD & THT Assembly', 'Complete Testing'],
  },
  {
    icon: Cpu,
    title: 'Embedded Solutions',
    description:
      'Custom embedded system development including firmware, FPGA/CPLD, and microcontroller programming.',
    features: ['Firmware Development', 'FPGA/CPLD Design', 'IoT Solutions'],
  },
  {
    icon: Settings,
    title: 'Product Development',
    description:
      'End-to-end product development from concept to manufacturing with rapid prototyping capabilities.',
    features: ['Concept to Production', 'Rapid Prototyping', 'Design for Manufacturing'],
  },
  {
    icon: Wrench,
    title: 'Refurbishment & Repair',
    description:
      'Expert repair and refurbishment services for electronic equipment, especially defense systems.',
    features: ['Equipment Repair', 'Component Sourcing', 'Technical Support'],
  },
  {
    icon: Zap,
    title: 'Testing & Validation',
    description:
      'Comprehensive testing and validation services ensuring product quality and compliance.',
    features: ['Functional Testing', 'EMI/EMC Testing', 'Quality Assurance'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive <span className="gradient-text">Electronics Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From design to manufacturing, we offer end-to-end electronics solutions 
            tailored to meet your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
