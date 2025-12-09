import { ContentText, ServiceData, SymptomCategory, LocationData, Testimonial, BlogPost } from './types';

// Service IDs
const S_SURGERY = 'surgery';
const S_OBGYN = 'obgyn';
const S_ENT = 'ent';
const S_GENMED = 'genmed';
const S_PAEDIATRICS = 'paediatrics';
const S_NICU = 'nicu';
const S_LAB = 'lab';
const S_RADIOLOGY = 'radiology';
const S_PHARMACY = 'pharmacy';
const S_AMBULANCE = 'ambulance';
const S_NURSING = 'nursing';
const S_PHYSIO = 'physiotherapy';

export const SERVICES: ServiceData[] = [
  {
    id: S_SURGERY,
    title: { en: 'Surgery', pidgin: 'Operation' },
    description: { en: 'State-of-the-art surgical procedures.', pidgin: 'We get correct machines for operation.' },
    iconName: 'Scalpel',
    image: 'surgery.jpeg'
  },
  {
    id: S_OBGYN,
    title: { en: 'Obstetrics & Gynaecology', pidgin: 'Mama & Pikin Palava' },
    description: { en: 'Comprehensive care for women and expectant mothers.', pidgin: 'We de care for women and belle women well well.' },
    iconName: 'Baby',
    image: 'obs.jpeg'
  },
  {
    id: S_ENT,
    title: { en: 'E.N.T', pidgin: 'Ear, Nose & Throat' },
    description: { en: 'Specialist care for ear, nose, and throat conditions.', pidgin: 'Doctor for ear, nose and throat wahala.' },
    iconName: 'Ear',
    image: 'ent.jpeg'
  },
  {
    id: S_GENMED,
    title: { en: 'General Medicine', pidgin: 'General Body Treatment' },
    description: { en: 'Diagnosis and treatment for general health issues.', pidgin: 'We treat all kind body pain and sickness.' },
    iconName: 'Stethoscope',
    image: 'general.jpeg'
  },
  {
    id: S_PAEDIATRICS,
    title: { en: 'Paediatrics', pidgin: 'Children Doctor' },
    description: { en: 'Specialized healthcare for infants and children.', pidgin: 'Special treatment for small small pikin.' },
    iconName: 'ToyBrick',
    image: 'paediatrics.jpeg'
  },
  {
    id: S_NURSING,
    title: { en: 'Nursing', pidgin: 'Nurse' },
    description: { en: 'Qulaified nurses to take care of you', pidgin: 'We get better nurses wey go care for you.' },
    iconName: 'Coffee',
    image: 'nursing.jpeg'
  },
  {
    id: S_NICU,
    title: { en: 'Neonatal ICU', pidgin: 'Special Baby Care' },
    description: { en: 'Intensive care for ill or premature newborn infants.', pidgin: 'Strong care for baby wey dem born small or wey sick.' },
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: S_LAB,
    title: { en: 'Laboratory', pidgin: 'Lab Test' },
    description: { en: 'Accurate tests: HIV, blood count, malaria, etc.', pidgin: 'Check your blood, malaria, HIV and others.' },
    iconName: 'FlaskConical',
    image: 'lab.jpeg'
  },
  {
    id: S_RADIOLOGY,
    title: { en: 'Radiology & ECG', pidgin: 'X-Ray & Heart Scan' },
    description: { en: 'Advanced imaging and heart monitoring.', pidgin: 'We fit snap inside your body and check your heart.' },
    iconName: 'Activity',
    image: 'rad.jpeg'
  },
  {
    id: S_PHARMACY,
    title: { en: 'Pharmacy', pidgin: 'Chemist' },
    description: { en: 'Well-stocked pharmacy available 24/7.', pidgin: 'Medicine store wey open everytime.' },
    iconName: 'Pill',
    image: 'pharmacy.jpeg'
  },
  {
    id: S_PHYSIO,
    title: { en: 'Physiotherapy', pidgin: 'Bone & Muscle Massage' },
    description: { en: 'Rehabilitation, physical therapy and pain management.', pidgin: 'We dey help massage bone and muscle make e strong.' },
    iconName: 'Activity',
    image: 'physio.jpeg'
  },
  {
    id: S_AMBULANCE,
    title: { en: '24/7 Ambulance', pidgin: 'Ambulance (24/7)' },
    description: { en: 'Emergency transport services round the clock.', pidgin: 'Emergency motor wey dey carry sick person anytime.' },
    iconName: 'Ambulance',
    image: 'ambulance.jpeg'
  },
 
];

export const LOCATIONS: LocationData[] = [
  {
    id: 'warri-main',
    name: 'Warri Branch',
    address: 'Inside Mosheshe Estate, Airport Road, Effurun, Warri',
    phone: '+234 800 123 4567',
    mapLink: '#',
    availableServices: [S_SURGERY, S_OBGYN, S_GENMED, S_PAEDIATRICS, S_NICU, S_LAB, S_RADIOLOGY, S_PHARMACY, S_AMBULANCE, S_NURSING, S_PHYSIO] // All except ENT
  },
  {
    id: 'asaba-main',
    name: 'Asaba Branch',
    address: '45 Nnebisi Road, Asaba, Delta State',
    phone: '+234 800 999 8888',
    mapLink: '#',
    availableServices: [S_SURGERY, S_OBGYN, S_ENT, S_GENMED, S_PAEDIATRICS, S_NICU, S_LAB, S_RADIOLOGY, S_PHARMACY, S_AMBULANCE, S_NURSING, S_PHYSIO] // All Services
  }
];

