import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  ShieldCheck,
  Zap,
  Settings,
  Truck,
  CheckCircle,
  Facebook,
  Mail,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Hammer,
  Cog,
  Star,
  Award,
  Users,
  Building,
  AlertTriangle,
  Lock,
  Map,
  Blinds,
  Grid3X3,
  Warehouse,
  ArrowUpToLine,
  Layers,
  GalleryVertical,
  DoorOpen,
  Siren,
  Store,
  DraftingCompass,
  ClipboardCheck,
  KeyRound
} from "lucide-react";
import { Header } from "./components/Header";
import { StickyCTA } from "./components/StickyCTA";
import { CountUp } from "./components/CountUp";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";

const PHONE_NUMBER = "06 03 88 84 13";
const PHONE_LINK = "tel:+33603888413";
const EMAIL = "depannage.rideaux.metallique77@gmail.com";
const FB_LINK = "https://www.facebook.com/share/16yzSbTH53/?mibextid=wwXIfr";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-gold-shimmer selection:text-black relative">
      <StickyCTA />
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/image/image%201.jpeg"
            alt="Intervention professionnelle"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-main text-xs font-bold uppercase tracking-[0.2em] mb-8  animate-fade-in-up"
            >
              <Star className="w-4 h-4 fill-gold-main" />
              <span>Disponible 24h/24 et 7j/7</span>
            </div>

            <h1 className="text-5xl sm:text-8xl md:text-[10rem] font-extrabold font-serif text-white leading-[0.85] mb-6 tracking-tighter">
              <span 
                className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B8973E] via-[#FCEAA9] to-[#8A732B] animate-gradient-x drop-shadow-sm uppercase animate-fade-in-up delay-100"
              >
                DRM
              </span>
              <span 
                className="block text-3xl sm:text-6xl md:text-7xl font-bold font-serif text-white tracking-tight animate-fade-in-up delay-200"
              >
                Expertise <span className="text-gold-main">&</span> Sécurité
              </span>
              <span 
                className="block text-2xl sm:text-5xl md:text-6xl mt-4 text-zinc-400 font-serif font-medium tracking-wide animate-fade-in-up delay-300"
              >
                Rideaux Métalliques
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed max-w-2xl border-l-2 border-gold-main pl-6 animate-fade-in-up delay-500"
            >
              Spécialiste de l'installation, du dépannage et de la maintenance pour les professionnels et particuliers. Intervention rapide 24/7 sur Lyon et sa région.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up delay-700"
            >
              <a
                href={PHONE_LINK}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold-main text-black px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                <span>Intervention Urgente</span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all  hover:-translate-y-1"
              >
                <span>Découvrir nos services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="relative z-20 -mt-20 mx-4 sm:mx-8 lg:mx-auto max-w-6xl">
        <div 
          className="bg-black/90  rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center border-b md:border-b-0 border-r border-white/10">
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-3 font-serif tracking-tighter group-hover:scale-105 transition-transform duration-500">
                <CountUp end={10} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs text-gold-main uppercase tracking-[0.2em] font-bold">
                Années d'expérience
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-3 font-serif tracking-tighter group-hover:scale-105 transition-transform duration-500">
                24/7
              </div>
              <div className="text-[10px] md:text-xs text-gold-main uppercase tracking-[0.2em] font-bold">
                Assistance d'urgence
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center border-r border-white/10">
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-3 font-serif tracking-tighter group-hover:scale-105 transition-transform duration-500">
                <CountUp end={30} suffix="m" />
              </div>
              <div className="text-[10px] md:text-xs text-gold-main uppercase tracking-[0.2em] font-bold">
                Temps d'intervention
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-white/[0.02] transition-colors flex flex-col items-center justify-center">
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-3 font-serif tracking-tighter group-hover:scale-105 transition-transform duration-500">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="text-[10px] md:text-xs text-gold-main uppercase tracking-[0.2em] font-bold">
                Clients satisfaits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 
              className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
            >
              Nos Prestations Principales
            </h2>
            <h3 
              className="text-4xl md:text-6xl font-extrabold font-serif text-white mb-6 tracking-tight"
            >
              Une expertise technique complète
            </h3>
            <p 
              className="text-zinc-400 text-lg font-light leading-relaxed"
            >
              Des solutions sur-mesure pour la sécurité et l'efficacité de vos installations commerciales et industrielles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Siren,
                title: "Dépannage d'Urgence",
                desc: "Intervention rapide toutes marques pour sécuriser vos locaux suite à une panne ou une effraction.",
                img: "/image/technicien%20repare%20.jpeg"
              },
              {
                icon: Lock,
                title: "Déblocage Rideau",
                desc: "Déblocage de rideau bloqué, qu'il soit manuel ou électrique, sans endommager l'installation.",
                img: "/image/deblocage-rideau.jpg"
              },
              {
                icon: Wrench,
                title: <>Réparation <span className="text-gold-main">&</span> Pièces</>,
                desc: "Remplacement de pièces défectueuses : ressorts, moteurs, lames, axes...",
                img: "/image/reparation-pieces.jpg"
              },
              {
                icon: Zap,
                title: "Motorisation",
                desc: "Transformation de votre rideau manuel en électrique pour plus de confort et de sécurité.",
                img: "/image/motorisation-rideau.jpg"
              },
              {
                icon: Store,
                title: "Installation Neuve",
                desc: "Pose complète avec fabrication sur mesure adaptée à votre architecture.",
                img: "/image/garage%20blanc%20avec%20des%20port%20.jpeg"
              },
              {
                icon: DraftingCompass,
                title: "Fabrication Sur Mesure",
                desc: "Conception et fabrication de rideaux, grilles et portes métalliques selon vos spécifications.",
                img: "/image/grage%20tres%20grand%20avec%20beaucou%20des%20rideaux%20metallique%20.jpeg"
              },
              {
                icon: ClipboardCheck,
                title: <>Entretien <span className="text-gold-main">&</span> Maintenance</>,
                desc: "Contrats d'entretien préventif pour garantir la longévité et la conformité de vos équipements.",
                img: "/image/Entretien%20&%20Maintenance.jpeg"
              },
              {
                icon: KeyRound,
                title: "Serrurerie",
                desc: "Remplacement de serrure et cylindre pour renforcer la sécurité de vos accès.",
                img: "/image/rideau%20metallique.jpeg"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group flex flex-col hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-black/80  rounded-xl flex items-center justify-center shadow-xl text-gold-main border border-white/10">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col bg-black">
                  <h4 
                    className="text-xl font-bold text-white mb-3 group-hover:text-gold-main transition-colors font-serif"
                  >
                    {service.title}
                  </h4>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / About Section */}
      <section id="expertise" className="py-32 bg-zinc-950 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              {/* Main Image - Pill shape */}
              <div className="relative rounded-full overflow-hidden shadow-2xl aspect-[3/4] border border-white/10 z-10 group">
                <img src="/image/entreprise%20des%20rideau%20metallique.jpeg" alt="Notre expertise" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90" loading="lazy" />
              </div>
              
              {/* Contextual Image - Circle shape (Impact on writing) */}
              <div 
                className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl hidden md:block z-20 hover:scale-105 transition-transform duration-500"
              >
                <img src="/image/2%20technicien%20repare%20un%20ridaux%20metallique.jpg" alt="Technicien qualifié" className="w-full h-full object-cover opacity-90" loading="lazy" />
              </div>
              
              <div className="absolute top-1/4 -right-12 bg-black border border-gold-main/30 text-white p-8 rounded-3xl shadow-xl hidden lg:block max-w-xs z-30 ">
                <Award className="w-12 h-12 mb-4 text-gold-main" />
                <h4 
                  className="text-xl font-bold mb-2 font-serif"
                >
                  Qualité Certifiée
                </h4>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">Nous utilisons exclusivement des pièces d'origine certifiées pour garantir votre sécurité.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 py-8">
              <h2 
                className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
              >
                Notre Entreprise
              </h2>
              <h3 
                className="text-4xl md:text-6xl font-extrabold font-serif text-white mb-6 leading-tight tracking-tight"
              >
                L'exigence professionnelle à votre service
              </h3>
              <p 
                className="text-zinc-400 text-lg font-light mb-10 leading-relaxed border-l-2 border-gold-main pl-6"
              >
                Forts de plus de 10 ans d'expérience dans le domaine des fermetures industrielles et commerciales, nous apportons des solutions techniques précises et durables. Notre approche est résolument orientée vers la satisfaction et la sécurité de nos clients professionnels.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Techniciens hautement qualifiés et formés en continu",
                  "Interventions respectant les normes de sécurité strictes",
                  "Transparence totale sur les tarifs et les délais",
                  "Partenariat avec les plus grandes marques européennes"
                ].map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-shimmer/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-gold-main" />
                    </div>
                    <span className="text-zinc-300 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gold-main text-black px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
            >
              Équipements
            </h2>
            <h3 
              className="text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight"
            >
              Types d'équipements traités
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Rideaux métalliques manuels", icon: Blinds },
              { name: "Rideaux métalliques électriques", icon: Zap },
              { name: "Grilles cobra / extensibles", icon: Grid3X3 },
              { name: "Portes industrielles sectionnelles", icon: Warehouse },
              { name: "Portes basculantes", icon: ArrowUpToLine },
              { name: "Rideaux en aluminium", icon: Layers },
              { name: "Volets roulants", icon: GalleryVertical },
              { name: "Portails automatiques", icon: DoorOpen }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-black border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:border-gold-main/50 hover:bg-white/5 transition-all group shadow-lg"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-gold-main/50">
                  <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-gold-main transition-colors" />
                </div>
                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-950 relative border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
            >
              Pourquoi nous choisir
            </h2>
            <h3 
              className="text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight"
            >
              Les piliers de notre engagement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Réactivité",
                desc: "Intervention rapide 24h/24 et 7j/7 pour minimiser l'impact sur votre activité."
              },
              {
                icon: ShieldCheck,
                title: "Fiabilité",
                desc: "Des solutions durables et conformes aux normes de sécurité les plus strictes."
              },
              {
                icon: Award,
                title: "Expertise",
                desc: "Une équipe de techniciens qualifiés maîtrisant toutes les marques et modèles."
              },
              {
                icon: MapPin,
                title: "Proximité",
                desc: "Un ancrage local fort en région Lyonnaise pour un service personnalisé."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 p-8 rounded-2xl hover:bg-zinc-900 hover:border-gold-main/50 transition-all group"
              >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-gold-main/50 shadow-lg">
                  <item.icon className="w-7 h-7 text-gold-main" />
                </div>
                <h4 
                  className="text-xl font-bold text-white mb-3 group-hover:text-gold-main transition-colors font-serif"
                >
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Zone & Delays */}
      <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
              >
                Zone d'Intervention
              </h2>
              <h3 
                className="text-4xl md:text-5xl font-extrabold font-serif text-white mb-8 tracking-tight"
              >
                Nous intervenons rapidement <br/>sur toute la région
              </h3>
              
              <div className="space-y-8">
                <div 
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-shimmer/10 flex items-center justify-center shrink-0 border border-gold-main/20">
                    <MapPin className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                    >
                      Départements Couverts
                    </h4>
                    <p className="text-zinc-400">Rhône (69), Saône-et-Loire (71), Côte-d'Or (21)</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Lyon", "Mâcon", "Chalon-sur-Saône", "Dijon", "Beaune"].map((city) => (
                        <span key={city} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-bold text-zinc-300 border border-zinc-700">{city}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div 
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-shimmer/10 flex items-center justify-center shrink-0 border border-gold-main/20">
                    <Truck className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                    >
                      Conditions de Déplacement
                    </h4>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong className="text-white">Gratuit</strong> dans un rayon de 100 km autour de Lyon</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-gold-main" />
                        <span>Frais kilométriques applicables au-delà de 100 km</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div 
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-shimmer/10 flex items-center justify-center shrink-0 border border-gold-main/20">
                    <Clock className="w-6 h-6 text-gold-main" />
                  </div>
                  <div>
                    <h4 
                      className="text-xl font-bold text-white mb-2"
                    >
                      Délais d'Intervention
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <div className="text-xs text-zinc-500 uppercase font-bold mb-1">Urgence</div>
                        <div className="text-gold-main font-bold text-xl">30 min à 2h</div>
                      </div>
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <div className="text-xs text-zinc-500 uppercase font-bold mb-1">Installation</div>
                        <div className="text-white font-bold text-xl">1 à 3 jours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] bg-zinc-800 rounded-[2rem] overflow-hidden border border-zinc-700 shadow-2xl">
               {/* Abstract Map Representation */}
               <div className="absolute inset-0 bg-zinc-900">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Lyon Center */}
                  <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-gold-main rounded-full animate-pulse absolute inset-0 opacity-75"></div>
                      <div className="w-4 h-4 bg-gold-main rounded-full relative z-10 border-2 border-black"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white whitespace-nowrap">Lyon (Siège)</div>
                    </div>
                    
                    {/* Radius Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-gold-main/30 rounded-full bg-gold-shimmer/5 pointer-events-none"></div>
                    <div className="absolute top-[35%] right-[-20%] text-xs text-gold-main/50 font-mono rotate-12">100 km</div>
                  </div>

                  {/* Other Cities */}
                  <div className="absolute top-[45%] left-[55%]">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-bold">Mâcon</div>
                  </div>
                  <div className="absolute top-[30%] left-[60%]">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-bold">Chalon</div>
                  </div>
                  <div className="absolute top-[15%] left-[50%]">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-bold">Dijon</div>
                  </div>
               </div>
               
               <div className="absolute bottom-6 left-6 right-6 bg-black/80  p-4 rounded-xl border border-white/10">
                 <div className="flex items-center gap-3 text-sm text-zinc-300">
                   <Map className="w-5 h-5 text-gold-main" />
                   <span>Intervention rapide sur l'axe A6 et alentours</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Section: Security & Reliability (Impact on writing) */}
      <section 
        className="py-32 relative overflow-hidden bg-black text-zinc-100 border-b border-white/5" 
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-[120%] -mt-[10%]">
            <img 
              src="/image/grage%20tres%20grand%20avec%20beaucou%20des%20rideaux%20metallique%20.jpeg" 
              alt="Bureau professionnel" 
              className="w-full h-full object-cover opacity-20" 
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 
                  className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
                >
                  Engagement Qualité
                </h2>
                <h3 
                  className="text-4xl md:text-6xl font-extrabold font-serif mb-6 leading-tight tracking-tight"
                >
                  Votre sécurité, <br/>
                  <span className="text-gold-main">Notre Priorité Absolue</span>
                </h3>
                <p 
                  className="text-xl text-zinc-400 font-light leading-relaxed mb-8 border-l-2 border-gold-main pl-6"
                >
                  Nous comprenons que la sécurité de votre commerce ou de votre entrepôt est vitale. C'est pourquoi nous nous engageons à intervenir avec une efficacité redoutable et une discrétion totale.
                </p>
                <div className="flex flex-col gap-4">
                  <div 
                    className="flex items-center gap-4 bg-black/80  p-6 rounded-2xl border border-white/10 shadow-lg hover:border-gold-main/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center text-gold-main border border-gold-main/20">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 
                        className="font-bold text-white text-lg"
                      >
                        Matériel Certifié A2P
                      </h4>
                      <p className="text-sm text-zinc-400">Résistance maximale aux effractions</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-center gap-4 bg-black/80  p-6 rounded-2xl border border-white/10 shadow-lg hover:border-gold-main/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center text-gold-main border border-gold-main/20">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 
                        className="font-bold text-white text-lg"
                      >
                        Astreinte 24/7
                      </h4>
                      <p className="text-sm text-zinc-400">Une équipe toujours prête à intervenir</p>
                    </div>
                  </div>
                </div>
              </div>

            <div
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src="/image/image%20avant%20et%20apres.jpeg" 
                  alt="Installation sécurisée" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <div className="text-6xl font-bold text-white mb-2 font-serif tracking-tighter">98%</div>
                  <div className="text-sm text-gold-main uppercase tracking-[0.2em] font-bold">Taux de satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors of Activity (Replaces Realisations) */}
      <section id="realisations" className="py-32 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 
              className="text-xs font-bold text-gold-main uppercase tracking-[0.2em] mb-4"
            >
              Secteurs d'Activité
            </h2>
            <h3 
              className="text-4xl md:text-5xl font-extrabold font-serif text-white mb-6 tracking-tight"
            >
              Des solutions adaptées à chaque métier
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: <>Commerces <span className="text-gold-main">&</span> Retail</>, 
                desc: "Protection esthétique et robuste pour vitrines et boutiques.",
                img: "/image/Commerces%20&%20Retail.jpeg" 
              },
              { 
                title: <>Industrie <span className="text-gold-main">&</span> Logistique</>, 
                desc: "Fermetures grand format pour entrepôts et quais de chargement.",
                img: "/image/garage%20avec%203%20port%20et%20lumiere%20bleu.jpeg" 
              },
              { 
                title: <>Bureaux <span className="text-gold-main">&</span> Tertiaire</>, 
                desc: "Sécurisation des accès et parkings pour immeubles de bureaux.",
                img: "/image/Bureaux%20&%20Tertiaire.jpeg" 
              }
            ].map((sector, idx) => (
              <div 
                key={idx}
                className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              >
                <img 
                  src={sector.img} 
                  alt={sector.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 
                    className="text-2xl font-bold text-white mb-3"
                  >
                    {sector.title}
                  </h4>
                  <p className="text-zinc-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {sector.desc}
                  </p>
                  <div className="mt-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-gold-main group-hover:border-gold-main transition-all">
                    <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section - Redesigned */}
      <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-main/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold-main/5 to-transparent"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-black/80  rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 border border-white/10 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-main to-transparent opacity-50"></div>
            <div>
              <h2 
                className="text-4xl md:text-6xl font-extrabold font-serif text-white mb-8 tracking-tight"
              >
                Besoin d'une <span className="text-gold-main">intervention ?</span>
              </h2>
              <p 
                className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto"
              >
                Nos experts sont à votre écoute pour diagnostiquer votre problème et intervenir dans les plus brefs délais.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <a
                  href={PHONE_LINK}
                  className="group flex items-center justify-center gap-4 bg-gold-main text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-4 bg-black text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6" />
                  <span>Demander un devis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer id="contact" className="bg-black pt-24 pb-12 relative overflow-hidden border-t border-white/10">
        {/* Animated Background - SIMPLIFIED FOR PERFORMANCE */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black z-0" />
            {/* Static blurred blobs instead of infinite animations */}
            <div 
                className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gold-main/5 blur-[120px] z-0"
            />
            <div 
                className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gold-main/5 blur-[150px] z-0"
            />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Column 1: Brand & About */}
            <div 
              className="lg:col-span-4 space-y-8"
            >
              <a href="#" className="block w-fit group">
                <div className="flex items-center gap-4">
                  <img 
                    src="/image/logo.png" 
                    alt="DRM Logo" 
                    className="h-20 md:h-24 object-contain shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2" 
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-serif text-3xl tracking-wide">DRM</span>
                    <span className="text-gold-main text-[10px] uppercase tracking-[0.3em] font-bold">Fermetures Industrielles</span>
                  </div>
                </div>
              </a>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Votre partenaire expert en installation, maintenance et dépannage de fermetures industrielles. Intervention rapide et solutions durables sur toute la région Auvergne-Rhône-Alpes.
              </p>
              <div className="flex gap-4 pt-2">
                <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold-main hover:text-black transition-all duration-300 border border-white/10 hover:border-gold-main hover:scale-110 hover:shadow-[0_0_15px_rgba(184,151,62,0.4)]">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div 
              className="lg:col-span-2"
            >
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-4 h-[2px] bg-gold-main rounded-full"></span>
                Navigation
              </h4>
              <ul className="space-y-4">
                {['Accueil', 'Services', 'Expertise', 'Secteurs'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '').replace('é', 'e').replace('à', 'a')}`} className="text-zinc-400 hover:text-gold-main transition-all duration-300 text-sm flex items-center gap-2 group w-fit">
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-gold-main transition-colors group-hover:translate-x-1" />
                      <span className="relative overflow-hidden">
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-main transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div 
              className="lg:col-span-3"
            >
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-4 h-[2px] bg-gold-main rounded-full"></span>
                Nos Services
              </h4>
              <ul className="space-y-4">
                {['Dépannage Urgent 24/7', 'Maintenance Préventive', 'Installation Neuve', 'Mise en Conformité'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-zinc-400 hover:text-gold-main transition-all duration-300 text-sm flex items-center gap-2 group w-fit">
                      <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-gold-main transition-colors group-hover:translate-x-1" />
                      <span className="relative overflow-hidden">
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-main transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div 
              className="lg:col-span-3"
            >
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-4 h-[2px] bg-gold-main rounded-full"></span>
                Contact
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-gold-main group-hover:bg-gold-main group-hover:text-black transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-white text-sm font-bold mb-1">Siège Social</span>
                    <span className="text-zinc-400 text-sm leading-relaxed block group-hover:text-zinc-300 transition-colors">2 Avenue Maurice Ravel<br/>71880 Châtenoy-le-Royal, France</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-gold-main group-hover:bg-gold-main group-hover:text-black transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-white text-sm font-bold mb-1">Téléphone</span>
                    <a href={PHONE_LINK} className="text-zinc-400 hover:text-gold-main transition-colors text-sm block font-medium">{PHONE_NUMBER}</a>
                    <span className="text-[10px] text-gold-main font-bold mt-1.5 block uppercase tracking-[0.15em]">Disponible 24h/24 - 7j/7</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-gold-main group-hover:bg-gold-main group-hover:text-black transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-white text-sm font-bold mb-1">Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-zinc-400 hover:text-gold-main transition-colors text-sm block break-all font-medium">{EMAIL}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <img src="/image/logo.png" alt="DRM" className="h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <p className="text-zinc-500 text-xs font-medium">
                &copy; {new Date().getFullYear()} DRM Fermetures Industrielles. Tous droits réservés.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <a href="#" className="text-zinc-500 hover:text-gold-main text-xs font-bold uppercase tracking-wider transition-colors">Mentions Légales</a>
              <a href="#" className="text-zinc-500 hover:text-gold-main text-xs font-bold uppercase tracking-wider transition-colors">Politique de Confidentialité</a>
              <a href="#" className="text-zinc-500 hover:text-gold-main text-xs font-bold uppercase tracking-wider transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
