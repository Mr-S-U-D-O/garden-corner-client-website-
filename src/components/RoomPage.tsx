import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Users, Maximize, BedDouble, Star, MapPin } from 'lucide-react';
import { allRooms } from '../data/rooms';

interface RoomPageProps {
  roomId: number;
  setCurrentPage: (page: string) => void;
  onOpenBooking: (roomId: number) => void;
}

export const RoomPage = ({ roomId, setCurrentPage, onOpenBooking }: RoomPageProps) => {
  const room = allRooms.find(r => r.id === roomId);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Room not found.</p>
        <button onClick={() => setCurrentPage('home')} className="ml-4 text-indigo-primary underline">Go back</button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-stone-neutral/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-indigo-primary hover:text-terracotta-accent transition-colors font-bold uppercase tracking-wide text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-mint text-sage-secondary text-xs font-bold uppercase tracking-widest mb-4">
              {room.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-indigo-primary font-serif mb-4">{room.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-body/80 font-medium">
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-sage-secondary" /> {room.guests} Guests Maximum</span>
              <span className="flex items-center gap-2"><Maximize className="w-4 h-4 text-sage-secondary" /> {room.size}</span>
              <span className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-sage-secondary" /> {room.bed}</span>
            </div>
          </div>
          <div className="text-left lg:text-right">
            <div className="text-3xl lg:text-4xl font-bold text-indigo-primary">{room.price}</div>
            <div className="text-sm text-text-body/60 uppercase tracking-wider font-bold">per night</div>
            <button 
              onClick={() => onOpenBooking(room.id)}
              className="mt-4 bg-terracotta-accent text-linen-white px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-indigo-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-md w-full lg:w-auto"
            >
              Book This Room
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          <div className="lg:col-span-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-md">
            <img src={room.images[0]} alt={room.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-[200px] md:h-[500px]">
            <div className="rounded-2xl overflow-hidden shadow-md h-full">
              <img src={room.images[1]} alt={`${room.title} detail`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-full">
              <img src={room.images[2]} alt={`${room.title} detail`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif text-indigo-primary mb-4">About this space</h2>
              <p className="text-lg text-text-body/80 leading-relaxed font-light">
                {room.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-indigo-primary mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-text-body/80">
                    <CheckCircle2 className="w-5 h-5 text-sage-secondary shrink-0" />
                    <span className="font-medium">{amenity}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-text-body/80">
                  <CheckCircle2 className="w-5 h-5 text-sage-secondary shrink-0" />
                  <span className="font-medium">Free Parking on premises</span>
                </div>
                <div className="flex items-center gap-3 text-text-body/80">
                  <CheckCircle2 className="w-5 h-5 text-sage-secondary shrink-0" />
                  <span className="font-medium">Daily Housekeeping</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Testimonial */}
          <div className="space-y-8">
            <div className="bg-linen-white p-8 rounded-2xl shadow-elevation border border-stone-neutral">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />)}
              </div>
              <blockquote className="text-lg text-indigo-primary font-serif italic mb-6 leading-relaxed">
                "{room.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-mint rounded-full flex items-center justify-center text-sage-secondary font-bold text-xl">
                  {room.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-indigo-primary">{room.testimonial.author}</div>
                  <div className="text-xs text-text-body/60 uppercase tracking-wider">Verified Guest</div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-primary text-linen-white p-8 rounded-2xl shadow-elevation">
              <h3 className="text-xl font-serif mb-4">Ready to book?</h3>
              <p className="text-sm text-linen-white/80 mb-6">
                Secure your stay in the {room.title} today. We look forward to hosting you!
              </p>
              <button 
                onClick={() => onOpenBooking(room.id)}
                className="w-full bg-terracotta-accent text-linen-white px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
