import { 
  Wifi, 
  Car, 
  Coffee, 
  Wind, 
  Tv, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle,
  Star,
  CheckCircle2,
  Clock,
  Thermometer,
  Mail,
  Users,
  Maximize,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

import { RoomPage } from './components/RoomPage';
import { BookingModal } from './components/BookingModal';
import { allRooms } from './data/rooms';

// --- Components ---

const Navbar = ({ setCurrentPage, onOpenBooking }: { setCurrentPage: (page: string) => void, onOpenBooking: () => void }) => (
  <header className="fixed top-0 w-full z-50 flex flex-col shadow-sm">
    {/* Top Contact Bar */}
    <div className="bg-indigo-primary text-linen-white/80 py-2 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs font-medium tracking-wide gap-2 sm:gap-0">
      <div className="flex gap-4 md:gap-6">
        <a href="tel:+270123456789" className="hover:text-linen-white transition-colors flex items-center gap-1.5">
          <Phone className="w-3 h-3" /> +27 (0) 12 345 6789
        </a>
        <a href="mailto:info@gardencorner.co.za" className="hover:text-linen-white transition-colors flex items-center gap-1.5">
          <Mail className="w-3 h-3" /> info@gardencorner.co.za
        </a>
      </div>
      <a href="https://maps.google.com/?q=13+Ivy+Avenue,+Arcon+Park,+Vereeniging" target="_blank" rel="noreferrer" className="hover:text-linen-white transition-colors flex items-center gap-1.5 hidden sm:flex">
        <MapPin className="w-3 h-3" /> 13 Ivy Avenue, Arcon Park, Vereeniging
      </a>
    </div>
    
    {/* Main Navigation */}
    <nav className="bg-linen-white/95 backdrop-blur-md border-b border-stone-neutral py-4 px-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-primary flex items-center justify-center rounded-sm text-linen-white font-serif text-xl md:text-2xl shadow-md">G</div>
        <div className="flex flex-col">
          <span className="font-serif text-lg md:text-xl text-indigo-primary leading-tight">Garden Corner</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-sage-secondary font-bold hidden sm:block">Guest House</span>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <button onClick={() => setCurrentPage('home')} className="text-xs md:text-sm font-bold text-indigo-primary hover:text-terracotta-accent transition-colors uppercase tracking-wide hidden sm:block">Home</button>
        <button onClick={() => setCurrentPage('gallery')} className="text-xs md:text-sm font-bold text-indigo-primary hover:text-terracotta-accent transition-colors uppercase tracking-wide hidden sm:block">Gallery</button>
        <button onClick={onOpenBooking} className="bg-terracotta-accent text-linen-white px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-bold tracking-wide uppercase hover:bg-indigo-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
          Book Now
        </button>
      </div>
    </nav>
  </header>
);

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
    {/* Left Column: Content & Social Proof */}
    <div className="flex-1 text-center lg:text-left z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-mint text-sage-secondary text-xs font-bold uppercase tracking-widest mb-6"
      >
        <MapPin className="w-3 h-3" /> Arcon Park, Vereeniging
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl text-indigo-primary mb-6 leading-tight"
      >
        Your Quiet Retreat in the Heart of Vereeniging
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-text-body/80 mb-10 font-light tracking-wide max-w-2xl mx-auto lg:mx-0"
      >
        Experience the serenity of Arcon Park in our lush, private gardens. Intimate, carefully appointed spaces designed purely for your comfort and quiet rest.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12"
      >
        <button onClick={onOpenBooking} className="bg-terracotta-accent text-linen-white px-10 py-4 rounded-md text-lg font-bold tracking-wide uppercase hover:bg-indigo-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl w-full sm:w-auto">
          Check Availability
        </button>
      </motion.div>

      {/* Social Proof Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8 border-t border-stone-neutral"
      >
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg flex items-center tracking-tighter">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
              ))}
            </div>
          </div>
          <p className="text-sm text-text-body font-medium">
            <span className="font-bold text-indigo-primary text-base">5.0</span> rating from <span className="font-bold text-indigo-primary">8</span> reviews
          </p>
        </div>
        
        <div className="hidden sm:block w-px h-12 bg-stone-neutral"></div>

        <div className="flex -space-x-3">
          {[1, 2, 3].map(i => (
            <img key={i} src={`https://i.pravatar.cc/150?u=guest${i}`} alt="Guest" className="w-10 h-10 rounded-full border-2 border-linen-white shadow-sm" referrerPolicy="no-referrer" />
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-linen-white bg-indigo-primary text-linen-white flex items-center justify-center text-xs font-bold shadow-sm z-10">
            +5
          </div>
        </div>
      </motion.div>
    </div>

    {/* Right Column: Imagery */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000" 
          alt="Lush Garden" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 right-6 bg-linen-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-linen-white flex items-center gap-4">
          <div className="bg-sage-mint p-3 rounded-full text-sage-secondary">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-indigo-primary">Verified Tranquility</p>
            <p className="text-xs text-text-body/70">Lush gardens & private spaces</p>
          </div>
        </div>
      </div>
      <div className="absolute -inset-4 bg-sage-mint rounded-3xl -z-10 transform rotate-3"></div>
    </motion.div>
  </section>
);

const TrustBar = () => (
  <div className="bg-stone-neutral py-12 border-y border-stone-neutral">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center gap-4 justify-center md:justify-start">
        <div className="p-3 bg-linen-white rounded-full shadow-sm">
          <Star className="text-gold-accent w-6 h-6 fill-gold-accent" />
        </div>
        <div>
          <p className="text-2xl font-serif text-indigo-primary">8.7 / 10</p>
          <p className="text-xs uppercase tracking-widest text-sage-secondary font-bold">Exceptional Staff Service</p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="p-3 bg-linen-white rounded-full shadow-sm">
          <MapPin className="text-sage-secondary w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-serif text-indigo-primary">14 Min Walk</p>
          <p className="text-xs uppercase tracking-widest text-sage-secondary font-bold">To Leeukop Golf Course</p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center md:justify-end">
        <div className="p-3 bg-linen-white rounded-full shadow-sm">
          <ShieldCheck className="text-indigo-primary w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl font-serif text-indigo-primary">Secure Parking</p>
          <p className="text-xs uppercase tracking-widest text-sage-secondary font-bold">Free Off-Street Access</p>
        </div>
      </div>
    </div>
  </div>
);

const MeetTheHosts = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=1000" 
        alt="Our Friendly Staff" 
        className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute -bottom-6 -right-6 bg-sage-secondary text-linen-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
        <p className="italic text-lg mb-2">"We don't just provide a room; we offer a sanctuary where you can truly unwind."</p>
        <p className="font-bold">— Your Dedicated Team</p>
      </div>
    </div>
    <div>
      <h2 className="text-4xl md:text-5xl mb-8">Meet the Custodians of Your Comfort</h2>
      <p className="text-lg leading-relaxed mb-6">
        At Garden Corner Guest House, we believe in the magic of a warm welcome. Our staff, rated 8.7/10 for their helpfulness, are the heart of your experience. We are the quiet observers, the dependable caretakers, and the peaceful sanctuary you've been looking for.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        We speak with the quiet confidence of a host who knows that their garden is beautiful, their sheets are crisp, and their welcome is genuine. Whether you're here for golf, business, or a quiet escape, we're here to ensure your stay is seamless.
      </p>
      <div className="flex gap-4">
        <div className="flex -space-x-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-linen-white bg-stone-neutral overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Staff" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold text-indigo-primary">Always on hand</p>
          <p className="text-xs text-sage-secondary">24/7 Attentive Service</p>
        </div>
      </div>
    </div>
  </section>
);

