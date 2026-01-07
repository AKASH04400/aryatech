/** @format */

import React, { useState, useEffect, useRef } from 'react';
import {
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  MessageCircle,
  X,
  ArrowRight,
  Menu,
  Check,
  MapPin,
  Phone,
  Send,
  Clock,
  Shield,
  CreditCard,
  Star,
  Calendar,
  User,
  ChevronDown,
  Home,
  Zap,
  Activity,
  Navigation,
  Sparkles,
  Cloud,
  Brush,
  Settings,
  ArrowUpCircle,
  Database,
  Download,
  Briefcase,
  Laptop,
  Wifi,
  Smartphone,
  Headphones,
  ShieldAlert,
  Globe,
} from 'lucide-react';

// --- Constants ---
const PHONE_NUMBER = '+918762358095';
const PHONE_DISPLAY = '+91 87623 58095';

// Services

const ALL_SERVICES = [
  {
    icon: Sparkles,
    title: 'Cleanup & Optimization',
    description:
      'Speed up your slow computer by removing junk files and optimizing settings.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description:
      'Setup and management of secure cloud storage and computing solutions.',
  },
  {
    icon: Brush,
    title: 'Computer Cleaning',
    description:
      'Physical deep cleaning of internal components to prevent overheating.',
  },
  {
    icon: Settings,
    title: 'Computer Customization',
    description:
      'Tailoring your OS and software environment to your specific workflow.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Computer Upgrades',
    description: 'Boost performance with new RAM, SSDs, or graphics cards.',
  },
  {
    icon: Cpu,
    title: 'Custom Computer Building',
    description:
      'High-performance rigs built from scratch for gaming or professional work.',
  },
  {
    icon: Database,
    title: 'Data Backup & Recovery',
    description:
      'Secure backups and professional retrieval of lost or corrupted data.',
  },
  {
    icon: Download,
    title: 'Hardware & Software Install',
    description: 'Expert installation of new parts or complex software suites.',
  },
  {
    icon: Briefcase,
    title: 'IT Consulting',
    description:
      'Professional advice on upgrading your home or office tech infrastructure.',
  },
  {
    icon: Laptop,
    title: 'Mac Services',
    description:
      'Specialized diagnostics, repair, and software support for Apple devices.',
  },
  {
    icon: Wifi,
    title: 'Network & Print Setup',
    description:
      'Configuring home Wi-Fi networks and connecting wireless printers.',
  },
  {
    icon: Smartphone,
    title: 'Phone & Tablet Repair',
    description:
      'Screen fixes, battery replacements, and troubleshooting for mobile devices.',
  },
  {
    icon: Headphones,
    title: 'Service Support',
    description:
      'Ongoing technical support and troubleshooting for your devices.',
  },
  {
    icon: ShieldAlert,
    title: 'Virus & Malware Removal',
    description:
      'Detecting and eliminating security threats to keep your data safe.',
  },
  {
    icon: Monitor,
    title: 'Screen Replacement',
    description:
      'Replacing cracked or malfunctioning screens on laptops and mobiles.',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description:
      'Modern, responsive websites tailored to build your brand and business online.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Nayana Shyam',
    role: 'Local Resident',
    stars: 5,
    content:
      'Helpful. The service was excellent and Mr. Nagendra explained everything clearly. Very happy with the repair.',
  },
  {
    name: 'Rohan',
    role: 'Customer',
    stars: 5,
    content:
      'Best place for laptop service in Mangalore. Very professional and quick response. Highly recommended!',
  },
  {
    name: 'Ashu',
    role: 'Long-time Customer',
    stars: 5,
    content:
      'Excellent service. I have been visiting for 5 years now for all my computer needs. Trustworthy and reliable.',
  },
  {
    name: 'Priya Shetty',
    role: 'Customer',
    stars: 5,
    content:
      'Mr. Nagendra went above and beyond to fix my laptop. Very professional and friendly behavior. Truly appreciable.',
  },
  {
    name: 'Rahul Kamath',
    role: 'Gaming Enthusiast',
    stars: 5,
    content:
      'I went in for a hardware upgrade. They provided high-quality components and the price was very reasonable compared to others.',
  },
  {
    name: 'Karthik Bhat',
    role: 'Business Owner',
    stars: 5,
    content:
      'Quick resolution for my display issue. They identified the problem immediately and fixed it within a day.',
  },
];

