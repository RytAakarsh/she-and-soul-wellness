const ProblemSolution = () => {
  const cards = [
    {
      id: "01",
      problem: "70% women avoid seeking help due to stigma.",
      solution: "Anonymous peer-to-peer support."
    },
    {
      id: "02", 
      problem: "1 doctor per 500 patients in India → poor accessibility.",
      solution: "AI-powered chatbot for instant help"
    },
    {
      id: "03",
      problem: "Expensive treatment (~₹1500–2000 per session).",
      solution: "Tele-consultations at 70% less than clinic visits."
    },
    {
      id: "04",
      problem: "Lack of safe, judgment free spaces.",
      solution: "All-in-one women's wellness platform covering everything from menstruation, maternity, and mental health to breast cancer awareness and self-care"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Problem</span> & Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've identified the key challenges women face in healthcare and created innovative solutions to address them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flip-card fade-in-up stagger-${index + 1}`}
            >
              <div className="flip-card-inner">
                {/* Front Side - Problem */}
                <div className="flip-card-front">
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-4xl font-bold text-gradient mb-4">
                      {card.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-destructive mb-4">
                        Problem
                      </h3>
                      <p className="text-foreground font-medium leading-relaxed">
                        {card.problem}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-4 opacity-75">
                      Hover to see solution →
                    </div>
                  </div>
                </div>

                {/* Back Side - Solution */}
                <div className="flip-card-back">
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-4xl font-bold text-gradient mb-4">
                      {card.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">
                        Solution
                      </h3>
                      <p className="text-foreground font-medium leading-relaxed">
                        {card.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Solutions Info */}
        <div className="mt-16 text-center fade-in-up stagger-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Comprehensive Care Platform
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our platform addresses the complete spectrum of women's health needs through technology-driven solutions, 
              making quality healthcare accessible, affordable, and stigma-free for every woman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;