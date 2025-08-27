import heroImage from '@/Pictures/HeroImage.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Empowering</span>
              <br />
              <span className="text-foreground">Women</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              She&Soul is a digital-first wellness platform designed exclusively
              for women. We provide a safe, stigma-free, and accessible space
              where women can take care of their mental, emotional, and
              reproductive health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Join Our Community
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative fade-in-up stagger-2">
            <div className="relative overflow-hidden rounded-2xl shadow-floating bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <img
                src={heroImage}
                alt="Women's wellness and empowerment"
                className="w-full h-[600px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;