import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    title: 'DC-DC Converters',
    category: 'Power Electronics',
    description: 'High-efficiency DC-DC converters for military and space applications.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
  },
  {
    title: 'Power Supplies',
    category: 'Power Systems',
    description: 'Custom power supply solutions for industrial and defense sectors.',
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=800',
  },
  {
    title: 'Controller Modules',
    category: 'Embedded Systems',
    description: 'Advanced controller modules for automation and control systems.',
    image: 'https://images.unsplash.com/photo-1555617766-c94804975da3?w=800',
  },
  {
    title: 'RF & Wireless',
    category: 'Communication',
    description: 'RF modules and wireless communication solutions for various applications.',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800',
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Quality <span className="gradient-text">Electronics Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our range of high-reliability electronic products designed 
            for demanding applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 aspect-video md:aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <span className="text-primary text-sm font-medium mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="ghost" className="w-fit p-0 text-primary hover:bg-transparent hover:text-accent">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