// --- Styles for Animation ---
const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(15px) rotate(-5deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  @keyframes gradient-move {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float 7s ease-in-out infinite 1s;
  }
  .animate-float-reverse {
    animation: float-reverse 8s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  .animate-gradient-move {
    background-size: 200% 200%;
    animation: gradient-move 6s ease infinite;
  }
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;

// --- Components ---

const HeroVisuals = () => (
  <div className='absolute inset-0 pointer-events-none overflow-hidden select-none'>
    <style>{animationStyles}</style>

    {/* Abstract Circuit Grid */}
    <div
      className='absolute inset-0 opacity-[0.03]'
      style={{
        backgroundImage:
          'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    {/* Ambient Glows */}
    <div className='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-glow' />
    <div
      className='absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-glow'
      style={{ animationDelay: '1.5s' }}
    />

    {/* Floating 3D Elements */}
    <div className='absolute top-[15%] left-[10%] opacity-20 animate-float hidden md:block'>
      <div className='relative'>
        <div className='absolute inset-0 bg-blue-500 blur-xl opacity-50' />
        <Monitor size={64} className='text-blue-300 relative z-10' />
      </div>
    </div>

    <div className='absolute top-[25%] right-[15%] opacity-10 animate-float-reverse hidden md:block'>
      <div className='relative'>
        <Cpu size={80} className='text-indigo-300 relative z-10' />
        <div className='absolute -top-2 -right-2 text-blue-400'>
          <Zap size={24} className='animate-bounce' />
        </div>
      </div>
    </div>

    <div className='absolute bottom-[20%] left-[20%] opacity-10 animate-float-delayed hidden md:block'>
      <HardDrive size={56} className='text-cyan-300' />
    </div>

    {/* Diagnostic Code Snippets (Decorative) */}
    <div className='absolute top-1/3 left-4 text-[10px] font-mono text-blue-500/20 hidden lg:block space-y-1'>
      <div>&gt; SYSTEM_CHECK_INIT</div>
      <div>&gt; DIAGNOSTIC_RUNNING...</div>
      <div>&gt; CPU_TEMP: OK</div>
      <div>&gt; MEMORY_INTEGRITY: 98%</div>
    </div>

    <div className='absolute bottom-1/3 right-4 text-[10px] font-mono text-indigo-500/20 hidden lg:block space-y-1 text-right'>
      <div>HARDWARE_DETECTED &lt;</div>
      <div>OPTIMIZATION_PENDING... &lt;</div>
      <div>REPAIR_MODULE_LOADED &lt;</div>
    </div>
  </div>
);

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle =
    'relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 focus:ring-blue-500 border border-transparent',
    secondary:
      'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 focus:ring-neutral-500 hover:border-neutral-600',
    ghost:
      'bg-transparent hover:bg-neutral-800 text-neutral-300 hover:text-white',
    white:
      'bg-white hover:bg-blue-50 text-blue-900 shadow-xl shadow-blue-900/20 focus:ring-white border border-transparent',
    whatsapp:
      'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 hover:shadow-green-900/40 border border-transparent',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer Effect for Primary Buttons */}
      {variant === 'primary' || variant === 'white' ? (
        <div className='absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10' />
      ) : null}
      <span className='relative z-20 flex items-center gap-2'>{children}</span>
    </button>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className='group p-6 rounded-2xl bg-neutral-800/50 border border-neutral-800 hover:border-blue-500/30 hover:bg-neutral-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10'>
    <div className='w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500'>
      <Icon className='w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-500' />
    </div>
    <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
    <p className='text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500'>
      {description}
    </p>
  </div>
);

const ProcessStep = ({ number, title, description, isLast }) => (
  <div className='relative flex flex-col items-center text-center flex-1 group'>
    {!isLast && (
      <div className='hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-neutral-800 -z-10 overflow-hidden'>
        <div className='w-full h-full bg-blue-600/30 origin-left scale-x-0 transition-transform duration-1000 group-hover:scale-x-100' />
      </div>
    )}
    <div className='w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 group-hover:border-blue-500/50 group-hover:bg-neutral-800/80 flex items-center justify-center mb-6 text-2xl font-bold text-blue-500 shadow-lg shadow-blue-900/10 z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-600/20'>
      {number}
    </div>
    <h3 className='text-lg font-semibold text-white mb-2'>{title}</h3>
    <p className='text-neutral-400 text-sm max-w-[250px] leading-relaxed'>
      {description}
    </p>
  </div>
);

const TestimonialCard = ({ name, role, content, stars }) => (
  <div className='p-6 rounded-2xl bg-neutral-900 border border-neutral-800 h-full flex flex-col hover:border-neutral-700 transition-colors duration-300'>
    <div className='flex gap-1 mb-4'>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < stars
              ? 'text-yellow-500 fill-yellow-500'
              : 'text-neutral-800 fill-neutral-800'
          }`}
        />
      ))}
    </div>
    <p className='text-neutral-300 text-sm mb-6 leading-relaxed flex-grow'>
      "{content}"
    </p>
    <div className='flex items-center gap-3 pt-4 border-t border-neutral-800/50'>
      <div className='w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center font-bold text-blue-400'>
        {name[0]}
      </div>
      <div>
        <div className='text-white font-medium text-sm'>{name}</div>
        <div className='text-neutral-500 text-xs'>{role}</div>
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-b border-neutral-800 last:border-0'>
      <button
        className='w-full py-5 flex items-center justify-between text-left focus:outline-none group'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-medium text-neutral-200 group-hover:text-blue-400 transition-colors pr-8'>
          {question}
        </span>
        {isOpen ? (
          <ChevronDown
            size={18}
            className='text-blue-500 rotate-180 transition-transform duration-300'
          />
        ) : (
          <ChevronDown
            size={18}
            className='text-neutral-500 transition-transform duration-300'
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='text-neutral-400 text-sm leading-relaxed'>{answer}</p>
      </div>
    </div>
  );
};

// --- New Location Modal ---
const LocationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300'>
      <div className='w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col'>
        {/* Header */}
        <div className='p-6 border-b border-neutral-800 flex justify-between items-center bg-neutral-800/50'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center'>
              <Navigation className='w-5 h-5 text-blue-500' />
            </div>
            <div>
              <h3 className='text-xl font-bold text-white'>Find Us</h3>
              <p className='text-neutral-400 text-xs'>
                Easy access in the heart of Mangalore
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors'
          >
            <X size={20} />
          </button>
        </div>

        {/* Map Container */}
        <div className='relative w-full h-[400px] bg-neutral-950'>
          <iframe
            src='https://maps.google.com/maps?q=Aarya+Technologies+Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed'
            width='100%'
            height='100%'
            style={{
              border: 0,
              filter: 'grayscale(100%) invert(90%) contrast(85%)',
            }} // CSS filter for dark mode map effect
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='opacity-80 hover:opacity-100 transition-opacity duration-500'
          ></iframe>

          {/* Overlay Gradient for seamless integration */}
          <div className='absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none' />
        </div>

        {/* Footer Info */}
        <div className='p-6 bg-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='text-sm text-neutral-400'>
            <span className='text-white font-medium'>Open Map App?</span> Get
            turn-by-turn directions.
          </div>
          <Button
            variant='primary'
            className='w-full sm:w-auto gap-2 py-2'
            onClick={() =>
              window.open(
                'https://maps.google.com/maps?q=Aarya+Technologies+Mangalore',
                '_blank'
              )
            }
          >
            <MapPin size={16} /> Open in Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- Booking / Contact Modal ---
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300'>
      <div className='w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden relative animate-in slide-in-from-bottom-8 duration-500'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition-colors'
        >
          <X size={20} />
        </button>

        <div className='p-8 text-center'>
          <div className='w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6'>
            <Home className='w-8 h-8 text-blue-500' />
          </div>

          <h3 className='text-2xl font-bold text-white mb-2'>
            Visit Our Store
          </h3>
          <p className='text-neutral-400 mb-8'>
            Bring your device in for a professional inspection.
          </p>

          <div className='space-y-4 text-left bg-neutral-800/50 p-6 rounded-2xl border border-neutral-800 mb-8'>
            <div className='flex items-start gap-4'>
              <MapPin className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
              <div>
                <div className='text-white font-medium'>Aarya Technologies</div>
                <div className='text-neutral-400 text-sm leading-relaxed'>
                  #46, 1st Floor, Venkatramana Building,
                  <br />
                  Near Temple Square, Car Street,
                  <br />
                  Mangalore - 575001
                </div>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Clock className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
              <div>
                <div className='text-white font-medium'>Opening Hours</div>
                <div className='text-neutral-400 text-sm'>
                  Mon - Sat: 9:30 AM - 7:30 PM
                </div>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Phone className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
              <div>
                <div className='text-white font-medium'>Phone</div>
                <div className='text-neutral-400 text-sm'>{PHONE_DISPLAY}</div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <Button
              variant='primary'
              className='w-full gap-2'
              onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
            >
              <Phone size={18} /> Call Us Now
            </Button>
            <Button variant='secondary' className='w-full' onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Chat Widget ---
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Hello! 👋 Welcome to Aarya Technologies. Briefly describe the issue you are facing with your computer.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // State for data collection steps: problem -> device -> name -> phone -> completed
  const [chatStep, setChatStep] = useState('problem');
  const [ticketData, setTicketData] = useState({
    problem: '',
    device: '',
    name: '',
    phone: '',
  });

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Capture User Input
    const userText = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    // 2. Chatbot Logic Flow
    setTimeout(() => {
      let nextStep = chatStep;
      let botText = '';
      let actionButton = null;
      let newTicketData = { ...ticketData };

      const lowerText = userText.toLowerCase();

      // --- STEP: PROBLEM COLLECTION ---
      if (chatStep === 'problem') {
        // A. Detect Gratitude
        const gratitudeKeywords = [
          'thanks',
          'thank you',
          'thx',
          'tysm',
          'thank u',
          'cheers',
          'appreciate',
          'gracias',
          'merci',
        ];
        const isGratitude =
          gratitudeKeywords.some((g) => lowerText.includes(g)) &&
          userText.split(' ').length < 6;

        // B. Detect Greetings
        const greetingKeywords = [
          'hi',
          'hello',
          'hey',
          'greetings',
          'namaste',
          'hola',
          'good morning',
          'good afternoon',
          'good evening',
          'yo',
          'sup',
          'hiya',
          'howdy',
          "what's up",
        ];
        const isGreeting =
          greetingKeywords.some((g) => lowerText.startsWith(g)) &&
          userText.split(' ').length < 5;

        // C. Detect Rubbish (gibberish, too short, keyboard smash)
        const isTooShort =
          userText.length < 3 &&
          !['pc', 'hp', 'os', 'mac', 'no', 'hi', 'ok'].includes(lowerText);
        const isRepeating = /(.)\1{3,}/.test(userText); // Catches "aaaa", "...."

        // Catches "adaklkzvnhsl" (5+ consecutive consonants)
        const isMash = /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(userText);

        // Check for very low vowel count in longer words (e.g., "sdfghjkl")
        const vowelCount = (userText.match(/[aeiou]/gi) || []).length;
        const isLowVowels = userText.length > 6 && vowelCount === 0;

        const isRubbish = isTooShort || isRepeating || isMash || isLowVowels;

        if (isGratitude) {
          botText =
            "You're very welcome! 😊 Is there anything else I can help you with regarding your computer today?";
          // Stay on 'problem' step
        } else if (isGreeting) {
          botText =
            "Hello! 👋 I'm here to help you get your device fixed. Could you tell me a bit about the issue you're facing?";
          // Stay on 'problem' step
        } else if (isRubbish) {
          botText =
            "I didn't quite catch that. 🤔 It looks like there might be a typo. Could you please describe the issue you're facing with your device?";
          // Stay on 'problem' step
        } else {
          // D. Smart Context Analysis (Expanded)
          newTicketData.problem = userText;

          // Display / Screen
          if (
            lowerText.match(
              /screen|display|crack|broken|lines|flicker|black|monitor|pixels|dim/
            )
          ) {
            botText =
              'Oh, a display issue. 🖥️ To check if we have the replacement screen in stock, I need your exact **Device Model** (e.g., HP Pavilion 15, MacBook Air M1).';
          }
          // Power / Battery
          else if (
            lowerText.match(
              /battery|charge|charging|power|on|dead|adaptor|charger|drain|plug/
            )
          ) {
            botText =
              'Power issues can be tricky. 🔋 Could you share your **Device Model** so I can check for compatible parts?';
          }
          // Speed / Performance
          else if (
            lowerText.match(
              /slow|hang|lag|speed|freeze|stuck|performance|fps|boot|startup/
            )
          ) {
            botText =
              'We can definitely speed that up! 🚀 What specific **Device Model** are you using?';
          }
          // Liquid Damage
          else if (
            lowerText.match(/water|liquid|spill|tea|coffee|juice|wet|rain/)
          ) {
            botText =
              'Liquid damage needs urgent attention! 💧 Please tell me your **Device Model** and try to keep it turned off.';
          }
          // Keyboard / Input
          else if (
            lowerText.match(
              /keyboard|keys|typing|button|trackpad|mouse|touchpad/
            )
          ) {
            botText =
              'Sounds like an input issue. ⌨️ To find the right keyboard replacement, I need your **Device Model**.';
          }
          // Audio / Sound
          else if (
            lowerText.match(
              /sound|audio|speaker|mic|microphone|hear|volume|mute|headphone/
            )
          ) {
            botText =
              "Let's get that sound working again. 🔊 Which **Device Model** is having this trouble?";
          }
          // Overheating
          else if (
            lowerText.match(
              /heat|hot|overheat|fan|noise|loud|thermal|temperature|burn/
            )
          ) {
            botText =
              'Overheating can damage components. 🔥 What is your **Device Model** so we can check the cooling system?';
          }
          // Software / OS / Virus
          else if (
            lowerText.match(
              /virus|malware|window|install|format|reset|update|blue screen|bsod|crash|hack|popups/
            )
          ) {
            botText =
              'Software troubles are annoying but fixable. 💿 What **Device Model** (or OS) are you running?';
          }
          // Data Recovery
          else if (
            lowerText.match(
              /data|file|recover|delete|lost|backup|hard drive|ssd|photos/
            )
          ) {
            botText =
              'Data is precious. 💾 To help us determine the best recovery method, what is your **Device Model**?';
          }
          // General
          else {
            botText =
              'Understood. To help us identify the right parts or solution, could you please tell me your **Device Model**? (e.g., Dell Inspiron, MacBook Pro)';
          }

          nextStep = 'device';
        }
      }
      // --- STEP: DEVICE COLLECTION ---
      else if (chatStep === 'device') {
        if (userText.length < 2) {
          botText =
            'That model name seems a bit short. 🧐 Could you please double-check and enter the full **Device Model**? This helps us check part availability.';
        } else {
          newTicketData.device = userText;
          botText = 'Got it. May I know your **Name**?';
          nextStep = 'name';
        }
      }
      // --- STEP: NAME COLLECTION ---
      else if (chatStep === 'name') {
        if (userText.length < 2) {
          botText =
            'That seems a bit short. Please enter your full **Name** so we know who to address. 😊';
        } else {
          newTicketData.name = userText;
          botText = `Nice to meet you, ${userText}! 👋 Lastly, please share your **Phone Number** 📱 so we can contact you with a quote.`;
          nextStep = 'phone';
        }
      }
      // --- STEP: PHONE COLLECTION ---
      else if (chatStep === 'phone') {
        const cleanedPhone = userText.replace(/\D/g, ''); // Extract digits

        if (cleanedPhone.length < 10) {
          botText =
            'That number looks incomplete. Please enter a valid **10-digit mobile number** so we can reach you.';
        } else {
          newTicketData.phone = userText;

          // Final Processing
          setMessages((prev) => [
            ...prev,
            { role: 'bot', text: 'Analyzing your request...' },
          ]);

          setTimeout(() => {
            const finalData = { ...newTicketData, phone: userText };
            const waMessage = `*New Service Inquiry* 🛠️\n\n*Name:* ${finalData.name}\n*Issue:* ${finalData.problem}\n*Device:* ${finalData.device}\n*Contact:* ${finalData.phone}\n\n_Sent via Website Chat_`;
            const waLink = `https://wa.me/918762358095?text=${encodeURIComponent(
              waMessage
            )}`;

            setMessages((prev) => [
              ...prev.filter((m) => m.text !== 'Analyzing your request...'),
              {
                role: 'bot',
                text: `Thanks ${finalData.name}! I've created a priority ticket for you. ✅\n\nClick the button below to send these details directly to our owner via WhatsApp for the fastest response.`,
                action: { label: 'Send to WhatsApp', link: waLink },
              },
            ]);
          }, 1500);

          setChatStep('completed');
          setTicketData(newTicketData); // Save final state
          setIsTyping(false);
          return; // Exit here to handle final message internally
        }
      }
      // --- STEP: COMPLETED ---
      else {
        botText =
          "We have received your details. Please click the button above to send via WhatsApp if you haven't already.";
      }

      // Standard Response Update (for steps 1 & 2)
      setTicketData(newTicketData);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: botText, action: actionButton },
      ]);
      setChatStep(nextStep);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className='fixed bottom-6 right-6 z-40 flex flex-col items-end'>
      {/* Chat Window */}
      {isOpen && (
        <div className='mb-4 w-80 sm:w-96 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200 flex flex-col h-[450px]'>
          <div className='p-4 bg-neutral-800/50 border-b border-neutral-800 flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse absolute -right-0.5 -top-0.5' />
                <MessageCircle size={18} className='text-blue-500' />
              </div>
              <span className='font-semibold text-white text-sm'>
                Support Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='text-neutral-400 hover:text-white transition-colors'
            >
              <X size={18} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className='flex-1 p-4 overflow-y-auto space-y-4 bg-neutral-900 scroll-smooth'
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'bot' ? 'bg-blue-600' : 'bg-neutral-700'
                    }`}
                  >
                    <span className='text-xs font-bold text-white'>
                      {msg.role === 'bot' ? 'AT' : 'You'}
                    </span>
                  </div>
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-neutral-800 rounded-tl-none text-neutral-300'
                        : 'bg-blue-600 rounded-tr-none text-white'
                    }`}
                  >
                    {msg.text.split('**').map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className='text-white'>
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </div>
                </div>
                {/* Action Button for Bot */}
                {msg.action && (
                  <div className='mt-2 ml-11 animate-in slide-in-from-bottom-2 fade-in duration-500'>
                    <a
                      href={msg.action.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-green-900/20 hover:shadow-green-900/40'
                    >
                      <MessageCircle size={16} />
                      {msg.action.label}
                    </a>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className='flex gap-3'>
                <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0'>
                  <span className='text-xs font-bold text-white'>AT</span>
                </div>
                <div className='bg-neutral-800 p-3 rounded-2xl rounded-tl-none text-sm text-neutral-300 flex items-center gap-2'>
                  <span
                    className='w-2 h-2 bg-neutral-500 rounded-full animate-bounce'
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className='w-2 h-2 bg-neutral-500 rounded-full animate-bounce'
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className='w-2 h-2 bg-neutral-500 rounded-full animate-bounce'
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className='p-3 bg-neutral-800/30 border-t border-neutral-800 flex gap-2'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={
                chatStep === 'problem'
                  ? 'Describe your issue...'
                  : chatStep === 'device'
                  ? 'Enter device model...'
                  : chatStep === 'name'
                  ? 'Enter your name...'
                  : 'Enter phone number...'
              }
              className='flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-neutral-600'
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className='p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors'
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-105 active:scale-95'
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        <span className='font-medium'>{isOpen ? 'Close' : 'Chat Support'}</span>
      </button>
    </div>
  );
};

// --- Main Application ---

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [visibleServices, setVisibleServices] = useState(4); // Start with 4 services
  const [visibleTestimonials, setVisibleTestimonials] = useState(3); // Start with 3

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, ALL_SERVICES.length));
  };

  const handleLoadMoreTestimonials = () => {
    // Show 3 more, but don't exceed the total length
    setVisibleTestimonials((prev) => Math.min(prev + 3, TESTIMONIALS.length));
  };

  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200'>
      {/* Navbar - Fixed Full Width */}
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 border-b border-neutral-800/50 backdrop-blur-md bg-neutral-900/80`}
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <img
              src='logo.png'
              alt='Aarya Technologies'
              className='w-8 h-8 rounded-lg object-contain'
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className='w-8 h-8 bg-blue-600 rounded-lg hidden items-center justify-center'>
              <Cpu className='text-white w-5 h-5' />
            </div>
            <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 tracking-tight'>
              Aarya Technologies
            </span>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#services'
              className='text-lg font-medium text-neutral-400 hover:text-white transition-colors'
            >
              Services
            </a>
            <a
              href='#process'
              className='text-lg font-medium text-neutral-400 hover:text-white transition-colors'
            >
              Process
            </a>
            <a
              href='#about'
              className='text-lg font-medium text-neutral-400 hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#testimonials'
              className='text-lg font-medium text-neutral-400 hover:text-white transition-colors'
            >
              Stories
            </a>
          </div>

          {/* CTA & Mobile Menu */}
          <div className='flex items-center gap-4'>
            <Button
              variant='primary'
              className='hidden md:inline-flex py-2 px-4 text-sm rounded-lg'
              onClick={() => setBookingOpen(true)}
            >
              Get Help
            </Button>
            <button
              className='md:hidden text-neutral-400 hover:text-white'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className='md:hidden border-t border-neutral-800 bg-neutral-900 p-4 space-y-4 animate-in slide-in-from-top-5'>
            <a
              href='#services'
              className='block text-neutral-300 hover:text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href='#process'
              className='block text-neutral-300 hover:text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href='#about'
              className='block text-neutral-300 hover:text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Button
              variant='primary'
              className='w-full justify-center'
              onClick={() => {
                setBookingOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Get Help
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper (shifted down for fixed nav) */}
      <div className='pt-20'>
        {/* Hero Section */}
        <section className='relative px-6 py-24 md:py-36 text-center overflow-hidden w-full bg-neutral-950'>
          <HeroVisuals />

          <FadeIn className='relative z-10 max-w-4xl mx-auto space-y-8'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/30 text-blue-400 text-xs font-medium uppercase tracking-wider backdrop-blur-sm'>
              <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
              Now accepting new repairs
            </div>

            <h1 className='text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]'>
              Computer Problems. <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>
                Fixed.
              </span>
            </h1>

            <p className='text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Honest repair services for laptops and desktops. Clear diagnosis,
              transparent pricing, and no unnecessary replacements.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
              <Button
                className='w-full sm:w-auto gap-2'
                onClick={() => setBookingOpen(true)}
              >
                Book Repair
                <ArrowRight size={18} />
              </Button>
              <Button
                variant='secondary'
                className='w-full sm:w-auto gap-2'
                onClick={() => setMapOpen(true)}
              >
                <MapPin size={18} className='text-neutral-400' /> Visit Store
              </Button>
            </div>

            <div className='pt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-neutral-500'>
              <div className='flex items-center gap-2'>
                <Check className='text-blue-500 w-4 h-4' /> No Fix, No Fee
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-blue-500 w-4 h-4' /> 90-Day Warranty
              </div>
              <div className='flex items-center gap-2'>
                <Check className='text-blue-500 w-4 h-4' /> Same Day Diagnostics
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Services Section */}
        <section id='services' className='px-6 py-24 bg-neutral-900 w-full'>
          <FadeIn className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                What We Help With
              </h2>
              <p className='text-neutral-400'>
                Expert care for your essential devices.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {ALL_SERVICES.slice(0, visibleServices).map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

            {visibleServices < ALL_SERVICES.length && (
              <div className='text-center mt-12'>
                <Button variant='secondary' onClick={handleLoadMore}>
                  Load More Services <ChevronDown size={18} className='ml-2' />
                </Button>
              </div>
            )}
          </FadeIn>
        </section>

        {/* Process Section */}
        <section
          id='process'
          className='px-6 py-24 bg-neutral-950 w-full border-t border-neutral-900'
        >
          <FadeIn className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Simple Repair Process
              </h2>
              <p className='text-neutral-400'>
                We keep you informed every step of the way.
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-12 md:gap-4 justify-between'>
              <ProcessStep
                number='1'
                title='Free Diagnosis'
                description='Bring your device in. We check it thoroughly and explain the issue for free.'
              />
              <ProcessStep
                number='2'
                title='Clear Quote'
                description='You get a fixed price. No hidden fees or surprise charges later.'
              />
              <ProcessStep
                number='3'
                title='Expert Repair'
                description='We fix it using high-quality parts and testing tools.'
              />
              <ProcessStep
                number='4'
                title='Pickup & Warranty'
                description='Collect your device and enjoy our 90-day peace-of-mind warranty.'
                isLast={true}
              />
            </div>
          </FadeIn>
        </section>

        {/* About Section */}
        <section id='about' className='px-6 py-24 bg-neutral-900 w-full'>
          <FadeIn className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16'>
            <div className='flex-1 space-y-8'>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>
                Why Locals Trust Aarya
              </h2>
              <p className='text-neutral-400 leading-relaxed text-lg'>
                Established in 2020, Aarya Technologies started because we were
                tired of seeing people overcharged for simple fixes. We believe
                in honest work, clear communication, and treating every computer
                like it's our own.
              </p>

              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='p-2 bg-blue-500/10 rounded-lg'>
                    <Shield className='w-6 h-6 text-blue-500' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-lg'>
                      Transparent Pricing
                    </h4>
                    <p className='text-neutral-400'>
                      You'll know exactly what you're paying for before we start
                      any work.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='p-2 bg-blue-500/10 rounded-lg'>
                    <Clock className='w-6 h-6 text-blue-500' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-lg'>
                      Fast Turnaround
                    </h4>
                    <p className='text-neutral-400'>
                      Most software issues are fixed same-day. Hardware
                      typically takes 24-48 hours.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='p-2 bg-blue-500/10 rounded-lg'>
                    <User className='w-6 h-6 text-blue-500' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-lg'>
                      Personalized Service
                    </h4>
                    <p className='text-neutral-400'>
                      You talk directly to the expert technician working on your
                      device.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-1 relative'>
              <div className='absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full' />
              <div className='relative z-10 grid grid-cols-2 gap-4'>
                <div className='bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-800/80 transition-colors'>
                  <div className='text-4xl font-bold text-white mb-2'>
                    2000+
                  </div>
                  <div className='text-neutral-500 text-sm'>Devices Fixed</div>
                </div>
                <div className='bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-center mt-8 hover:bg-neutral-800/80 transition-colors'>
                  <div className='text-4xl font-bold text-white mb-2'>100%</div>
                  <div className='text-neutral-500 text-sm'>Satisfaction</div>
                </div>
                <div className='bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-center hover:bg-neutral-800/80 transition-colors'>
                  <div className='text-4xl font-bold text-white mb-2'>5.0</div>
                  <div className='text-neutral-500 text-sm'>
                    JustDial Rating
                  </div>
                </div>
                <div className='bg-neutral-950 p-6 rounded-2xl border border-neutral-800 text-center mt-8 hover:bg-neutral-800/80 transition-colors'>
                  <div className='text-4xl font-bold text-white mb-2'>
                    Since
                  </div>
                  <div className='text-neutral-500 text-sm'>2020</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Testimonials Section */}
        <section
          id='testimonials'
          className='px-6 py-24 bg-neutral-950 w-full border-t border-neutral-900'
        >
          <FadeIn className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Customer Stories
              </h2>
              <p className='text-neutral-400'>
                Trusted by over 100+ happy customers on JustDial.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {TESTIMONIALS.slice(0, visibleTestimonials).map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    stars={testimonial.stars}
                    content={testimonial.content}
                  />
                )
              )}
            </div>

            {visibleTestimonials < TESTIMONIALS.length && (
              <div className='text-center mt-12'>
                <Button
                  variant='secondary'
                  onClick={handleLoadMoreTestimonials}
                >
                  Read More Stories <ChevronDown size={18} className='ml-2' />
                </Button>
              </div>
            )}
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <section className='px-6 py-24 bg-neutral-900 w-full'>
          <FadeIn className='max-w-3xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Frequently Asked Questions
              </h2>
            </div>

            <div className='space-y-2'>
              <FaqItem
                question='Do you charge for diagnostics?'
                answer="No, our initial diagnostic is completely free. We'll check your device, tell you what's wrong, and give you a quote. You only pay if you proceed with the repair."
              />
              <FaqItem
                question='How long does a repair take?'
                answer="Software issues (virus removal, OS install) are usually done same-day. Hardware repairs typically take 1-3 days depending on part availability. We'll give you a timeline upfront."
              />
              <FaqItem
                question='Do you offer a warranty?'
                answer='Yes! We offer a 90-day warranty on all hardware repairs. If the part we replaced fails or the same issue returns, we fix it for free.'
              />
              <FaqItem
                question='Will I lose my data?'
                answer='We prioritize data safety. For most hardware repairs, your data is safe. However, for OS re-installations, we always recommend a backup. We can also perform data backups for you.'
              />
            </div>
          </FadeIn>
        </section>

        {/* CTA Banner */}
        <section className='px-6 py-24 bg-neutral-950 w-full border-t border-neutral-900'>
          <FadeIn className='relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-blue-600 p-8 md:p-16 text-center shadow-2xl shadow-blue-900/50'>
            {/* Decorative blurs */}
            <div className='absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl animate-pulse' />
            <div className='absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl animate-pulse delay-1000' />

            <div className='relative z-10 flex flex-col items-center gap-10'>
              <div className='space-y-4 max-w-2xl'>
                <h3 className='text-3xl font-bold text-white md:text-5xl tracking-tight'>
                  Ready to speed up your workflow?
                </h3>
                <p className='text-blue-100/90 text-lg leading-relaxed'>
                  Stop struggling with a slow computer. Bring it in today for a
                  free initial checkup. We diagnose the issue while you wait.
                </p>
              </div>

              {/* Feature Grid */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl'>
                <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/15 transition-colors transform hover:-translate-y-1 duration-300'>
                  <div className='p-2 bg-white/20 rounded-full'>
                    <Clock className='w-6 h-6 text-white' />
                  </div>
                  <div className='text-white font-semibold text-lg'>
                    24h Turnaround
                  </div>
                  <div className='text-blue-100 text-sm'>
                    For most common repairs
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/15 transition-colors transform hover:-translate-y-1 duration-300 delay-100'>
                  <div className='p-2 bg-white/20 rounded-full'>
                    <CreditCard className='w-6 h-6 text-white' />
                  </div>
                  <div className='text-white font-semibold text-lg'>
                    Free Diagnostics
                  </div>
                  <div className='text-blue-100 text-sm'>
                    No hidden fees ever
                  </div>
                </div>
                <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 hover:bg-white/15 transition-colors transform hover:-translate-y-1 duration-300 delay-200'>
                  <div className='p-2 bg-white/20 rounded-full'>
                    <Shield className='w-6 h-6 text-white' />
                  </div>
                  <div className='text-white font-semibold text-lg'>
                    90-Day Warranty
                  </div>
                  <div className='text-blue-100 text-sm'>
                    On all hardware fixes
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4'>
                <Button
                  variant='white'
                  className='gap-2 text-blue-900 w-full sm:w-auto'
                  onClick={() => setBookingOpen(true)}
                >
                  <Calendar size={18} /> Book Repair
                </Button>
                <Button
                  variant='ghost'
                  className='gap-2 text-white hover:bg-blue-700 border border-blue-400/30 w-full sm:w-auto'
                  onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
                >
                  <Phone size={18} /> Call Us Now
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className='px-6 py-8 border-t border-neutral-900 bg-neutral-950 text-center w-full'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300'>
              <img
                src='logo.png'
                alt='AT'
                className='w-6 h-6 rounded object-contain'
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className='w-6 h-6 bg-blue-600 rounded hidden items-center justify-center'>
                <Cpu className='text-white w-3 h-3' />
              </div>
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600'>
                Aarya Technologies
              </span>
            </div>
            <p className='text-neutral-600 text-sm'>
              © 2026 Aarya Technologies. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Interactive Elements */}
      <ChatWidget />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
      <LocationModal isOpen={mapOpen} onClose={() => setMapOpen(false)} />
    </div>
  );
};

export default App;
