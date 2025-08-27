import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent! 📧",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about She&Soul? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-up stagger-1">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-floating">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full text-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up stagger-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're interested in partnerships, have questions about our platform, 
                  or want to share your story, we're here to listen.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <a 
                      href="mailto:angel.founder@sheandsoul.co.in"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      angel.founder@sheandsoul.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <a 
                      href="tel:+918882509991"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +91 8882509991
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Ready to Transform Women's Healthcare?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Join us in creating a safer, more accessible healthcare ecosystem for women everywhere.
                </p>
                <button
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Join Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;