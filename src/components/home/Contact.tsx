
import React, { useState } from 'react';
import { Send, Linkedin, Mail, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Thanks for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after a delay
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-darker-bg relative">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Let's discuss your project or potential opportunities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="neuro-panel p-8">
              <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-card-gradient flex items-center justify-center text-white group-hover:bg-accent-gradient transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>contact@example.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-card-gradient flex items-center justify-center text-white group-hover:bg-accent-gradient transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/anderson</span>
                </a>
              </div>
              
              <div className="mt-10 pt-6 border-t border-neuro-light/10">
                <a 
                  href="#" /* Will link to a PDF resume */
                  className="neuro-button flex items-center justify-center gap-2 w-full py-3 text-white hover:text-accent-purple"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="neuro-panel p-8">
              <h3 className="text-xl font-display font-bold mb-4">Let's Connect</h3>
              <p className="text-text-secondary">
                Looking for a front-end developer with data expertise? I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>
          </div>
          
          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="neuro-panel p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neuro-button px-6 py-3 w-full text-white flex items-center justify-center gap-2 hover:text-accent-purple disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
