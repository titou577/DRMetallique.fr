import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Quel est le délai d'intervention en cas d'urgence ?",
    answer: "Nous intervenons en urgence 24h/24 et 7j/7. En région lyonnaise, notre délai moyen d'intervention est de 30 minutes à 2 heures selon votre localisation et le trafic."
  },
  {
    question: "Intervenez-vous sur toutes les marques de rideaux métalliques ?",
    answer: "Oui, nos techniciens sont formés pour intervenir sur toutes les marques et tous les types de fermetures industrielles (manuelles, électriques, portes sectionnelles, etc.)."
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Absolument. Pour toute installation ou réparation non urgente, nous nous déplaçons gratuitement pour évaluer vos besoins et vous fournir un devis détaillé et transparent."
  },
  {
    question: "Vos installations sont-elles garanties ?",
    answer: "Oui, toutes nos installations neuves bénéficient d'une garantie décennale. Nos réparations sont également garanties, et nous utilisons exclusivement des pièces certifiées."
  },
  {
    question: "Quels sont vos tarifs pour un dépannage ?",
    answer: "Nos tarifs sont transparents et compétitifs. Un forfait déplacement + main d'œuvre est appliqué. Contactez-nous pour obtenir une estimation précise selon votre situation."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-gold-main/5 to-transparent rounded-bl-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div
            className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-xl"
          >
            <HelpCircle className="w-8 h-8 text-gold-main" />
          </div>
          <h2 
            className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
          >
            Questions Fréquentes
          </h2>
          <h3 
            className="text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight"
          >
            Tout ce que vous devez savoir
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl overflow-hidden bg-black hover:bg-zinc-900/50 transition-colors shadow-lg"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${activeIndex === idx ? 'text-gold-main' : 'text-white'} transition-colors font-serif`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-gold-main' : ''}`} 
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4 text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
