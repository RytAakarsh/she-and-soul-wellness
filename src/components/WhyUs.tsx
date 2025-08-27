import { Shield, Heart, Users, Zap } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Stigma-Free",
      description: "Anonymous support in a judgment-free environment"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comprehensive Care",
      description: "From menstruation to mental health, we cover it all"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with women who understand your journey"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "AI-powered support available 24/7"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient">Us</span>?
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gradient mb-6">
              Everything at One Place
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              She&Soul brings everything women need in one safe space
            </p>
          </div>
        </div>

        {/* Main Value Proposition */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-floating mb-12 fade-in-up stagger-1">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto">
              Covers the full spectrum of women's health concerns — from menstruation and
              maternity to mental health and breast cancer awareness.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-float bg-white rounded-2xl p-6 shadow-card text-center fade-in-up stagger-${index + 2}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up stagger-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white shadow-floating">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of a movement that's transforming women's healthcare. Get early access to our platform.
            </p>
            <button
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary font-bold px-8 py-4 rounded-full shadow-card hover:shadow-floating transition-all duration-300 hover:scale-105"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;