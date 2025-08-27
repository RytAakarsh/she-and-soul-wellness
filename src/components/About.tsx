import angelImage from '@/Pictures/Angel.jpg';
import ujjwalImage from '@/Pictures/Ujjwal.png';

const About = () => {
  const teamMembers = [
    {
      name: "Angel Kapoor",
      position: "Founder & CEO",
      image: angelImage
    },
    {
      name: "Ujjwal Kr. Singh",
      position: "Co-Founder",
      image: ujjwalImage
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient">She&Soul</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              She&Soul is a digital-first wellness platform designed exclusively
              for women. We provide a safe, stigma-free, and accessible space
              where women can take care of their mental, emotional, and
              reproductive health.
            </p>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-gradient italic border-l-4 border-primary pl-6 mt-12">
              "Because every woman deserves a safe space to heal and grow."
            </blockquote>
          </div>
        </div>

        {/* Team Section */}
        <div className="fade-in-up stagger-2">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet <span className="text-gradient">The Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`card-float bg-white rounded-2xl p-8 shadow-card fade-in-up stagger-${index + 3}`}
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Member Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-soft bg-gradient-to-br from-primary/10 to-secondary/10 p-2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center sm:text-left flex-1">
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h4>
                    <p className="text-lg text-gradient font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;