export const NAV_LINKS = [
  { path: '/', label: { en: 'Home', pidgin: 'House' } },
  { path: '/about', label: { en: 'About Us', pidgin: 'Who We Be' } },
  { path: '/services', label: { en: 'Services', pidgin: 'Wetin We De Do' } },
  { path: '/symptoms', label: { en: 'Symptom Checker', pidgin: 'Check Body' } },
  { path: '/locations', label: { en: 'Locations', pidgin: 'Our Places' } },
  { path: '/blog', label: { en: 'Blog', pidgin: 'Gist' } },
  { path: '/contact', label: { en: 'Contact', pidgin: 'Holla Us' } },
];

export const SYMPTOM_CATEGORIES: SymptomCategory[] = [
  {
    id: 'women',
    label: { en: 'Women', pidgin: 'Women' },
    symptoms: [
      { name: { en: 'Vaginal Bleeding', pidgin: 'Blood dey comot for private part' }, recommendedService: S_OBGYN },
      { name: { en: 'Heavy Menstrual Flow', pidgin: 'Heavy Mensis' }, recommendedService: S_OBGYN },
      { name: { en: 'Pelvic Pain', pidgin: 'Belle bottom pain' }, recommendedService: S_OBGYN },
      { name: { en: 'Breast Lump', pidgin: 'Seed for breast' }, recommendedService: S_GENMED },
      { name: { en: 'Morning Sickness', pidgin: 'Vomiting for belle woman' }, recommendedService: S_OBGYN },
      { name: { en: 'Painful Intercourse', pidgin: 'Pain when meeting man' }, recommendedService: S_OBGYN },
      { name: { en: 'Abnormal Discharge', pidgin: 'Dirty water comot for private part' }, recommendedService: S_OBGYN },
    ]
  },
  {
    id: 'men',
    label: { en: 'Men', pidgin: 'Men' },
    symptoms: [
      { name: { en: 'Prostate Issues', pidgin: 'Peeing wahala' }, recommendedService: S_GENMED },
      { name: { en: 'Hernia', pidgin: 'Hernia' }, recommendedService: S_SURGERY },
      { name: { en: 'Chest Pain', pidgin: 'Chest Pain' }, recommendedService: S_RADIOLOGY },
      { name: { en: 'Low Libido', pidgin: 'Man power no dey' }, recommendedService: S_GENMED },
      { name: { en: 'Testicular Pain', pidgin: 'Pain for ball' }, recommendedService: S_SURGERY },
      { name: { en: 'Erectile Dysfunction', pidgin: 'Man no gree stand' }, recommendedService: S_GENMED },
    ]
  },
  {
    id: 'children',
    label: { en: 'Children', pidgin: 'Pikin' },
    symptoms: [
      { name: { en: 'High Fever', pidgin: 'Hot Body' }, recommendedService: S_PAEDIATRICS },
      { name: { en: 'Persistent Cough', pidgin: 'Cough wey no gree go' }, recommendedService: S_PAEDIATRICS },
      { name: { en: 'Ear Pain', pidgin: 'Ear pain' }, recommendedService: S_ENT },
      { name: { en: 'Diarrhea', pidgin: 'Running Belle' }, recommendedService: S_PAEDIATRICS },
      { name: { en: 'Vomiting', pidgin: 'Vomiting' }, recommendedService: S_PAEDIATRICS },
      { name: { en: 'Skin Rash', pidgin: 'Krokro for body' }, recommendedService: S_PAEDIATRICS },
      { name: { en: 'Convulsion', pidgin: 'Jerking body' }, recommendedService: S_AMBULANCE },
    ]
  },
  {
    id: 'general',
    label: { en: 'General', pidgin: 'General' },
    symptoms: [
      { name: { en: 'Severe Headache', pidgin: 'Strong Headache' }, recommendedService: S_GENMED },
      { name: { en: 'Broken Bone', pidgin: 'Bone break' }, recommendedService: S_SURGERY },
      { name: { en: 'Hearing Loss', pidgin: 'Ears dey block' }, recommendedService: S_ENT },
      { name: { en: 'Back Pain', pidgin: 'Back pain' }, recommendedService: S_PHYSIO },
      { name: { en: 'Joint Pain', pidgin: 'Joint pain' }, recommendedService: S_PHYSIO },
      { name: { en: 'Stomach Ulcer', pidgin: 'Ulcer' }, recommendedService: S_GENMED },
      { name: { en: 'Eye Pain', pidgin: 'Eye dey pain' }, recommendedService: S_GENMED },
      { name: { en: 'Difficulty Breathing', pidgin: 'Hard to breath' }, recommendedService: S_AMBULANCE },
    ]
  },
  {
    id: 'lab',
    label: { en: 'Lab Tests', pidgin: 'Lab Test' },
    symptoms: [
      { name: { en: 'HIV Screening', pidgin: 'HIV Test' }, recommendedService: S_LAB },
      { name: { en: 'Full Blood Count', pidgin: 'Check blood level' }, recommendedService: S_LAB },
      { name: { en: 'Malaria/Typhoid', pidgin: 'Malaria & Typhoid' }, recommendedService: S_LAB },
      { name: { en: 'Blood Sugar', pidgin: 'Sugar Test' }, recommendedService: S_LAB },
      { name: { en: 'Hepatitis Screening', pidgin: 'Hepatitis Test' }, recommendedService: S_LAB },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ejiro Oghene',
    role: { en: 'Patient', pidgin: 'Customer' },
    text: { en: 'The doctors at GCMC are life savers. The surgery went smoothly.', pidgin: 'The doctors for GCMC na baba. My operation waka smooth.' }
  },
  {
    id: 2,
    name: 'Mrs. Okoro',
    role: { en: 'New Mother', pidgin: 'New Mama' },
    text: { en: 'The NICU facilities are world class. They saved my twins.', pidgin: 'Their baby machine correct well well. Dem save my twins.' }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: { en: 'Understanding Malaria Prevention', pidgin: 'How to block Malaria' },
    summary: { en: 'Malaria is a major killer. Learn tips on using nets and medication to stay safe.', pidgin: 'Use net and medicine make mosquito no bite you. Malaria no be play play.' },
    date: 'Oct 24, 2023',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' // Doctor checking patient
  },
  {
    id: 2,
    title: { en: 'Healthy Diet for Kids', pidgin: 'Good food for Pikin' },
    summary: { en: 'Essential nutrients for growing children. Avoid too much sugar.', pidgin: 'Food wey go make your pikin grow well. No give dem too much sugar.' },
    date: 'Sep 15, 2023',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800' // Food/Healthy eating
  },
  {
    id: 3,
    title: { en: 'The Importance of Antenatal Care', pidgin: 'Why Belle Woman Need Clinic' },
    summary: { en: 'Regular checkups ensure the safety of both mother and child.', pidgin: 'Make sure you dey go clinic regularly so you and your baby go dey safe.' },
    date: 'Nov 02, 2023',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800' // Black pregnant woman
  },
  {
    id: 4,
    title: { en: 'Managing High Blood Pressure', pidgin: 'How to Control High BP' },
    summary: { en: 'Hypertension is a silent killer. Regular checks are vital.', pidgin: 'High BP dey kill silently. Always check your BP make e no pass mark.' },
    date: 'Nov 10, 2023',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' // Blood pressure check
  },
  {
    id: 5,
    title: { en: 'Typhoid Fever: Myths vs Facts', pidgin: 'Typhoid: Wetin be True' },
    summary: { en: 'Understand how typhoid spreads and how to prevent it through hygiene.', pidgin: 'Know how typhoid dey catch person and how to wash hand prevent am.' },
    date: 'Nov 18, 2023',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800' // Washing hands/Hygiene
  },
  {
    id: 6,
    title: { en: 'Diabetes Awareness', pidgin: 'Sugar Disease Matter' },
    summary: { en: 'Signs of diabetes and lifestyle changes to manage it effectively.', pidgin: 'Signs wey show say person get sugar and how to change life manage am.' },
    date: 'Nov 25, 2023',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800' // Healthy food/Testing
  },
  {
    id: 7,
    title: { en: 'Men\'s Health: Prostate Care', pidgin: 'Man Matter: Prostate Care' },
    summary: { en: 'Men over 40 should get screened regularly for prostate health.', pidgin: 'If you be man wey don pass 40, go check your prostate sharp sharp.' },
    date: 'Dec 01, 2023',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' // Older black man/doctor
  },
  {
    id: 8,
    title: { en: 'Immunization Schedule for Babies', pidgin: 'Injection Time for Baby' },
    summary: { en: 'Keep your child safe from polio, measles, and other diseases.', pidgin: 'Protect your pikin from polio and measles. No miss injection date.' },
    date: 'Dec 05, 2023',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4fb?auto=format&fit=crop&q=80&w=800' // Baby/Vaccine
  },
  {
    id: 9,
    title: { en: 'Mental Health: Handling Stress', pidgin: 'Cool Temper: Stress Wahala' },
    summary: { en: 'Mental health is just as important as physical health. Take a break.', pidgin: 'Your mind health important pass body. Try dey rest sometimes.' },
    date: 'Dec 12, 2023',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800' // Woman thinking/resting
  },
  {
    id: 10,
    title: { en: 'First Aid Basics', pidgin: 'First Aid: Wetin to do' },
    summary: { en: 'Simple steps to take in an emergency before the ambulance arrives.', pidgin: 'Small things you fit do help person before ambulance reach.' },
    date: 'Dec 20, 2023',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800' // Emergency/Ambulance
  }
];