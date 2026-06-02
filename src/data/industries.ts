// ─── Types ────────────────────────────────────────────────────────────────────

export interface IndustryBlogArticle {
  slug: string;
  title: string;
  tag: string;
  content: string[];
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryService {
  name: string;
  description: string;
  priceRange: string;
}

export interface IndustryStat {
  label: string;
  value: string;
}

export interface MarketTrend {
  icon: string;
  title: string;
  description: string;
}

export interface DedicatedIndustry {
  slug: string;
  name: string;
  icon: string;
  color: string;
  shockingFact: string;
  heroDescription: string;
  marketSize: string;
  growthRate: string;
  stats: IndustryStat[];
  marketTrends: MarketTrend[];
  businessTypes: string[];
  services: IndustryService[];
  blogArticles: IndustryBlogArticle[];
  faqs: IndustryFAQ[];
}

export interface GenericSector {
  name: string;
  emoji: string;
  color: string;
  slug: string;
  description: string;
}

export interface B2BCard {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  features: string[];
}

// ─── Dedicated Industries ─────────────────────────────────────────────────────

export const dedicatedIndustries: DedicatedIndustry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    color: "#10b981",
    shockingFact: "72% of patients research online before choosing a doctor or hospital",
    heroDescription:
      "Transform your healthcare practice with digital marketing that builds trust, attracts patients, and establishes your authority in the medical space.",
    marketSize: "₹8.3 Lakh Cr",
    growthRate: "22% CAGR",
    stats: [
      { label: "Healthcare Practices Served", value: "120+" },
      { label: "Patient Inquiries Generated", value: "15,000+" },
      { label: "Average ROI for Clients", value: "340%" },
      { label: "Google Rankings Achieved", value: "500+" },
      { label: "Social Media Followers Grown", value: "2M+" },
      { label: "Clinics Digitized", value: "80+" },
    ],
    marketTrends: [
      { icon: "📱", title: "Telemedicine Boom", description: "Online consultations grew 300% post-pandemic — digital presence is now essential for every clinic" },
      { icon: "🔍", title: "Google Search Dominance", description: "\"Doctor near me\" searches increased 150% YoY — local SEO is critical for patient acquisition" },
      { icon: "⭐", title: "Review-Driven Decisions", description: "84% of patients trust online reviews as much as personal recommendations" },
      { icon: "🎥", title: "Video Content Revolution", description: "Health-related YouTube searches surpass 1 billion monthly — video marketing is the new trust builder" },
      { icon: "📊", title: "Data-Driven Marketing", description: "Healthcare marketers using analytics see 2.5x better patient acquisition rates" },
      { icon: "🤖", title: "AI-Powered Patient Engagement", description: "Chatbots and automated follow-ups improve patient retention by 40%" },
      { icon: "📍", title: "Hyperlocal Targeting", description: "Location-based ads deliver 3x higher conversion for healthcare practices" },
      { icon: "💬", title: "WhatsApp Healthcare", description: "67% of Indian patients prefer WhatsApp for appointment booking and follow-ups" },
    ],
    businessTypes: [
      "Hospitals", "Clinics", "Dental Practices", "Ayurveda Centers",
      "Diagnostic Labs", "Pharmacies", "Mental Health Practices", "Physiotherapy Centers",
      "Eye Care Centers", "Dermatology Clinics", "IVF Centers", "Veterinary Clinics",
    ],
    services: [
      { name: "Patient Acquisition Campaigns", description: "Targeted Google & Meta ad campaigns designed to drive qualified patient inquiries to your practice", priceRange: "₹8,000 – ₹25,000/mo" },
      { name: "Medical SEO", description: "Rank higher for health-related searches with specialized medical SEO strategies and local optimization", priceRange: "₹6,000 – ₹18,000/mo" },
      { name: "Healthcare Social Media", description: "Build trust and authority with educational health content, patient testimonials, and engaging Reels", priceRange: "₹5,000 – ₹15,000/mo" },
      { name: "Medical Website Design", description: "Professional, HIPAA-aware websites with appointment booking, doctor profiles, and patient portals", priceRange: "₹12,000 – ₹35,000" },
      { name: "Patient CRM & Automation", description: "Automated appointment reminders, follow-ups, and birthday wishes to improve patient retention", priceRange: "₹4,000 – ₹12,000/mo" },
      { name: "Healthcare Branding", description: "Complete brand identity for clinics and hospitals — logo, color palette, and marketing collateral", priceRange: "₹8,000 – ₹25,000" },
      { name: "Google Business Optimization", description: "Optimize your Google Business profile to dominate local search and attract nearby patients", priceRange: "₹3,000 – ₹8,000" },
      { name: "Video Marketing for Doctors", description: "Professional patient testimonial videos, procedure explainers, and doctor introduction content", priceRange: "₹5,000 – ₹20,000" },
    ],
    blogArticles: [
      {
        slug: "why-every-clinic-needs-digital-marketing",
        title: "Why Every Clinic Needs Digital Marketing in 2025",
        tag: "Strategy",
        content: [
          "The healthcare landscape in India has fundamentally changed. Patients no longer simply walk into the nearest clinic — they research, compare, and choose based on online presence. If your clinic isn't visible online, you're invisible to potential patients.",
          "Digital marketing for healthcare is not about flashy ads. It's about building trust, providing valuable health information, and making it easy for patients to find and choose your practice. From Google Business optimization to patient testimonial videos, every digital touchpoint matters.",
          "Business Volunteers has helped over 120 healthcare practices establish their digital presence. Our approach combines medical SEO, social media management, and patient engagement automation to create a complete digital ecosystem for your practice.",
          "The clinics that invest in digital marketing today will be the ones thriving tomorrow. With 72% of patients researching online before making healthcare decisions, the question isn't whether to invest in digital marketing — it's how quickly you can start.",
          "Ready to transform your healthcare practice? Contact Business Volunteers for a free digital marketing consultation tailored to healthcare professionals.",
        ],
      },
      {
        slug: "social-media-strategy-for-hospitals",
        title: "Social Media Strategy for Hospitals & Clinics",
        tag: "Social Media",
        content: [
          "Social media for healthcare is unique. Unlike retail or food businesses, healthcare content must balance engagement with professionalism, creativity with accuracy. The goal is to educate, build trust, and position your doctors as thought leaders.",
          "The most effective healthcare social media content includes: health tips and awareness posts, doctor introductions and behind-the-scenes content, patient success stories (with consent), seasonal health advisories, and myth-busting content that showcases expertise.",
          "Instagram Reels have become incredibly powerful for healthcare marketing. Short, informative health tips from doctors consistently generate high engagement and reach. Business Volunteers creates scroll-stopping Reels that position doctors as accessible experts.",
          "Consistency is key. Posting 4-6 times per week with a mix of educational and engaging content keeps your practice top-of-mind. Business Volunteers manages the entire content calendar, from ideation to posting, so doctors can focus on patient care.",
          "Social media isn't just for awareness — it directly drives patient inquiries. Our healthcare clients report 30-50% of new patient inquiries mentioning their social media content.",
        ],
      },
      {
        slug: "local-seo-for-doctors",
        title: "Local SEO for Doctors: A Complete Guide",
        tag: "SEO",
        content: [
          "When someone searches 'dentist near me' or 'best cardiologist in Noida,' you want your practice to appear first. That's exactly what Local SEO achieves. For healthcare practices, local SEO is the highest-ROI marketing investment you can make.",
          "The foundation of local SEO for doctors is Google Business Profile optimization. This includes accurate NAP (Name, Address, Phone) information, professional photos of your clinic, complete service listings, regular Google Posts, and active review management.",
          "Patient reviews are the single most important ranking factor for local healthcare SEO. Practices with 50+ Google reviews consistently outrank competitors. Business Volunteers implements review generation systems that ethically encourage satisfied patients to share their experiences.",
          "Medical content also plays a crucial role. Blog articles about common health conditions, treatment options, and preventive care not only educate patients but also signal expertise to search engines. Our medical content team creates SEO-optimized health articles tailored to your specialization.",
          "Business Volunteers has achieved over 500 Google rankings for healthcare clients. Our local SEO strategy is specifically designed for the medical industry, taking into account patient search behavior and healthcare-specific ranking factors.",
        ],
      },
      {
        slug: "patient-retention-with-crm",
        title: "Patient Retention: How CRM Transforms Healthcare",
        tag: "CRM",
        content: [
          "Acquiring a new patient costs 5-7 times more than retaining an existing one. Yet most healthcare practices focus almost exclusively on acquisition. Smart practices are using CRM (Customer Relationship Management) systems to transform patient retention.",
          "Healthcare CRM goes beyond appointment reminders. It includes birthday and health anniversary messages, seasonal vaccination reminders, post-treatment follow-ups, re-engagement campaigns for patients who haven't visited in 3+ months, and personalized health tips based on patient history.",
          "WhatsApp has become the preferred communication channel for Indian patients. Business Volunteers' healthcare CRM leverages WhatsApp for appointment confirmations, prescription reminders, and personalized health messages that keep your practice top-of-mind.",
          "The results speak for themselves: our healthcare clients using CRM see 40% higher patient return rates and 25% more referrals from existing patients. Automated systems mean these improvements happen without adding to your staff's workload.",
          "Ready to stop losing patients to competitors? Business Volunteers' healthcare CRM solution can be set up within 2 weeks, with immediate impact on patient retention and satisfaction.",
        ],
      },
      {
        slug: "healthcare-branding-guide",
        title: "Healthcare Branding: Building Trust Through Design",
        tag: "Branding",
        content: [
          "Healthcare branding is fundamentally different from other industries. While a restaurant can be playful and a fashion brand can be edgy, healthcare branding must convey trust, professionalism, and warmth simultaneously.",
          "The core elements of healthcare branding include: a clean, professional logo that works across all platforms, a color palette that balances clinical authority with approachability, typography that's readable and professional, and a visual system that unifies all patient touchpoints.",
          "Many clinics underestimate the impact of consistent branding. Patients who see a cohesive brand across your website, social media, clinic signage, and printed materials perceive your practice as more professional and trustworthy. This directly impacts their willingness to choose you over competitors.",
          "Business Volunteers has created brand identities for hospitals, dental clinics, ayurveda centers, and specialty practices across India. Our healthcare branding packages include logo design, brand guidelines, social media templates, and clinic collateral design.",
          "Your brand is the first impression potential patients have of your practice. Make it count with professional healthcare branding from Business Volunteers.",
        ],
      },
      {
        slug: "google-ads-for-healthcare",
        title: "Google Ads for Healthcare: Maximizing Patient Acquisition",
        tag: "Advertising",
        content: [
          "Google Ads is one of the fastest ways to acquire new patients. When someone searches 'best orthopedic doctor near me,' a well-structured Google Ads campaign puts your practice at the top of the page — above organic results.",
          "Healthcare Google Ads require a different approach than other industries. Ad copy must be compliant with medical advertising guidelines, landing pages need to build trust quickly, and conversion tracking must account for the patient journey from search to appointment.",
          "The key metrics for healthcare Google Ads are cost per lead, cost per appointment, and patient lifetime value. Business Volunteers optimizes campaigns based on these healthcare-specific KPIs, not just clicks or impressions.",
          "Our healthcare clients typically see 15-30 patient inquiries per month from Google Ads, with costs per lead ranging from ₹200-₹800 depending on the specialty and location. High-value specialties like cosmetic surgery and IVF see even better returns.",
          "Business Volunteers manages the entire Google Ads ecosystem for healthcare practices — from keyword research and ad creation to landing page optimization and call tracking.",
        ],
      },
      {
        slug: "whatsapp-for-clinics",
        title: "WhatsApp Marketing for Clinics: The Complete Playbook",
        tag: "WhatsApp",
        content: [
          "India has over 500 million WhatsApp users, and healthcare is one of the industries where WhatsApp marketing delivers the highest impact. Patients prefer WhatsApp over calls for appointment booking, prescription queries, and follow-ups.",
          "A properly set up WhatsApp Business account for a clinic includes: a professional profile with clinic photos and hours, a complete service catalog with pricing, automated greeting and away messages, quick reply templates for common questions, and broadcast lists for health campaigns.",
          "Business Volunteers goes beyond basic setup. We implement WhatsApp automation that sends appointment reminders 24 hours before visits, post-appointment satisfaction surveys, seasonal health campaigns (flu season, dengue prevention, etc.), and personalized birthday health tips.",
          "The results are remarkable: clinics using our WhatsApp strategy see 45% reduction in no-shows, 30% increase in patient referrals, and 98% open rates on health campaigns (compared to 20% for email).",
          "Ready to transform your clinic's patient communication? Business Volunteers' WhatsApp setup and automation service can be implemented within a week.",
        ],
      },
    ],
    faqs: [
      { question: "How can digital marketing help my clinic get more patients?", answer: "Digital marketing increases your clinic's visibility when patients search online. Through Google Business optimization, social media presence, and targeted ads, we help patients discover and choose your practice. Our healthcare clients typically see 30-50% increase in new patient inquiries within 3 months." },
      { question: "Is social media appropriate for healthcare professionals?", answer: "Absolutely! Social media is one of the most effective ways to build trust and educate patients. The key is maintaining professionalism while being approachable. Educational health tips, doctor introductions, and patient success stories (with consent) perform exceptionally well." },
      { question: "How much does healthcare digital marketing cost?", answer: "Our healthcare marketing packages start at ₹5,000/month for social media management and go up to ₹25,000/month for comprehensive packages including SEO, ads, and CRM. We design packages based on your practice size and goals." },
      { question: "Can you help with Google reviews for my clinic?", answer: "Yes! We implement ethical review generation systems that encourage satisfied patients to share their experiences on Google. This is one of the most impactful things you can do for local SEO and patient acquisition." },
      { question: "Do you understand medical advertising regulations?", answer: "Yes, our healthcare marketing team is familiar with medical advertising guidelines in India. We ensure all content is compliant while still being effective and engaging." },
      { question: "How long does it take to see results?", answer: "Social media and Google Ads can show results within 2-4 weeks. SEO typically takes 3-6 months for competitive medical keywords. CRM and patient retention improvements are visible within the first month." },
      { question: "Can you handle marketing for multi-location clinics?", answer: "Yes! We have experience managing digital marketing for clinic chains with multiple locations. We create location-specific strategies while maintaining brand consistency across all branches." },
      { question: "Do you create medical content for websites and blogs?", answer: "Yes, our content team creates SEO-optimized medical content including blog articles, service page descriptions, doctor profiles, and patient education materials." },
      { question: "Can you help with telemedicine marketing?", answer: "Absolutely. We help clinics promote their telemedicine services through targeted campaigns, app promotion, and patient education about virtual consultation benefits." },
      { question: "What CRM features are available for healthcare?", answer: "Our healthcare CRM includes appointment reminders, patient birthday wishes, follow-up automation, re-engagement campaigns for dormant patients, vaccination reminders, and WhatsApp integration." },
      { question: "Do you offer video production for doctors?", answer: "Yes! We create doctor introduction videos, patient testimonial videos, procedure explainers, and educational health content optimized for social media platforms." },
      { question: "How do you track the success of healthcare marketing?", answer: "We track patient inquiries, appointment bookings, website traffic, Google rankings, social media growth, review scores, and overall ROI. Monthly reports provide complete visibility into your marketing performance." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "🎓",
    color: "#6366f1",
    shockingFact: "85% of students and parents research institutes online before making enrollment decisions",
    heroDescription:
      "Elevate your educational institution with digital marketing strategies that drive enrollments, build brand reputation, and connect with students and parents effectively.",
    marketSize: "₹11.8 Lakh Cr",
    growthRate: "16% CAGR",
    stats: [
      { label: "Educational Institutes Served", value: "90+" },
      { label: "Student Inquiries Generated", value: "25,000+" },
      { label: "Average Enrollment Increase", value: "45%" },
      { label: "Google Rankings Achieved", value: "350+" },
      { label: "Social Media Followers Grown", value: "1.5M+" },
      { label: "Campaigns Delivered", value: "200+" },
    ],
    marketTrends: [
      { icon: "💻", title: "EdTech Revolution", description: "Online education market in India expected to reach $30 billion by 2030 — digital visibility is non-negotiable" },
      { icon: "📱", title: "Mobile-First Research", description: "78% of students use smartphones for researching courses and institutes before enrolling" },
      { icon: "🎥", title: "Video Campus Tours", description: "Virtual campus tours and student testimonial videos increase enrollment inquiries by 60%" },
      { icon: "⭐", title: "Review-Driven Enrollment", description: "Students check Google reviews, social media, and forums before choosing an institute" },
      { icon: "📊", title: "Data-Driven Admissions", description: "Institutes using analytics-driven marketing fill seats 40% faster than traditional methods" },
      { icon: "🤖", title: "Chatbot Engagement", description: "AI chatbots on education websites reduce response time and increase inquiry-to-enrollment conversion by 35%" },
      { icon: "📍", title: "Hyperlocal Education Ads", description: "Location-targeted campaigns for coaching centers and schools deliver 4x higher conversion" },
      { icon: "💬", title: "WhatsApp Admissions", description: "63% of Indian parents prefer WhatsApp for admission inquiries and updates" },
    ],
    businessTypes: [
      "Schools", "Colleges", "Coaching Centers", "EdTech Platforms",
      "Preschools", "Vocational Institutes", "Language Schools", "Music Academies",
      "Art Schools", "Dance Academies", "Sports Academies", "Skill Development Centers",
    ],
    services: [
      { name: "Enrollment Campaigns", description: "Targeted digital campaigns that drive qualified student and parent inquiries during admission season", priceRange: "₹8,000 – ₹30,000/mo" },
      { name: "Education SEO", description: "Rank higher for education-related searches and course-specific keywords in your locality", priceRange: "₹5,000 – ₹15,000/mo" },
      { name: "Social Media for Education", description: "Engaging content showcasing campus life, student achievements, and academic excellence", priceRange: "₹5,000 – ₹15,000/mo" },
      { name: "Institute Website Design", description: "Professional education websites with course listings, faculty profiles, online applications, and virtual tours", priceRange: "₹15,000 – ₹45,000" },
      { name: "Student CRM & Follow-up", description: "Automated inquiry follow-ups, application tracking, and parent communication systems", priceRange: "₹4,000 – ₹12,000/mo" },
      { name: "Education Branding", description: "Complete brand identity for institutes — logo, prospectus design, signage, and marketing materials", priceRange: "₹10,000 – ₹30,000" },
      { name: "Google Ads for Admissions", description: "High-converting Google Ads campaigns targeting students searching for courses in your area", priceRange: "₹6,000 – ₹20,000/mo" },
      { name: "Video Production", description: "Campus tour videos, student testimonials, faculty introductions, and course explainer content", priceRange: "₹8,000 – ₹25,000" },
    ],
    blogArticles: [
      {
        slug: "digital-marketing-for-schools",
        title: "Digital Marketing for Schools: The Enrollment Game-Changer",
        tag: "Strategy",
        content: [
          "The admission season is no longer just about newspaper ads and roadside banners. Today's parents research schools online — comparing websites, reading reviews, and checking social media — before even scheduling a visit.",
          "Digital marketing for schools must address both parents and students. Parents look for academic excellence, safety, and values. Students look for campus life, activities, and peer culture. Effective marketing speaks to both audiences simultaneously.",
          "Business Volunteers has helped over 90 educational institutions increase their enrollment through strategic digital marketing. Our approach combines local SEO, targeted social media campaigns, and conversion-optimized landing pages.",
          "The schools that invest in digital marketing consistently fill their seats faster. With 85% of parents researching online before enrollment, a strong digital presence is no longer optional — it's essential for institutional growth.",
          "Contact Business Volunteers to create a customized digital marketing strategy for your school's next admission season.",
        ],
      },
      {
        slug: "social-media-for-coaching-centers",
        title: "How Coaching Centers Can Leverage Social Media",
        tag: "Social Media",
        content: [
          "Coaching centers face intense competition, especially in education hubs like Kota, Delhi, and Noida. Social media has become the primary differentiator for centers looking to attract students and build credibility.",
          "The most effective content for coaching centers includes: result announcements with student photos, quick tips and trick videos from faculty, live doubt-clearing sessions, student testimonials, and behind-the-scenes classroom content.",
          "Instagram Reels featuring short academic tips from star faculty members consistently go viral in the education space. Business Volunteers creates these high-engagement Reels that position coaching centers as innovative and student-friendly.",
          "Targeted Meta Ads during admission season can generate hundreds of student inquiries at remarkably low costs. Our education clients typically see costs per inquiry between ₹50-₹200 during peak admission periods.",
          "Business Volunteers understands the unique challenges of coaching center marketing. We create campaigns that highlight your results, faculty expertise, and student success stories.",
        ],
      },
      {
        slug: "seo-for-educational-institutes",
        title: "SEO for Educational Institutes: Rank Higher, Enroll More",
        tag: "SEO",
        content: [
          "When a parent searches 'best school in Noida' or a student searches 'top coaching center for JEE,' you want your institute to appear on the first page. Educational SEO makes this possible.",
          "Education SEO requires a different approach than commercial SEO. It involves optimizing for course-specific keywords, location-based searches, comparison keywords, and long-tail queries that indicate enrollment intent.",
          "Content marketing is a powerful SEO strategy for education. Blog articles about exam preparation tips, career guidance, study techniques, and industry trends not only improve search rankings but also position your institute as a thought leader.",
          "Google Business Profile is critical for local educational SEO. Institutes with optimized profiles, regular posts, and strong review scores dominate the local pack — the map results that appear at the top of search results.",
          "Business Volunteers has achieved over 350 Google rankings for educational clients. Our education SEO strategies are designed to deliver results during admission season when it matters most.",
        ],
      },
      {
        slug: "website-design-for-colleges",
        title: "College Website Design: First Impressions Matter",
        tag: "Web Design",
        content: [
          "Your college website is often the first interaction a prospective student has with your institution. A well-designed website can be the difference between an inquiry and a bounce.",
          "Essential features for a modern college website include: clear course catalog with detailed descriptions, online application forms, virtual campus tour, faculty profiles with qualifications, student testimonials, placement statistics, and mobile-responsive design.",
          "Speed matters immensely. If your website takes more than 3 seconds to load, you lose 53% of visitors. Business Volunteers builds fast, optimized educational websites using modern frameworks that ensure instant load times.",
          "Business Volunteers has designed websites for colleges, schools, coaching centers, and EdTech platforms. Every website is built with conversion in mind — turning visitors into applicants through strategic design and compelling content.",
          "Your website should work as hard as your admissions team. Let Business Volunteers design a website that converts visitors into enrolled students.",
        ],
      },
      {
        slug: "whatsapp-marketing-for-education",
        title: "WhatsApp Marketing for Educational Institutes",
        tag: "WhatsApp",
        content: [
          "WhatsApp is where Indian parents and students communicate. With 63% of parents preferring WhatsApp for admission inquiries, it's the most effective communication channel for educational institutes.",
          "Business Volunteers sets up comprehensive WhatsApp Business solutions for institutes: automated responses for common admission queries, course catalogs accessible via WhatsApp, application status updates, fee payment reminders, and exam result notifications.",
          "During admission season, WhatsApp broadcast campaigns can reach thousands of prospective parents with personalized messages. With 98% open rates (compared to 20% for email), WhatsApp delivers unmatched engagement.",
          "We also implement WhatsApp chatbots that can handle initial admission inquiries 24/7 — answering questions about courses, fees, eligibility, and admission processes without manual intervention.",
          "Transform your institute's communication and enrollment process with WhatsApp marketing from Business Volunteers.",
        ],
      },
      {
        slug: "video-marketing-for-education",
        title: "Video Marketing for Educational Institutes: Build Trust Visually",
        tag: "Video",
        content: [
          "Video content has become the most powerful tool for educational marketing. A virtual campus tour, student testimonial video, or faculty introduction can convey more trust and excitement than any amount of text or images.",
          "The most effective education videos include: 360° campus tours that let parents explore your campus remotely, student success stories showcasing career outcomes, day-in-the-life videos that show real campus culture, faculty expertise videos that highlight teaching quality, and lab/infrastructure showcase videos.",
          "YouTube is the second-largest search engine, and education-related searches are among the fastest-growing categories. Business Volunteers creates YouTube-optimized educational content that ranks in search results and drives discovery.",
          "Short-form video (Reels, YouTube Shorts) has become equally important. Quick study tips, exam motivation, and campus culture clips generate massive reach and engagement on social platforms.",
          "Business Volunteers offers complete video production services for educational institutes — from concept and scripting to filming, editing, and distribution across all platforms.",
        ],
      },
      {
        slug: "education-branding-identity",
        title: "Building a Powerful Education Brand Identity",
        tag: "Branding",
        content: [
          "An educational institution's brand is more than its logo — it's the perception students, parents, and the community have about the quality of education and values you represent.",
          "Strong education branding includes: a distinctive logo that reflects your institution's values, a consistent color palette used across all materials, professional prospectus and brochure design, uniform signage and campus aesthetics, and cohesive digital presence across all platforms.",
          "Parents and students often compare multiple institutes side by side. The one with professional, consistent branding is perceived as more credible and trustworthy — even if the academic quality is similar.",
          "Business Volunteers creates comprehensive brand identities for educational institutions. From logo design and prospectus creation to social media templates and campus signage guidelines, we ensure every touchpoint reinforces your brand.",
          "Invest in your brand today and see the impact on admissions, reputation, and institutional pride. Contact Business Volunteers for education branding that makes your institute stand out.",
        ],
      },
    ],
    faqs: [
      { question: "How can digital marketing increase our school's enrollment?", answer: "Digital marketing increases visibility among parents actively searching for schools. Through targeted campaigns, local SEO, and compelling social media content, we help drive more qualified admission inquiries. Our clients typically see 40-60% increase in inquiries." },
      { question: "What social media platforms work best for educational institutes?", answer: "Instagram and Facebook are most effective for schools and coaching centers. YouTube is excellent for campus tours and academic content. LinkedIn works well for colleges and professional courses. We create platform-specific strategies for maximum impact." },
      { question: "How much does education marketing cost?", answer: "Our education marketing packages start at ₹5,000/month for social media management. Comprehensive admission season campaigns with SEO, ads, and CRM range from ₹15,000-₹30,000/month." },
      { question: "Can you help during admission season specifically?", answer: "Yes! We offer intensive admission season packages that include targeted ad campaigns, landing pages, WhatsApp follow-up systems, and inquiry management tools designed to maximize enrollment." },
      { question: "Do you create prospectus and brochure designs?", answer: "Absolutely. We design professional print and digital prospectuses, brochures, admission forms, and campus maps as part of our education branding services." },
      { question: "Can you help with online admission systems?", answer: "Yes, our education website packages include online application forms, inquiry management dashboards, and automated communication workflows." },
      { question: "How do you handle marketing for coaching centers vs. schools?", answer: "Coaching centers require more aggressive, results-focused marketing highlighting toppers and success rates. Schools need brand-building focused on values, infrastructure, and holistic development. We customize strategies accordingly." },
      { question: "Can you produce virtual campus tour videos?", answer: "Yes! We create professional virtual campus tours using high-quality video production that parents can view from anywhere. These significantly increase visit-to-enrollment conversion rates." },
      { question: "How do you track marketing effectiveness for education?", answer: "We track inquiry volumes, cost per inquiry, source attribution, enrollment conversion rates, and campaign ROI. Monthly reports give complete visibility into marketing performance." },
      { question: "Do you work with EdTech companies?", answer: "Yes, we work with EdTech platforms on user acquisition campaigns, app downloads, course promotions, and content marketing strategies." },
      { question: "Can you manage parent communication through WhatsApp?", answer: "Yes, our WhatsApp Business solutions for education include automated admission queries, fee reminders, result notifications, and parent-teacher communication systems." },
      { question: "What makes your education marketing different?", answer: "We understand the education market deeply — admission cycles, parent psychology, student behavior, and compliance requirements. Our strategies are specifically designed for the unique challenges educational institutes face." },
    ],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    icon: "💎",
    color: "#f59e0b",
    shockingFact: "68% of jewellery purchases in India now begin with online research before visiting a store",
    heroDescription:
      "Showcase your exquisite craftsmanship to the world with digital marketing that captures the luxury, artistry, and emotion behind every piece of jewellery.",
    marketSize: "₹6.2 Lakh Cr",
    growthRate: "14% CAGR",
    stats: [
      { label: "Jewellery Brands Served", value: "75+" },
      { label: "Revenue Generated for Clients", value: "₹5Cr+" },
      { label: "Average ROAS", value: "8.5x" },
      { label: "Product Shoots Delivered", value: "1,200+" },
      { label: "Social Media Followers Grown", value: "3M+" },
      { label: "E-commerce Stores Launched", value: "40+" },
    ],
    marketTrends: [
      { icon: "📱", title: "Online Jewellery Boom", description: "Online jewellery sales in India grew 65% YoY — digital-first brands are capturing market share rapidly" },
      { icon: "📸", title: "Visual-First Marketing", description: "Instagram and Pinterest drive 70% of jewellery purchase inspiration — stunning visuals are non-negotiable" },
      { icon: "🎥", title: "Video Try-On & Reels", description: "AR try-on and product showcase Reels increase purchase intent by 80% for jewellery brands" },
      { icon: "⭐", title: "Trust & Certification", description: "Online buyers demand BIS hallmark info, return policies, and authentic reviews before purchasing" },
      { icon: "🛒", title: "D2C Jewellery Growth", description: "Direct-to-consumer jewellery brands grew 120% — e-commerce websites are becoming essential" },
      { icon: "💬", title: "WhatsApp Commerce", description: "55% of Indian jewellery customers prefer WhatsApp for product inquiries, customization, and ordering" },
      { icon: "🎯", title: "Occasion-Based Marketing", description: "Festival and wedding season campaigns drive 60% of annual jewellery sales" },
      { icon: "🌟", title: "Influencer Collaborations", description: "Jewellery influencer marketing delivers 5x higher engagement than brand-only content" },
    ],
    businessTypes: [
      "Gold Jewellers", "Diamond Stores", "Silver Jewellery", "Artificial Jewellery",
      "Bridal Jewellery", "Custom Jewellers", "Temple Jewellery", "Antique Jewellery",
      "Online Jewellery Stores", "Gemstone Dealers", "Watch Retailers", "Jewellery Wholesalers",
    ],
    services: [
      { name: "Jewellery Social Media", description: "Stunning visual content showcasing your collections with product photography, styling shots, and video content", priceRange: "₹6,000 – ₹20,000/mo" },
      { name: "Jewellery Product Photography", description: "Professional jewellery product shoots with lifestyle styling, model shots, and catalogue-quality images", priceRange: "₹5,000 – ₹25,000" },
      { name: "Jewellery E-commerce Website", description: "Beautiful, conversion-optimized jewellery websites with product catalogs, filters, and secure checkout", priceRange: "₹20,000 – ₹60,000" },
      { name: "Jewellery SEO", description: "Rank for jewellery searches in your city — 'gold jewellery in Noida,' 'diamond rings Delhi,' and more", priceRange: "₹5,000 – ₹15,000/mo" },
      { name: "Festival Campaign Management", description: "Targeted Diwali, Dhanteras, Akshaya Tritiya, and wedding season campaigns that drive walk-ins and online sales", priceRange: "₹8,000 – ₹30,000/campaign" },
      { name: "Jewellery Brand Identity", description: "Luxury brand identity design — logo, packaging, business cards, and marketing collateral for jewellery brands", priceRange: "₹12,000 – ₹35,000" },
      { name: "Meta & Google Ads", description: "High-ROAS advertising campaigns showcasing your jewellery to targeted audiences with purchase intent", priceRange: "₹8,000 – ₹25,000/mo" },
      { name: "Influencer Marketing", description: "Connect with jewellery and fashion influencers for authentic product showcases and brand collaborations", priceRange: "₹10,000 – ₹40,000/campaign" },
    ],
    blogArticles: [
      {
        slug: "digital-marketing-for-jewellery-brands",
        title: "Digital Marketing for Jewellery Brands: The Complete Guide",
        tag: "Strategy",
        content: [
          "The jewellery industry in India is undergoing a massive digital transformation. While traditional jewellers relied on word-of-mouth and local reputation, today's consumers discover, research, and even purchase jewellery online. Brands that embrace digital marketing are capturing disproportionate market share.",
          "Digital marketing for jewellery is uniquely visual. Unlike other industries, jewellery marketing depends on stunning photography, aspirational content, and emotional storytelling. Every post, ad, and website page must convey luxury, craftsmanship, and desire.",
          "Business Volunteers has helped over 75 jewellery brands establish their digital presence. Our approach combines product photography, social media management, e-commerce development, and targeted advertising to create a complete digital ecosystem for jewellery businesses.",
          "The jewellery brands that invest in digital marketing today are building brand equity that will compound for decades. With 68% of purchases beginning online, the question isn't whether to go digital — it's how beautifully you can do it.",
          "Ready to showcase your jewellery to the world? Contact Business Volunteers for a free digital marketing consultation designed for jewellery brands.",
        ],
      },
      {
        slug: "instagram-marketing-for-jewellers",
        title: "Instagram Marketing for Jewellers: Sparkle on Social Media",
        tag: "Social Media",
        content: [
          "Instagram is the most important platform for jewellery marketing. It's visual-first, discovery-driven, and where jewellery lovers spend hours exploring designs, trends, and collections.",
          "The most effective Instagram content for jewellers includes: product showcase Reels with dramatic lighting, behind-the-scenes craftsmanship videos, customer styling and try-on content, collection launch announcements, festival and occasion-specific content, and influencer collaborations.",
          "Instagram Shopping has become a powerful sales channel for jewellery brands. Shoppable posts and product tags allow customers to purchase directly from Instagram, reducing friction in the buying journey.",
          "Business Volunteers creates scroll-stopping jewellery content that combines professional photography with strategic storytelling. Our jewellery clients see average engagement rates 3x higher than industry benchmarks.",
          "Let your jewellery shine on Instagram. Business Volunteers handles everything from content creation to community management, so you can focus on crafting beautiful pieces.",
        ],
      },
      {
        slug: "jewellery-product-photography-tips",
        title: "Jewellery Product Photography: Tips for Stunning Shots",
        tag: "Photography",
        content: [
          "In the jewellery business, photography isn't just important — it's everything. The quality of your product photos directly impacts how customers perceive the value and desirability of your pieces.",
          "Key elements of great jewellery photography include: proper lighting (soft diffused light for gold, dramatic lighting for diamonds), clean backgrounds that don't distract from the piece, macro shots that showcase craftsmanship details, lifestyle shots that show the piece being worn, and consistent styling across all product images.",
          "For social media, variety is essential. Mix product-only shots with lifestyle images, model shots, flat-lays with props, and video content. This variety keeps your feed interesting and showcases pieces from different angles and contexts.",
          "Business Volunteers offers professional jewellery photography services — from individual product shots for catalogs to styled campaign shoots for social media and advertising. Our photography team understands how to capture the sparkle, texture, and emotion of jewellery.",
          "Great photography is the foundation of great jewellery marketing. Invest in professional product photography with Business Volunteers.",
        ],
      },
      {
        slug: "ecommerce-for-jewellery",
        title: "Building an E-commerce Jewellery Store That Converts",
        tag: "E-commerce",
        content: [
          "Online jewellery sales in India grew 65% last year, and D2C jewellery brands are capturing significant market share. An e-commerce website is no longer optional for serious jewellery businesses — it's essential.",
          "A successful jewellery e-commerce store requires: high-quality product photography from multiple angles, detailed product descriptions with metal purity and stone details, intuitive filters (by type, metal, price, occasion), secure checkout with multiple payment options, trust signals (BIS hallmark, return policy, authenticity guarantee), and fast mobile-responsive design.",
          "Business Volunteers has launched over 40 jewellery e-commerce stores. Our websites are designed to replicate the in-store experience online — with zoom features, size guides, customization options, and live chat support.",
          "The return on investment for a well-built jewellery e-commerce store is exceptional. Our clients typically recover their website investment within the first 2-3 months of launching through online sales.",
          "Ready to sell jewellery online? Business Volunteers builds beautiful, conversion-optimized e-commerce stores for jewellery brands.",
        ],
      },
      {
        slug: "festival-marketing-for-jewellers",
        title: "Festival Marketing for Jewellers: Maximize Seasonal Sales",
        tag: "Campaigns",
        content: [
          "Festivals drive 60% of annual jewellery sales in India. Dhanteras, Akshaya Tritiya, Diwali, wedding season — these are the make-or-break moments for jewellery businesses. Strategic digital marketing during these periods can transform your annual revenue.",
          "Effective festival marketing for jewellers includes: early campaign planning (6-8 weeks before the festival), themed social media content and stories, targeted Google and Meta ads with festival messaging, WhatsApp broadcast campaigns to existing customers, influencer partnerships for festive collections, and special landing pages with festival offers.",
          "Timing is critical. Our data shows that jewellery purchase research starts 3-4 weeks before major festivals. Campaigns that begin early capture customers during the consideration phase, when they're comparing options.",
          "Business Volunteers has managed festival campaigns for some of India's most beloved jewellery brands. Our campaigns combine creative excellence with data-driven targeting to maximize return on ad spend.",
          "Don't leave your biggest sales season to chance. Plan your festival marketing strategy with Business Volunteers.",
        ],
      },
      {
        slug: "seo-for-jewellery-stores",
        title: "SEO for Jewellery Stores: Get Found When It Matters",
        tag: "SEO",
        content: [
          "When someone searches 'gold necklace designs,' 'diamond engagement ring price,' or 'jewellery shop near me,' you want your store to appear. Jewellery SEO makes this possible.",
          "Jewellery SEO is unique because it combines product SEO, local SEO, and brand SEO. Product SEO targets specific item searches, local SEO captures nearby shoppers, and brand SEO builds long-term authority and trust.",
          "Content marketing is a powerful SEO strategy for jewellers. Blog articles about jewellery trends, buying guides, care tips, and occasion-specific recommendations drive organic traffic and establish expertise.",
          "Google Business Profile optimization is critical for local jewellery stores. Stores with optimized profiles, high review scores, and regular photo updates dominate local search results and drive walk-in traffic.",
          "Business Volunteers' jewellery SEO strategies have delivered hundreds of first-page rankings for our clients. We understand the jewellery market and create SEO strategies that drive both online sales and store visits.",
        ],
      },
      {
        slug: "whatsapp-for-jewellery-business",
        title: "WhatsApp for Jewellery Business: Close More Sales",
        tag: "WhatsApp",
        content: [
          "WhatsApp has become the most important sales channel for jewellery businesses in India. 55% of jewellery customers prefer WhatsApp for inquiries, customization discussions, and even ordering.",
          "A well-set-up WhatsApp Business for jewellers includes: a professional profile with store photos and hours, a complete product catalog organized by category, automated greetings and quick replies for common queries, broadcast lists segmented by customer preferences, and WhatsApp Status updates showcasing new arrivals.",
          "Business Volunteers implements advanced WhatsApp strategies for jewellers: automated new arrival notifications, festival offer broadcasts, anniversary and birthday reminders with gift suggestions, and post-purchase care tips that build loyalty.",
          "The results are remarkable: jewellery businesses using our WhatsApp strategy see 35% higher repeat purchase rates, 50% faster response to inquiries, and significant increases in average order values through personalized recommendations.",
          "Transform your jewellery business with WhatsApp marketing from Business Volunteers.",
        ],
      },
    ],
    faqs: [
      { question: "How can digital marketing help my jewellery store?", answer: "Digital marketing increases your store's visibility, showcases your collections to a wider audience, drives both online and walk-in sales, and builds brand recognition. Our jewellery clients typically see 40-80% increase in customer inquiries." },
      { question: "Which social media platform is best for jewellery?", answer: "Instagram is the #1 platform for jewellery marketing due to its visual nature. Pinterest is excellent for discovery. Facebook is great for local reach and ads. YouTube works well for behind-the-scenes and craftsmanship content." },
      { question: "Do you offer jewellery product photography?", answer: "Yes! We offer professional jewellery photography services including product-only shots, lifestyle images, model shots, and video content optimized for e-commerce and social media." },
      { question: "How much does jewellery marketing cost?", answer: "Social media management starts at ₹6,000/month. E-commerce websites range from ₹20,000-₹60,000. Festival campaign packages start at ₹8,000. We customize packages based on your store size and goals." },
      { question: "Can you help with festival season campaigns?", answer: "Absolutely! Festival marketing is our specialty. We create comprehensive Dhanteras, Akshaya Tritiya, Diwali, and wedding season campaigns that drive maximum sales during peak periods." },
      { question: "Can you build a jewellery e-commerce website?", answer: "Yes! We've launched 40+ jewellery e-commerce stores with professional photography, advanced filters, secure checkout, and mobile-optimized designs that convert browsers into buyers." },
      { question: "How do you handle jewellery brand identity?", answer: "We create complete luxury brand identities including logo design, packaging design, business cards, and marketing collateral that convey the premium quality and craftsmanship of your jewellery." },
      { question: "Can you help with influencer marketing for jewellery?", answer: "Yes, we connect jewellery brands with relevant fashion and lifestyle influencers for authentic product showcases, unboxing videos, and styling content that drives engagement and sales." },
      { question: "Do you work with artificial jewellery brands too?", answer: "Absolutely! We work with gold, diamond, silver, and artificial jewellery brands. Each segment requires a different marketing approach, and we customize strategies accordingly." },
      { question: "How do you measure success in jewellery marketing?", answer: "We track store walk-ins from digital sources, online sales, inquiry volumes, cost per acquisition, return on ad spend, social media growth, and brand search volume. Monthly reports provide complete visibility." },
      { question: "Can you manage our Google Business profile?", answer: "Yes, we optimize and manage Google Business profiles for jewellery stores — including photo updates, review management, Google Posts for new collections, and local SEO optimization." },
      { question: "What makes your jewellery marketing different?", answer: "We understand that jewellery marketing is fundamentally visual and emotional. Our team includes designers and photographers who specialize in luxury aesthetics, ensuring your brand looks as premium online as it does in-store." },
    ],
  },
];

// ─── Generic Sectors ──────────────────────────────────────────────────────────

export const genericSectors: GenericSector[] = [
  { name: "Real Estate", emoji: "🏗️", color: "#ef4444", slug: "real-estate", description: "Digital marketing solutions for real estate developers, agents, and property management companies." },
  { name: "Restaurants", emoji: "🍽️", color: "#f97316", slug: "restaurants", description: "Attract diners, increase orders, and build a loyal customer base with restaurant-focused digital marketing." },
  { name: "Fashion & Apparel", emoji: "👗", color: "#ec4899", slug: "fashion-apparel", description: "Build a fashion brand that stands out with stunning visuals, e-commerce, and influencer marketing." },
  { name: "Fitness & Gym", emoji: "💪", color: "#22c55e", slug: "fitness-gym", description: "Drive memberships and build community with fitness-focused digital marketing strategies." },
  { name: "Beauty & Salon", emoji: "💅", color: "#f472b6", slug: "beauty-salon", description: "Showcase your artistry and attract clients with beauty industry marketing solutions." },
  { name: "Legal Services", emoji: "⚖️", color: "#6b7280", slug: "legal-services", description: "Build trust and attract clients with professional digital marketing for law firms and legal practitioners." },
  { name: "Automotive", emoji: "🚗", color: "#3b82f6", slug: "automotive", description: "Drive showroom traffic and online inquiries for car dealerships, garages, and automotive brands." },
  { name: "Travel & Tourism", emoji: "✈️", color: "#06b6d4", slug: "travel-tourism", description: "Inspire travelers and drive bookings with compelling travel marketing campaigns." },
  { name: "Agriculture", emoji: "🌾", color: "#84cc16", slug: "agriculture", description: "Connect with farmers and agri-businesses through targeted digital outreach and brand building." },
  { name: "Architecture", emoji: "🏛️", color: "#a78bfa", slug: "architecture", description: "Showcase your architectural portfolio and attract high-value projects through digital presence." },
  { name: "Interior Design", emoji: "🎨", color: "#f59e0b", slug: "interior-design", description: "Display your design portfolio and attract homeowners with stunning visual marketing." },
  { name: "Manufacturing", emoji: "🏭", color: "#78716c", slug: "manufacturing", description: "B2B digital marketing solutions for manufacturers to generate leads and build industry authority." },
  { name: "Logistics", emoji: "🚚", color: "#0ea5e9", slug: "logistics", description: "Digital marketing for logistics and supply chain companies to attract business clients." },
  { name: "E-commerce", emoji: "🛒", color: "#8b5cf6", slug: "ecommerce", description: "Comprehensive digital marketing for online stores — from SEO to social media to paid ads." },
  { name: "Finance & Banking", emoji: "🏦", color: "#059669", slug: "finance-banking", description: "Build trust and acquire customers for financial services, fintech, and banking institutions." },
  { name: "Insurance", emoji: "🛡️", color: "#2563eb", slug: "insurance", description: "Digital marketing strategies to generate leads and build trust for insurance companies and agents." },
  { name: "Pharma", emoji: "💊", color: "#14b8a6", slug: "pharma", description: "Compliant digital marketing solutions for pharmaceutical companies and medical device manufacturers." },
  { name: "NGO & Non-Profit", emoji: "🤝", color: "#10b981", slug: "ngo-nonprofit", description: "Amplify your mission and increase donations with non-profit digital marketing strategies." },
  { name: "Event Management", emoji: "🎪", color: "#d946ef", slug: "event-management", description: "Promote events, sell tickets, and build event brands with digital marketing." },
  { name: "Wedding Planning", emoji: "💒", color: "#fb7185", slug: "wedding-planning", description: "Attract couples and showcase your wedding portfolio with romantic, aspirational marketing." },
  { name: "Photography", emoji: "📷", color: "#737373", slug: "photography", description: "Build your photography brand and attract clients with portfolio-focused digital marketing." },
  { name: "Music & Entertainment", emoji: "🎵", color: "#a855f7", slug: "music-entertainment", description: "Promote artists, events, and entertainment brands with engaging digital campaigns." },
  { name: "Pet Care", emoji: "🐾", color: "#f97316", slug: "pet-care", description: "Connect with pet parents through community-driven social media and local marketing." },
  { name: "Home Services", emoji: "🔧", color: "#64748b", slug: "home-services", description: "Generate leads for plumbers, electricians, painters, and home improvement businesses." },
  { name: "Cleaning Services", emoji: "🧹", color: "#0891b2", slug: "cleaning-services", description: "Build trust and attract customers for cleaning and maintenance service businesses." },
  { name: "Coaching & Consulting", emoji: "📋", color: "#7c3aed", slug: "coaching-consulting", description: "Position yourself as an authority and attract clients with thought leadership marketing." },
  { name: "SaaS & Tech", emoji: "💻", color: "#2563eb", slug: "saas-tech", description: "User acquisition, content marketing, and growth strategies for SaaS and technology companies." },
  { name: "Grocery & FMCG", emoji: "🛍️", color: "#16a34a", slug: "grocery-fmcg", description: "Digital marketing solutions for grocery stores, FMCG brands, and consumer goods companies." },
  { name: "Bakery & Cafe", emoji: "☕", color: "#92400e", slug: "bakery-cafe", description: "Attract customers with mouth-watering content and local marketing for bakeries and cafes." },
  { name: "Printing & Packaging", emoji: "📦", color: "#ea580c", slug: "printing-packaging", description: "B2B lead generation and brand building for printing and packaging businesses." },
  { name: "Textile", emoji: "🧵", color: "#c026d3", slug: "textile", description: "Digital marketing for textile manufacturers, wholesalers, and fabric retailers." },
  { name: "Construction", emoji: "🏗️", color: "#b45309", slug: "construction", description: "Lead generation and project showcase marketing for construction companies and contractors." },
  { name: "Electrical & Electronics", emoji: "⚡", color: "#eab308", slug: "electrical-electronics", description: "Digital marketing for electronics retailers, brands, and electrical service providers." },
  { name: "Furniture", emoji: "🪑", color: "#a16207", slug: "furniture", description: "Showcase furniture collections and drive showroom visits with visual marketing strategies." },
  { name: "Stationery & Books", emoji: "📚", color: "#4f46e5", slug: "stationery-books", description: "Digital marketing for bookstores, stationery brands, and publishing companies." },
  { name: "Sports & Recreation", emoji: "⚽", color: "#15803d", slug: "sports-recreation", description: "Build sports brands, promote facilities, and engage athletic communities through digital marketing." },
  { name: "Astrology & Spirituality", emoji: "🔮", color: "#7e22ce", slug: "astrology-spirituality", description: "Grow your spiritual practice with content marketing, community building, and digital outreach." },
  { name: "Handicrafts", emoji: "🎭", color: "#c2410c", slug: "handicrafts", description: "Showcase artisan craftsmanship and reach global buyers with handicraft marketing strategies." },
  { name: "Transport & Logistics", emoji: "🚌", color: "#0369a1", slug: "transport-logistics", description: "Lead generation and brand building for transportation and courier service companies." },
  { name: "Staffing & HR", emoji: "👥", color: "#4338ca", slug: "staffing-hr", description: "Digital marketing for recruitment agencies, HR consultancies, and staffing companies." },
  { name: "Dental Care", emoji: "🦷", color: "#0d9488", slug: "dental-care", description: "Attract patients with dental-specific marketing — from local SEO to patient reviews." },
  { name: "Yoga & Wellness", emoji: "🧘", color: "#65a30d", slug: "yoga-wellness", description: "Build a wellness brand, attract students, and grow community with holistic digital marketing." },
  { name: "Media & Publishing", emoji: "📰", color: "#dc2626", slug: "media-publishing", description: "Audience growth and monetization strategies for media companies and digital publishers." },
  { name: "Gaming", emoji: "🎮", color: "#7c3aed", slug: "gaming", description: "Community building, user acquisition, and engagement marketing for gaming companies and esports." },
];

// ─── Master Services (used for generic industry pages) ────────────────────────

export const masterServices: IndustryService[] = [
  { name: "Social Media Management", description: "Strategic content creation, posting, and community management across all platforms", priceRange: "₹3,500 – ₹15,000/mo" },
  { name: "Website Design & Development", description: "Professional, conversion-optimized websites built with modern frameworks", priceRange: "₹6,500 – ₹45,000" },
  { name: "Search Engine Optimization", description: "Comprehensive SEO strategy to rank higher and drive organic traffic", priceRange: "₹5,000 – ₹18,000/mo" },
  { name: "Google & Meta Ads", description: "Data-driven advertising campaigns with targeting, optimization, and ROI tracking", priceRange: "₹5,000 – ₹25,000/mo" },
  { name: "Brand Identity Design", description: "Complete branding including logo, color palette, typography, and marketing materials", priceRange: "₹850 – ₹25,000" },
  { name: "Video Production & Editing", description: "Professional video content including Reels, corporate films, and product showcases", priceRange: "₹1,800 – ₹20,000" },
  { name: "CRM & Automation", description: "Customer relationship management with WhatsApp automation and loyalty programs", priceRange: "₹4,000 – ₹12,000/mo" },
  { name: "Google Business Optimization", description: "Complete Google Business setup and optimization for local visibility", priceRange: "₹3,000 – ₹8,000" },
];

// ─── B2B Offer Data ───────────────────────────────────────────────────────────

export const b2bCards: B2BCard[] = [
  {
    title: "Digital Essentials Bundle",
    originalPrice: "₹18,500",
    discountedPrice: "₹11,999",
    savings: "₹6,501",
    features: [
      "Social Media Management (3 platforms)",
      "Professional Website (5 pages)",
      "Google Business Setup & Optimization",
      "Brand Kit (Logo + Guidelines)",
      "Monthly Performance Report",
    ],
  },
  {
    title: "Growth Accelerator Pack",
    originalPrice: "₹35,000",
    discountedPrice: "₹22,999",
    savings: "₹12,001",
    features: [
      "Everything in Essentials Bundle",
      "SEO Strategy & Implementation",
      "Google & Meta Ads Management",
      "CRM Setup with WhatsApp Automation",
      "Video Content (4 Reels/month)",
      "Bi-weekly Strategy Calls",
    ],
  },
  {
    title: "Enterprise Partnership",
    originalPrice: "₹65,000",
    discountedPrice: "₹44,999",
    savings: "₹20,001",
    features: [
      "Everything in Growth Pack",
      "Dedicated Account Manager",
      "Influencer Marketing Campaign",
      "E-commerce Store Development",
      "Advanced Analytics Dashboard",
      "Priority Support (24/7)",
      "Quarterly Strategy Review",
    ],
  },
];

export const b2bQualifies: string[] = [
  "Businesses with 2+ years of operations",
  "Companies looking for long-term digital partnership",
  "Brands ready to invest in sustainable growth",
  "Businesses targeting 3+ marketing channels",
  "Companies with a monthly marketing budget of ₹10,000+",
];

export const b2bIncluded: string[] = [
  "Social Media", "Website", "SEO", "Google Ads", "Meta Ads",
  "CRM", "WhatsApp", "Branding", "Video", "Analytics",
  "Strategy", "Support",
];