const RoomGallery = ({ onOpenBooking, setCurrentPage }: { onOpenBooking: (roomId: number) => void, setCurrentPage: (page: string) => void }) => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const categories = ['All', 'Standard', 'Studio', 'Suite'];

  const filteredRooms = allRooms.filter(r => filter === 'All' || r.category === filter);
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
  const currentRooms = filteredRooms.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setPage(1);
  };

  return (
    <section id="rooms" className="py-24 bg-stone-neutral px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Unfiltered Authenticity</h2>
          <p className="text-sage-secondary max-w-2xl mx-auto mb-8">
            What you see is exactly what you get. We pride ourselves on transparent, unedited imagery of our restful spaces.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 ${filter === cat ? 'bg-indigo-primary text-linen-white shadow-md' : 'bg-linen-white text-indigo-primary border border-stone-neutral hover:border-indigo-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {currentRooms.map((room) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={room.id}
                className="bg-linen-white rounded-2xl overflow-hidden shadow-elevation group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={room.img} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-primary/80 backdrop-blur-md text-linen-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Verified Imagery
                  </div>
                  <div className="absolute bottom-4 right-4 bg-linen-white text-indigo-primary px-4 py-2 rounded-lg font-bold shadow-lg">
                    {room.price} <span className="text-xs font-normal text-text-body">/ night</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-indigo-primary">{room.title}</h3>
                  </div>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-text-body/80 border-b border-stone-neutral pb-4">
                    <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-sage-secondary" /> {room.guests} Guests</div>
                    <div className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-sage-secondary" /> {room.size}</div>
                    <div className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-sage-secondary" /> {room.bed}</div>
                  </div>

                  {/* Amenities */}
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 flex-1">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-body/80">
                        <CheckCircle2 className="w-4 h-4 text-sage-secondary shrink-0" /> <span className="truncate">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto flex flex-col gap-2">
                    <button onClick={() => setCurrentPage(`room_${room.id}`)} className="w-full py-3 bg-indigo-primary text-linen-white font-bold tracking-wide uppercase rounded-md hover:bg-indigo-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm">
                      View Details
                    </button>
                    <button onClick={() => onOpenBooking(room.id)} className="w-full py-3 border-2 border-indigo-primary text-indigo-primary font-bold tracking-wide uppercase rounded-md hover:bg-indigo-primary hover:text-linen-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                      Book This Room
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-full bg-linen-white text-indigo-primary shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-primary hover:text-linen-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-full font-bold transition-colors ${page === i + 1 ? 'bg-indigo-primary text-linen-white shadow-md' : 'bg-linen-white text-indigo-primary hover:bg-stone-neutral'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-full bg-linen-white text-indigo-primary shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-primary hover:text-linen-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Amenities = () => {
  const items = [
    { icon: <Wifi />, label: "High-Speed Fibre", sub: "Certified 50Mbps" },
    { icon: <Thermometer />, label: "Seasonal Climate", sub: "Heaters provided in Winter" },
    { icon: <Wind />, label: "Non-Smoking", sub: "Hypoallergenic Prep" },
    { icon: <Car />, label: "Secure Parking", sub: "Private Off-Street" },
    { icon: <Coffee />, label: "Kitchenette", sub: "Fridge, Microwave, Kettle" },
    { icon: <Tv />, label: "Entertainment", sub: "Functioning Smart TVs" },
  ];

  return (
    <section id="amenities" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl mb-6">Designed for Your Peace of Mind</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We've listened to our guests. Every amenity is maintained to the highest standard, ensuring your stay is as functional as it is tranquil.
          </p>
          <div className="bg-sage-mint p-8 rounded-2xl border-l-4 border-sage-secondary">
            <p className="text-sage-secondary font-bold text-sm uppercase tracking-widest mb-2">Hygiene Protocol</p>
            <p className="text-indigo-primary font-medium">
              Our rooms undergo a rigorous 40-point inspection before every arrival to ensure clinical cleanliness.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-stone-neutral hover:border-sage-secondary hover:shadow-md hover:-translate-y-1 transition-all duration-300 group bg-white">
              <div className="text-sage-secondary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-indigo-primary">{item.label}</p>
                <p className="text-sm text-text-body/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeGallery = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const images = [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
  ];
  
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl text-indigo-primary mb-4">A Glimpse of Tranquility</h2>
          <p className="text-lg text-text-body/80 max-w-2xl">Explore the serene spaces, lush gardens, and comfortable accommodations that await you.</p>
        </div>
        <button 
          onClick={() => setCurrentPage('gallery')}
          className="shrink-0 border-2 border-indigo-primary text-indigo-primary px-6 py-3 rounded-md font-bold tracking-wide uppercase hover:bg-indigo-primary hover:text-linen-white hover:scale-105 active:scale-95 transition-all duration-300"
        >
          View All Pictures
        </button>
      </div>
      
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg group"
          >
            <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FullGallery = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const allImages = [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522771731470-53ff8e3ee0e5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1e52408437?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <button 
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-indigo-primary hover:text-terracotta-accent transition-colors font-bold uppercase tracking-wide text-sm mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl text-indigo-primary mb-6">Our Gallery</h1>
        <p className="text-xl text-text-body/80 max-w-2xl mx-auto">Immerse yourself in the beauty of Garden Corner Guest House.</p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {allImages.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.1 }}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg group"
          >
            <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What time is check-in and check-out?", a: "Check-in is from 2:00 PM to 8:00 PM, and check-out is by 10:00 AM. Early check-in or late check-out can be arranged upon request." },
    { q: "Is there secure parking available?", a: "Yes, we offer complimentary, secure off-street parking for all our guests to ensure your peace of mind during your stay." },
    { q: "Do the rooms have kitchen facilities?", a: "Yes, all our rooms are equipped with a convenient kitchenette including a microwave, refrigerator, and coffee/tea making facilities." },
    { q: "How far are you from O.R. Tambo International Airport?", a: "We are approximately 62km (a 45-60 minute drive) from O.R. Tambo International Airport. We can assist with directions if needed." },
  ];

  return (
    <section className="py-24 bg-stone-neutral px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text & Accordion */}
        <div>
          <p className="text-sage-secondary font-bold uppercase tracking-widest text-sm mb-4">Frequently Asked Questions</p>
          <h2 className="text-4xl md:text-5xl font-serif text-indigo-primary mb-10 leading-tight">Clear Answers To Common Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`bg-linen-white rounded-xl shadow-sm overflow-hidden border transition-colors duration-300 ${openIndex === idx ? 'border-indigo-primary' : 'border-stone-neutral/50 hover:border-indigo-primary/50'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-stone-neutral/30 transition-colors"
                >
                  <span className="font-bold text-indigo-primary pr-4">{faq.q}</span>
                  {openIndex === idx ? <Minus className="w-5 h-5 text-indigo-primary shrink-0" /> : <Plus className="w-5 h-5 text-indigo-primary shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-text-body/80 text-sm leading-relaxed border-t border-stone-neutral/50 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Collage */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col gap-4">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" 
              alt="Guest House Exterior" 
              className="rounded-2xl h-48 object-cover w-full shadow-md" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600" 
              alt="Comfortable Room" 
              className="rounded-2xl h-72 object-cover w-full shadow-md" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="pt-8 pb-8">
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=600" 
              alt="Friendly Staff" 
              className="rounded-2xl h-full min-h-[300px] object-cover w-full shadow-md" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 px-6 bg-linen-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text & Buttons */}
        <div>
          <p className="text-sage-secondary font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif text-indigo-primary mb-6 leading-tight">We're Here to Help</h2>
          <p className="text-lg text-text-body/80 mb-10">
            Have questions about your stay or need assistance with a booking? Reach out to us directly or drop us a message.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-neutral rounded-full text-indigo-primary"><MapPin className="w-6 h-6" /></div>
              <div>
                <p className="font-bold text-indigo-primary">Address</p>
                <p className="text-text-body/80">13 Ivy Avenue, Arcon Park, Vereeniging, 1937</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-neutral rounded-full text-indigo-primary"><Phone className="w-6 h-6" /></div>
              <div>
                <p className="font-bold text-indigo-primary">Phone</p>
                <p className="text-text-body/80">+27 (0) 12 345 6789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-neutral rounded-full text-indigo-primary"><Mail className="w-6 h-6" /></div>
              <div>
                <p className="font-bold text-indigo-primary">Email</p>
                <p className="text-text-body/80">info@gardencorner.co.za</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-indigo-primary text-linen-white px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-indigo-light hover:scale-105 active:scale-95 transition-all duration-300 shadow-md text-sm text-center">
              Leave us a message
            </button>
            <a href="https://wa.me/27786895713" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elevation border-4 border-white">
          <iframe 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://maps.google.com/maps?q=13+Ivy+Avenue,+Arcon+Park,+Vereeniging&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          {/* Google Maps Logo Overlay */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md flex items-center gap-2 pointer-events-none">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/512px-Google_Maps_icon_%282020%29.svg.png" alt="Google Maps" className="w-6 h-6" />
            <span className="font-bold text-indigo-primary text-sm tracking-tight">Google Maps</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-indigo-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-linen-white w-full max-w-lg rounded-2xl shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-6 border-b border-stone-neutral flex justify-between items-center bg-stone-neutral/30">
                <h3 className="text-2xl font-serif text-indigo-primary">Send a Message</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-text-body/50 hover:text-indigo-primary transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                {!submitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-1">Name</label>
                      <input type="text" required className="w-full p-3 border border-stone-neutral rounded-lg focus:ring-2 focus:ring-sage-secondary outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-1">Email</label>
                      <input type="email" required className="w-full p-3 border border-stone-neutral rounded-lg focus:ring-2 focus:ring-sage-secondary outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-1">Message</label>
                      <textarea required rows={4} className="w-full p-3 border border-stone-neutral rounded-lg focus:ring-2 focus:ring-sage-secondary outline-none resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-terracotta-accent text-linen-white font-bold tracking-wide uppercase rounded-md hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md mt-4">
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-sage-mint rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-sage-secondary" />
                    </div>
                    <h4 className="text-xl font-bold text-indigo-primary mb-2">Message Sent!</h4>
                    <p className="text-text-body/80 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                    <button onClick={() => { setSubmitted(false); setIsModalOpen(false); }} className="px-6 py-2 border-2 border-indigo-primary text-indigo-primary font-bold rounded-md hover:bg-indigo-primary hover:text-linen-white transition-colors">
                      Close
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-linen-white pt-24 pb-12 px-6 border-t border-stone-neutral">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-indigo-primary flex items-center justify-center rounded-lg text-linen-white font-serif text-xl">G</div>
          <span className="font-serif text-2xl text-indigo-primary">Garden Corner</span>
        </div>
        <p className="text-lg text-text-body/70 max-w-md leading-relaxed mb-8">
          13 Ivy Avenue, Arcon Park, Vereeniging, 1937, South Africa. <br />
          A dedicated team committed to your quiet rest.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-stone-neutral flex items-center justify-center text-indigo-primary hover:bg-indigo-primary hover:text-linen-white hover:border-indigo-primary transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-stone-neutral flex items-center justify-center text-indigo-primary hover:bg-indigo-primary hover:text-linen-white hover:border-indigo-primary transition-all duration-300">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-stone-neutral flex items-center justify-center text-indigo-primary hover:bg-indigo-primary hover:text-linen-white hover:border-indigo-primary transition-all duration-300">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-indigo-primary mb-6 uppercase tracking-widest text-xs">Contact</h4>
        <ul className="space-y-4 text-text-body/70">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +27 (0) 12 345 6789</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Arcon Park, Vereeniging</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> 62km from O.R. Tambo</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-indigo-primary mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
        <ul className="space-y-4 text-text-body/70">
          <li><a href="#" className="hover:text-sage-secondary">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-sage-secondary">Terms of Service</a></li>
          <li><a href="#" className="hover:text-sage-secondary">Local Guide</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-12 border-t border-stone-neutral text-center text-sm text-text-body/40">
      © 2026 Garden Corner Guest House. All rights reserved.
    </div>
    
    {/* WhatsApp FAB */}
    <a 
      href="https://wa.me/27786895713" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-linen-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50 flex items-center gap-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline font-bold">Need help? Message us</span>
    </a>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingContext, setBookingContext] = useState<{
    isOpen: boolean;
    intent: 'check_availability' | 'book_general' | 'book_specific';
    roomId?: number;
  }>({ isOpen: false, intent: 'book_general' });

  const openBooking = (intent: 'check_availability' | 'book_general' | 'book_specific', roomId?: number) => {
    setBookingContext({ isOpen: true, intent, roomId });
  };

  return (
    <div className="min-h-screen selection:bg-sage-mint selection:text-sage-secondary">
      <Navbar setCurrentPage={setCurrentPage} onOpenBooking={() => openBooking('book_general')} />
      {currentPage === 'home' ? (
        <>
          <Hero onOpenBooking={() => openBooking('check_availability')} />
          <TrustBar />
          <MeetTheHosts />
          <RoomGallery onOpenBooking={(roomId) => openBooking('book_specific', roomId)} setCurrentPage={setCurrentPage} />
          <Amenities />
          <HomeGallery setCurrentPage={setCurrentPage} />
          <FAQ />
          <ContactSection />
        </>
      ) : currentPage === 'gallery' ? (
        <FullGallery setCurrentPage={setCurrentPage} />
      ) : currentPage.startsWith('room_') ? (
        <RoomPage 
          roomId={parseInt(currentPage.split('_')[1])} 
          setCurrentPage={setCurrentPage} 
          onOpenBooking={(roomId) => openBooking('book_specific', roomId)} 
        />
      ) : null}
      <Footer />
      <BookingModal 
        isOpen={bookingContext.isOpen} 
        intent={bookingContext.intent}
        preselectedRoomId={bookingContext.roomId}
        onClose={() => setBookingContext(prev => ({ ...prev, isOpen: false }))} 
      />
    </div>
  );
}
