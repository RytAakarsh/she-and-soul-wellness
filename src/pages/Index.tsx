import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProblemSolution from '@/components/ProblemSolution';
import WhyUs from '@/components/WhyUs';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProblemSolution />
      <WhyUs />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
