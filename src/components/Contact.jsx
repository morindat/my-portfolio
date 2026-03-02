import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram, FiCopy, FiCheck, FiMessageCircle } from 'react-icons/fi';
import "../styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "papaadennis@gmail.com",
      link: "mailto:papaadennis@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiMessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+918570892210",
      link: "https://wa.me/918570892210",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Location",
      value: "New Delhi, IND",
      link: "https://maps.google.com/?q=New+Delhi+India",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      name: "GitHub",
      username: "@Papadizzo",
      link: "https://github.com/Papadizzo",
      color: "hover:bg-purple-500/20",
      borderColor: "group-hover:border-purple-500"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      username: "in/morindat",
      link: "https://linkedin.com/in/morindat",
      color: "hover:bg-blue-500/20",
      borderColor: "group-hover:border-blue-500"
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      name: "Instagram",
      username: "@justindizzo17",
      link: "https://www.instagram.com/justindizzo17?igsh=cnk1b21jZHdpenF1",
      color: "hover:bg-pink-500/20",
      borderColor: "group-hover:border-pink-500"
    }
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch(e.target.action, {
        method: e.target.method,
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0f1f] to-[#2d1b2d]">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 animate-grid" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
            Reach out through any of these channels.
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards - WHOLE CARD CLICKABLE */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 block"
                  // Only open new tab for http links (not mailto/tel)
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    // Allow copy button to work inside clickable card
                    if (e.target.closest("button")) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                >
                  {/* Gradient Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                    <p className="text-gray-400 text-sm block mb-2">
                      {info.value}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCopy(info.value, info.label);
                      }}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-purple-400 transition-colors"
                    >
                      {copied === info.label ? (
                        <>
                          <FiCheck className="w-3 h-3" /> Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy className="w-3 h-3" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-lg border border-white/10 ${social.color} transition-all duration-300 overflow-hidden`}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                    
                    <div className="relative flex items-center gap-3">
                      <div className={`text-gray-400 group-hover:text-purple-400 transition-colors duration-300 ${social.borderColor}`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{social.name}</p>
                        <p className="text-gray-500 text-xs">{social.username}</p>
                      </div>
                    </div>

                    {/* Hover Animation Line */}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300`}></div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-6 flex items-center gap-2 text-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                </div>
                <span className="text-gray-400">Available for freelance work</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {/* Success/Error Banner */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg text-center transition-all duration-300 ${
                submitStatus === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                  : submitStatus === 'error'
                  ? 'bg-red-500/20 border border-red-500/50 text-red-300'
                  : 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
              }`}>
                {submitStatus === 'sending' && '📤 Sending your message...'}
                {submitStatus === 'success' && '✅ Message sent! I\'ll get back to you soon.'}
                {submitStatus === 'error' && '❌ Something went wrong. Try emailing me directly.'}
              </div>
            )}

            {/* Formspree Form */}
            <form 
              action="https://formspree.io/f/mdalvlpa" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="_subject" value="🎨 New Portfolio Message!" />
              
              {/* Name Input */}
              <div className="group">
                <label className="block text-gray-400 text-sm mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-0 border border-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-gray-400 text-sm mb-2 group-focus-within:text-purple-400 transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                  <div className="absolute inset-0 border border-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-gray-400 text-sm mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="absolute inset-0 border border-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className={`group relative w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white overflow-hidden transition-opacity ${
                  submitStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  {submitStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Response Time */}
            <p className="text-center text-gray-500 text-sm mt-4">
              ⚡ Usually responds within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;