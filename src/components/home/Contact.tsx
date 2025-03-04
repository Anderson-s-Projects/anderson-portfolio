import React, { useState } from 'react';
import { Send } from 'lucide-react';
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
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, you would send this data to a backend service
    // For now, we'll simulate a form submission with a delay
    const mailtoLink = `mailto:andersonpaulino1982@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

    // Open the user's email client
    window.open(mailtoLink, '_blank');

    // Simulate form submission completion
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
  return <section id="contact" className="py-16 bg-darker-bg relative md:py-0">
      <div className="section-container max-w-2xl mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Let's discuss your project or potential opportunities
        </p>
        
        <div className="mt-12">
          <div className="neuro-panel p-8">
            <h3 className="text-xl font-display font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full neuro-inset bg-card-bg text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple" placeholder="Your message here..." />
              </div>
              
              <button type="submit" disabled={isSubmitting} className="neuro-button px-6 py-3 w-full text-white flex items-center justify-center gap-2 hover:text-accent-purple disabled:opacity-70">
                {isSubmitting ? <>Processing...</> : <>
                    Send Message <Send className="w-4 h-4" />
                  </>}
              </button>
              
              {submitStatus && <div className={`mt-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {submitStatus.message}
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;