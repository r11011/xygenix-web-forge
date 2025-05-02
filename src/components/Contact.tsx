
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Globe, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Here you would typically send an email to agrowdynamics@gmail.com
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-oxygenix-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-Xygenix-600 font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get in Touch With Us</h2>
          <p className="text-gray-600">
            Have questions about our Web3 solutions or need assistance? Contact us today and our team will be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transform transition-transform hover:scale-[1.01]">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Send size={22} className="text-Xygenix-600 mr-2" />
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-Xygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800"
              >
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Globe size={22} className="text-Xygenix-600 mr-2" />
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us with any questions or inquiries about our Web3 technology solutions. We're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-full bg-Xygenix-100 text-Xygenix-600 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:agrowdynamics@gmail.com" className="text-gray-600 hover:text-Xygenix-600">
                      agrowdynamics@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-full bg-Xygenix-100 text-Xygenix-600 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+91-1234567890" className="text-gray-600 hover:text-Xygenix-600">
                      +91-1234567890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-full bg-Xygenix-100 text-Xygenix-600 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <address className="text-gray-600 not-italic">
                      WeWork, MG Road<br />
                      Bangalore, Karnataka 560001
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="h-10 w-10 rounded-full bg-Xygenix-100 text-Xygenix-600 flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM to 6:00 PM<br />
                      Saturday: 10:00 AM to 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-Xygenix-50 to-Xygenix-100 rounded-xl p-6 border border-Xygenix-100 shadow-md">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <Wallet size={18} className="text-Xygenix-600 mr-2" />
                Ready to explore Web3 solutions?
              </h4>
              <p className="text-gray-600 mb-4">
                Reach out to us today and let's discuss how our Web3 technologies can help your business innovate and grow.
              </p>
              <Button className="bg-gradient-to-r from-Xygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 w-full">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
