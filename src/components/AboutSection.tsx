import { Target, Lightbulb, Shield } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Your Trusted Partner in{' '}
            <span className="gradient-text">Electronics Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            IMTS HUB is a Business Accelerator and startup incubator specializing in electronics 
            hardware design and fabrication, founded by a team of experienced technocrats and engineers.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: 'Our Vision',
                description:
                  'To be a leader in Electronic systems & sub-systems, driving innovation and excellence in every project we undertake.',
              },
              {
                icon: Lightbulb,
                title: 'Our Mission',
                description:
                  'To be customer-focused and globally competitive in supply of Electronic Systems through Quality, Technology and Creativity.',
              },
              {
                icon: Shield,
                title: 'Our Objectives',
                description:
                  'To concentrate on core technology areas of Electronics Converters for high reliability and develop custom-built modules to international standards.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1">
              <img 
                src="/logo.png" 
                alt="IMTS HUB - Electronics Innovation" 
                className="w-full h-full rounded-xl object-contain bg-gradient-to-br from-primary/10 to-accent/10 p-12"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 glass-card px-6 py-4 animate-float">
              <div className="text-2xl font-display font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
