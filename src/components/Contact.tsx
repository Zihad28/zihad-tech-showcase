
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with EmailJS...');
      
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Md. Jillur Rahman Zihad'
      };

      await emailjs.send(
        'service_a177rmz', // Service ID
        'template_usqdluu', // Template ID
        templateParams,
        'sLmZIsOZw6GEzprUN' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in software engineering and AI research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300">Email</h4>
                  <a href="mailto:mdjillur.zihad@gmail.com" className="text-purple-400 hover:text-purple-300">
                    mdjillur.zihad@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Phone</h4>
                  <a href="tel:+8801783402650" className="text-purple-400 hover:text-purple-300">
                    +880 1783 402650
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Location</h4>
                  <p className="text-gray-400">Ishwardi, Pabna, Bangladesh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">LinkedIn</h4>
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    linkedin.com/in/jillur-zihad
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">GitHub</h4>
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    github.com/jillur-zihad
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-teal-400 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
