import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input"
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Sports Avenue<br />
                    Jersey City, ST 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">info@sleek.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}