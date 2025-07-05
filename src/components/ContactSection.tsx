
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'john.developer@cosmic.dev',
      href: 'mailto:john.developer@cosmic.dev',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      href: 'https://github.com/johndeveloper',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/johndeveloper',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      icon: <Instagram size={32} />,
      label: 'Instagram',
      href: 'https://instagram.com/johndeveloper',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-400/10'
    },
    {
      icon: <Facebook size={32} />,
      label: 'Facebook',
      href: 'https://facebook.com/johndeveloper',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      icon: <MessageCircle size={32} />,
      label: 'WhatsApp',
      href: 'https://wa.me/15551234567',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-400/10'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to embark on a cosmic coding journey together? Let's connect across the digital universe!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                  <p className="text-gray-400">{method.value}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-full bg-slate-800/50 border border-gray-600/30 text-gray-400 transition-all duration-300 ${social.color} ${social.bgColor}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-purple-500/20 rounded-2xl p-12 backdrop-blur-sm"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.3)',
                '0 0 40px rgba(168, 85, 247, 0.6)',
                '0 0 20px rgba(168, 85, 247, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block text-6xl mb-6"
          >
            🚀
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Next Project?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a stellar website, a cosmic mobile app, or want to collaborate on an 
            interstellar project, I'm here to help bring your vision to life!
          </p>
          <Button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-full text-lg"
            onClick={() => window.open('mailto:john.developer@cosmic.dev', '_blank')}
          >
            <Mail className="mr-2" size={20} />
            Let's Create Something Amazing
          </Button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-cyan-400/10">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Mail size={60} />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-purple-400/10">
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <MessageCircle size={80} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
