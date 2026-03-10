import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'fcfe8dca-cfb1-44f4-9ee3-630e378fceae',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: formData.subject ? `${formData.subject} - ${formData.name}` : `Nouveau message de ${formData.name} - Site Web`,
          from_name: 'Contact Site Web'
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-black relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
            >
              Contactez-nous
            </h2>
            <h3 
              className="text-4xl md:text-6xl font-extrabold font-serif text-white mb-6 tracking-tight"
            >
              Une question ? <br/>Un projet ?
            </h3>
            <p 
              className="text-xl text-zinc-400 font-light leading-relaxed mb-8 border-l-2 border-gold-main pl-6"
            >
              Remplissez le formulaire ci-contre et nous vous recontacterons dans les plus brefs délais pour discuter de votre besoin.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300 bg-black/50 p-4 rounded-xl border border-white/5">
                <CheckCircle className="w-6 h-6 text-gold-main" />
                <span className="font-medium">Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 bg-black/50 p-4 rounded-xl border border-white/5">
                <CheckCircle className="w-6 h-6 text-gold-main" />
                <span className="font-medium">Intervention rapide sur toute la région</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 bg-black/50 p-4 rounded-xl border border-white/5">
                <CheckCircle className="w-6 h-6 text-gold-main" />
                <span className="font-medium">Service client dédié</span>
              </div>
            </div>
          </div>

          <div 
            className="bg-black p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Form Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-main/10 blur-[100px] rounded-full pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-all placeholder-zinc-600"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-all placeholder-zinc-600"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-all placeholder-zinc-600"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-all placeholder-zinc-600"
                  placeholder="Sujet de votre demande"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-all placeholder-zinc-600 resize-none"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-bold text-lg transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-gold-main text-black hover:bg-white shadow-xl hover:shadow-2xl'
                }`}
              >
                {status === 'sending' ? (
                  <span className="animate-pulse">Envoi en cours...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Message envoyé !</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-2 justify-center">
                  <AlertCircle className="w-4 h-4" />
                  <span>Une erreur est survenue. Veuillez réessayer.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
