import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Info, 
  BedDouble, 
  Mail, 
  Bell,
  Database,
  MessageCircle
} from 'lucide-react';
import { allRooms as rooms } from '../data/rooms';

interface BookingModalProps {
  isOpen: boolean;
  intent?: 'check_availability' | 'book_general' | 'book_specific';
  preselectedRoomId?: number;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, intent = 'book_general', preselectedRoomId, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [dateError, setDateError] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    roomId: preselectedRoomId || null as number | null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData(prev => ({ ...prev, roomId: preselectedRoomId || null }));
      setDateError('');
      setFormErrors({});
    }
  }, [isOpen, preselectedRoomId]);

  const validateDates = (checkIn: string, checkOut: string) => {
    if (!checkIn || !checkOut) {
      setDateError('');
      return false;
    }
    if (checkIn >= checkOut) {
      setDateError('Check-out date must be after check-in date.');
      return false;
    }
    setDateError('');
    return true;
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    if (field === 'firstName' && !value.trim()) error = 'First name is required';
    if (field === 'lastName' && !value.trim()) error = 'Last name is required';
    if (field === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
    }
    if (field === 'phone' && !value.trim()) error = 'Phone number is required';
    
    setFormErrors(prev => ({ ...prev, [field]: error }));
  };

  const updateForm = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === 'checkIn' || field === 'checkOut') {
        validateDates(newData.checkIn, newData.checkOut);
      }
      if (step === 3) {
        validateField(field, value);
      }
      return newData;
    });
  };

  const validateStep3 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.checkIn || !formData.checkOut) {
        setDateError('Please select check-in and check-out dates.');
        return;
      }
      if (!validateDates(formData.checkIn, formData.checkOut)) return;
    }
    if (step === 3) {
      if (!validateStep3()) return;
    }
    setStep(p => Math.min(3, p + 1));
  };
  const prevStep = () => setStep(p => Math.max(1, p - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      const room = rooms.find(r => r.id === formData.roomId);
      const roomName = room ? room.title : 'Any Room';
      const actionText = intent === 'check_availability' ? 'check availability for' : 'book';
      
      const message = `Hello Garden Corner Guest House! I would like to ${actionText} a stay.

*Guest Details:*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

*Stay Details:*
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.adults} Adults, ${formData.children} Children
Room Preference: ${roomName}

*Special Requests:*
${formData.specialRequests || 'None'}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/27786895713?text=${encodedMessage}`, '_blank');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-indigo-primary/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-linen-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 bg-linen-white/95 backdrop-blur-md border-b border-stone-neutral p-6 flex justify-between items-center z-20">
            <div>
              <h3 className="text-2xl font-serif text-indigo-primary">
                {intent === 'check_availability' ? 'Check Availability' : 
                 (intent === 'book_specific' && formData.roomId ? `Book ${rooms.find(r => r.id === formData.roomId)?.title}` : 'Reserve Your Stay')}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-sage-secondary font-bold uppercase tracking-wider">
                <span className={step >= 1 ? 'text-indigo-primary' : ''}>Dates</span>
                <span className="text-stone-neutral/50">/</span>
                <span className={step >= 2 ? 'text-indigo-primary' : ''}>Room</span>
                <span className="text-stone-neutral/50">/</span>
                <span className={step >= 3 ? 'text-indigo-primary' : ''}>Details</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 bg-stone-neutral rounded-full text-indigo-primary hover:bg-indigo-primary hover:text-linen-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 flex-1">
            <AnimatePresence mode="wait">
              {/* STEP 1: DATES & GUESTS */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Check-in Date
                      </label>
                      <input 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.checkIn}
                        onChange={(e) => updateForm('checkIn', e.target.value)}
                        className={`w-full p-4 border-2 rounded-xl focus:ring-0 outline-none transition-colors bg-white ${dateError && !formData.checkIn ? 'border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Check-out Date
                      </label>
                      <input 
                        type="date" 
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        value={formData.checkOut}
                        onChange={(e) => updateForm('checkOut', e.target.value)}
                        className={`w-full p-4 border-2 rounded-xl focus:ring-0 outline-none transition-colors bg-white ${dateError && !formData.checkOut ? 'border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} 
                      />
                    </div>
                  </div>
                  
                  {dateError && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg border border-red-200">
                      {dateError}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Adults
                      </label>
                      <select 
                        value={formData.adults}
                        onChange={(e) => updateForm('adults', parseInt(e.target.value))}
                        className="w-full p-4 border-2 border-stone-neutral rounded-xl focus:border-indigo-primary outline-none bg-white appearance-none"
                      >
                        {[1, 2, 3, 4].map(num => <option key={num} value={num}>{num}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Children
                      </label>
                      <select 
                        value={formData.children}
                        onChange={(e) => updateForm('children', parseInt(e.target.value))}
                        className="w-full p-4 border-2 border-stone-neutral rounded-xl focus:border-indigo-primary outline-none bg-white appearance-none"
                      >
                        {[0, 1, 2, 3].map(num => <option key={num} value={num}>{num}</option>)}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: ROOM SELECTION */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-text-body/80 mb-4">
                    {intent === 'check_availability' ? 'Which room are you interested in checking?' : 
                     intent === 'book_specific' ? 'Confirm your room selection' : 
                     'Select the perfect space for your stay.'}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {rooms.map((room) => (
                      <div 
                        key={room.id}
                        onClick={() => updateForm('roomId', room.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 ${formData.roomId === room.id ? 'border-indigo-primary bg-indigo-primary/5' : 'border-stone-neutral hover:border-indigo-primary/50 bg-white'}`}
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-xl font-serif text-indigo-primary">{room.title}</h4>
                            {room.availability !== 'Available' && (
                              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${room.availability.includes('Only') ? 'bg-terracotta-accent/10 text-terracotta-accent' : 'bg-sage-mint text-sage-secondary'}`}>
                                {room.availability}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-text-body/70">
                            <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> {room.bed}</span>
                            <span>{room.size}</span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-xl font-bold text-indigo-primary">{room.price}</div>
                          <div className="text-xs text-text-body/60 uppercase tracking-wider">per night</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: GUEST DETAILS */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-indigo-primary mb-2">First Name</label>
                        <input type="text" value={formData.firstName} onChange={(e) => updateForm('firstName', e.target.value)} className={`w-full p-4 border-2 rounded-xl outline-none bg-white transition-colors ${formErrors.firstName ? 'border-red-500 focus:border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} placeholder="John" />
                        {formErrors.firstName && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-indigo-primary mb-2">Last Name</label>
                        <input type="text" value={formData.lastName} onChange={(e) => updateForm('lastName', e.target.value)} className={`w-full p-4 border-2 rounded-xl outline-none bg-white transition-colors ${formErrors.lastName ? 'border-red-500 focus:border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} placeholder="Doe" />
                        {formErrors.lastName && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.lastName}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-indigo-primary mb-2">Email Address</label>
                        <input type="email" value={formData.email} onChange={(e) => updateForm('email', e.target.value)} className={`w-full p-4 border-2 rounded-xl outline-none bg-white transition-colors ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} placeholder="john@example.com" />
                        {formErrors.email && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-indigo-primary mb-2">Phone Number</label>
                        <input type="tel" value={formData.phone} onChange={(e) => updateForm('phone', e.target.value)} className={`w-full p-4 border-2 rounded-xl outline-none bg-white transition-colors ${formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-stone-neutral focus:border-indigo-primary'}`} placeholder="+27 12 345 6789" />
                        {formErrors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{formErrors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-indigo-primary mb-2">Special Requests (Optional)</label>
                      <textarea rows={3} value={formData.specialRequests} onChange={(e) => updateForm('specialRequests', e.target.value)} className="w-full p-4 border-2 border-stone-neutral rounded-xl focus:border-indigo-primary outline-none bg-white resize-none" placeholder="Dietary requirements, arrival time, etc."></textarea>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-stone-neutral bg-stone-neutral/30 flex justify-between items-center rounded-b-2xl">
            <button 
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide text-sm transition-colors ${step === 1 ? 'invisible' : 'text-indigo-primary hover:text-indigo-light'}`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                disabled={(step === 1 && !!dateError) || (step === 2 && !formData.roomId)}
                className="flex items-center gap-2 px-8 py-3 bg-indigo-primary text-linen-white rounded-md font-bold uppercase tracking-wide text-sm hover:bg-indigo-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                form="booking-form"
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-md font-bold uppercase tracking-wide text-sm hover:brightness-110 transition-colors shadow-md"
              >
                {intent === 'check_availability' ? 'Check Availability via WhatsApp' : 'Complete Booking via WhatsApp'} <MessageCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
