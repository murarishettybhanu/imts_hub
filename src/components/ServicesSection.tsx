import { CircuitBoard, Cpu, Settings, Wrench, Zap, Factory, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { getImagePath } from '@/lib/imagePath';

const services = [
  {
    icon: CircuitBoard,
    title: 'PCB Design & Fabrication',
    description:
      'Complete schematic and PCB design services with high-quality fabrication meeting Mil Grade, Space Grade, and Industrial Grade specifications.',
    features: ['Schematic Design', 'PCB Antenna Design', 'Multilayer Boards'],
    images: [
      getImagePath('/services/PCB Design & Fabrication/01.jpg'),
      getImagePath('/services/PCB Design & Fabrication/02.jpg'),
      getImagePath('/services/PCB Design & Fabrication/03.jpg'),
    ],
  },
  {
    icon: Cpu,
    title: 'SI, PI & Thermal Analysis',
    description:
      'Signal Integrity, Power Integrity, and Thermal Analysis for optimal PCB performance and reliability.',
    features: ['Signal Integrity', 'Power Integrity', 'Thermal Management'],
    images: [
      getImagePath('/services/SI, PI & Thermal Analysis/04.jpg'),
      getImagePath('/services/SI, PI & Thermal Analysis/05.jpg'),
      getImagePath('/services/SI, PI & Thermal Analysis/06.jpg'),
    ],
  },
  {
    icon: Factory,
    title: 'Components Procurement & PCB Assembly',
    description:
      'Complete component sourcing and PCB assembly including SMD and THT assembly with rigorous testing.',
    features: ['Component Sourcing', 'SMD & THT Assembly', 'Quality Testing'],
    images: [
      getImagePath('/services/Components Procurement & PCB Assembly/07.jpg'),
      getImagePath('/services/Components Procurement & PCB Assembly/08.jpg'),
      getImagePath('/services/Components Procurement & PCB Assembly/09.jpg'),
    ],
  },
  {
    icon: Wrench,
    title: 'Cable Harness & Unit Integration',
    description:
      'Professional cable harness design, fabrication, and complete system integration services.',
    features: ['Cable Harness Design', 'System Integration', 'Prototype Assembly'],
    images: [
      getImagePath('/services/Cable Harness & Unit Integration/11.jpg'),
      getImagePath('/services/Cable Harness & Unit Integration/12.jpg'),
      getImagePath('/services/Cable Harness & Unit Integration/13.jpg'),
    ],
  },
  {
    icon: Settings,
    title: 'Electronic Systems & Sub Systems',
    description:
      'Complete electronic systems and sub-systems development tailored to your specific requirements.',
    features: ['Custom Systems', 'Sub-system Design', 'End-to-End Solutions'],
    images: [
      getImagePath('/services/Electronic Systems & Sub Systems/34.jpg'),
      getImagePath('/services/Electronic Systems & Sub Systems/35.jpg'),
      getImagePath('/services/Electronic Systems & Sub Systems/36.jpg'),
    ],
  },
  {
    icon: Zap,
    title: 'Turnkey Solutions',
    description:
      'Complete turnkey solutions from concept to final product delivery, handling all aspects of manufacturing.',
    features: ['Concept to Production', 'Full Manufacturing', 'Quality Assurance'],
    images: [
      getImagePath('/services/Turnkey Solutions/17.jpg'),
      getImagePath('/services/Turnkey Solutions/18.jpg'),
      getImagePath('/services/Turnkey Solutions/19.jpg'),
    ],
  },
  {
    icon: Factory,
    title: 'Sheet Metal Boxes Design, Fabrication & Assembly',
    description:
      'Professional design and fabrication of sheet metal enclosures and boxes with precision assembly.',
    features: ['Enclosure Design', 'Precision Fabrication', 'Custom Assembly'],
    images: [
      getImagePath('/services/Sheet Metal boxes design, Fabrication & Assembly/22.jpg'),
      getImagePath('/services/Sheet Metal boxes design, Fabrication & Assembly/23.jpg'),
      getImagePath('/services/Sheet Metal boxes design, Fabrication & Assembly/24.jpg'),
    ],
  },
  {
    icon: CircuitBoard,
    title: 'Patch Antennas Design, Fabrication & Testing',
    description:
      'Specialized patch antenna design, fabrication, and comprehensive testing for optimal performance.',
    features: ['Antenna Design', 'Prototyping', 'Performance Testing'],
    images: [
      getImagePath('/services/Patch Antennas Design, Fabrication & Testing/28.jpg'),
      getImagePath('/services/Patch Antennas Design, Fabrication & Testing/29.jpg'),
      getImagePath('/services/Patch Antennas Design, Fabrication & Testing/30.jpg'),
    ],
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image Carousel */}
      <div className="relative mb-6 rounded-lg overflow-hidden h-48 bg-secondary group-hover:shadow-lg transition-all">
        <img
          src={service.images[currentImageIndex]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        
        {/* Carousel Controls */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full p-2 transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-primary w-6' : 'bg-primary/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
        <service.icon className="w-7 h-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mt-auto">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
