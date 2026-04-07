import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'hi';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'hi' : 'en');

  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return result ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      tagline: 'Visual Storyteller',
      hero_title_1: 'Narratives that',
      hero_title_2: 'drive action.',
      hero_desc: 'I am Antony CJ—translating complex global development work into powerful, human-centered narratives for over 9 years.',
      hero_cta: 'Explore the Imprints',
      vignettes_label: 'Portfolio',
      vignettes_title: 'Selected',
      vignettes_bold: 'Vignettes',
      vignettes_link: 'View All Work',
      pillar_label_1: '01',
      pillar_title_1: 'Photography',
      pillar_desc_1: 'Capturing unscripted reality with respect to grassroots interventions.',
      pillar_label_2: '02',
      pillar_title_2: 'Film & Campaigns',
      pillar_desc_2: 'Designing media that scales local impact onto global stages.',
      pillar_label_3: '03',
      pillar_title_3: 'Strategy',
      pillar_desc_3: 'Strengthening internal ecosystems so impact stories are told ethically.',
      caption_1: 'Sport For Development · LaLiga',
      caption_2: 'Education · Transform Schools',
      caption_3: 'Gender Equity · Community',
      caption_4: 'Sport For Development · Rural India',
    },
    stats: {
      reached: 'People Reached',
      experience: 'Years of Experience',
      projects: 'Projects Delivered',
      orgs: 'Organizations',
    },
    partners: {
      label: "Organizations I've Worked With",
    },
    testimonials: {
      heading_label: 'What They Say',
      heading_title: 'Voices of',
      heading_bold: 'Impact',
      q1: 'Antony captures not just what\'s visible, but the invisible threads of human dignity and aspiration that run through every development story.',
      a1: 'Programme Officer',
      o1: 'UNDP India',
      q2: 'His visual documentation transformed the way we communicated our impact to donors and government stakeholders alike.',
      a2: 'Communications Lead',
      o2: 'Transform Schools',
      q3: 'Antony\'s work with our foundation brought the stories of athletes across rural India to the world stage in a way words alone never could.',
      a3: 'Project Coordinator',
      o3: 'Rafael Nadal Foundation',
    },
    about: {
      label: 'About',
      tagline: 'Independent communications consultant & visual storyteller working across global development projects.',
      bio1: 'I am a communications strategist and visual storyteller working across multiple social impact organizations, helping translate complex development work into powerful, human-centered narratives.',
      bio2: 'Over the past 9+ years, I have collaborated with organizations including UNDP India, Transform Schools, and leading development partners—designing campaigns, documenting impact, and building communication systems that drive engagement and influence.',
      bio3: 'My work spans photography, film, digital campaigns, and communication strategy—supporting initiatives across climate action, education, gender, and sustainable development. From leading national campaigns reaching over 12M+ people to documenting grassroots interventions across India, I focus on creating stories that are not just seen, but felt and acted upon.',
      bio4: 'I work closely with governments, nonprofits, and institutions to craft narratives, produce visual content, and strengthen their communication ecosystems—bridging the gap between on-ground impact and public understanding.',
      photo_caption: 'Antony CJ — Impact Photographer',
      timeline_title: 'Experience',
      timeline_bold: 'Timeline',
      t1_year: 'Present',
      t1_role: 'Independent Communications Consultant',
      t1_desc: 'Working closely with governments, nonprofits, and institutions to craft narratives and strengthen communication ecosystems.',
      t2_year: 'Past 9+ Years',
      t2_role: 'Impact Photographer & Specialist',
      t2_desc: 'Translating on-ground impact into public understanding. Leading national campaigns reaching over 12M+ people.',
      t3_year: 'Collaborations',
      t3_role: 'Global Organizations',
      t3_desc: 'UNDP India, Transform Schools, Rafael Nadal Foundation, LaLiga, Martha Farrell Foundation, The Commonwealth.',
    },
    portfolio: {
      title: 'My',
      bold: 'Work',
      subtitle: 'Discover Inspiring Social Impact Stories',
      cat_all: 'All',
      cat_sport: 'Sport For Development',
      cat_edu: 'Education',
      cat_video: 'Video Productions',
      cat_gender: 'Gender Equality',
      cat_pub: 'Publications',
      item1_title: 'Sport For Development',
      item2_title: 'Education: Improving Learning Outcomes',
      item3_title: 'Breaking Gender Barriers',
      item4_title: 'Video Productions',
      item5_title: 'Articles & Publications',
      item6_title: 'UNDP Climate Action Campaign',
    },
    blog: {
      label: 'Press & Media',
      title: 'Featured',
      bold: 'In',
      subtitle: 'Publications and national media covering our campaigns, grassroots documentation, and social impact work.',
      read: 'Read Article',
      pub1_title: 'Back to School Programme in Telangana',
      pub1_desc: 'The programme covers four subjects — English, Math, Science and Telugu — for students in local Telugu-medium schools via a community-learning approach to address learning loss.',
      pub2_title: 'Transform Schools',
      pub2_desc: 'The organisation is leading change towards ensuring improved learning outcomes for children — an in-depth opinion piece on the grassroots education initiative.',
      pub3_title: 'Rafael Nadal Continues to Support Rural India Through NETS',
      pub3_desc: 'Around 210 kids from NETS took part in gymkhana games at Anantapur Sports Village, marking 7 years of the Nadal Educational & Tennis School in rural India.',
    },
    contact: {
      title: 'Get your Impact Documented',
      subtitle: 'With over 10 years in Social impact documentation in India and abroad, we capture your brand\'s essence and elevate your visual storytelling.',
      process_title: 'Collaborative Process',
      process_desc: 'We work closely with you to ensure every shoot reflects your unique style and vision.',
      quality_title: 'High-Quality Imagery',
      quality_desc: 'Our attention to detail guarantees that each image showcases the craftsmanship and quality of your work.',
      time_title: 'On Time, Every Time',
      time_desc: 'We understand the fast-paced nature of social impact and deliver your visuals promptly.',
      send_query: 'Send your queries to:',
      form_title: 'Or send a direct message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending message...',
      sent: 'Message securely sent!',
      error: 'Failed to send message. Please try again.',
      fallback: 'Thanks for reaching out! I will get back to you soon.',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      portfolio: 'पोर्टफोलियो',
      blog: 'ब्लॉग',
      contact: 'संपर्क',
    },
    home: {
      tagline: 'दृश्य कथाकार',
      hero_title_1: 'कहानियाँ जो',
      hero_title_2: 'बदलाव लाती हैं।',
      hero_desc: 'मैं हूँ Antony CJ — पिछले 9+ वर्षों से जटिल वैश्विक विकास कार्यों को शक्तिशाली, मानव-केंद्रित कथाओं में रूपांतरित कर रहा हूँ।',
      hero_cta: 'कार्य देखें',
      vignettes_label: 'पोर्टफोलियो',
      vignettes_title: 'चुनिंदा',
      vignettes_bold: 'कहानियाँ',
      vignettes_link: 'सभी कार्य देखें',
      pillar_label_1: '01',
      pillar_title_1: 'फ़ोटोग्राफ़ी',
      pillar_desc_1: 'जमीनी हस्तक्षेपों का सम्मान के साथ, बिना पटकथा वाली वास्तविकता को कैप्चर करना।',
      pillar_label_2: '02',
      pillar_title_2: 'फ़िल्म और अभियान',
      pillar_desc_2: 'स्थानीय प्रभाव को वैश्विक मंच पर ले जाने वाला मीडिया डिजाइन करना।',
      pillar_label_3: '03',
      pillar_title_3: 'रणनीति',
      pillar_desc_3: 'आंतरिक पारिस्थितिकी तंत्र को मजबूत करना ताकि प्रभाव की कहानियाँ नैतिक रूप से बताई जाएँ।',
      caption_1: 'खेल विकास · LaLiga',
      caption_2: 'शिक्षा · Transform Schools',
      caption_3: 'लैंगिक समानता · समुदाय',
      caption_4: 'खेल विकास · ग्रामीण भारत',
    },
    stats: {
      reached: 'लोगों तक पहुंचे',
      experience: 'वर्षों का अनुभव',
      projects: 'परियोजनाएं पूर्ण',
      orgs: 'संगठन',
    },
    partners: {
      label: 'जिन संगठनों के साथ काम किया',
    },
    testimonials: {
      heading_label: 'वे क्या कहते हैं',
      heading_title: 'प्रभाव की',
      heading_bold: 'आवाज़ें',
      q1: 'एंटनी केवल वही नहीं कैप्चर करते जो दिखता है, बल्कि मानवीय गरिमा और आकांक्षा के अदृश्य धागों को भी, जो हर विकास कहानी में बुने होते हैं।',
      a1: 'कार्यक्रम अधिकारी',
      o1: 'UNDP India',
      q2: 'उनके दृश्य दस्तावेज़ीकरण ने दानदाताओं और सरकारी हितधारकों तक हमारे प्रभाव को संप्रेषित करने के तरीके को बदल दिया।',
      a2: 'संचार प्रमुख',
      o2: 'Transform Schools',
      q3: 'हमारी फाउंडेशन के साथ एंटनी का काम ग्रामीण भारत के खिलाड़ियों की कहानियों को विश्व मंच पर लाया, जो अकेले शब्दों से संभव नहीं था।',
      a3: 'परियोजना समन्वयक',
      o3: 'Rafael Nadal Foundation',
    },
    about: {
      label: 'परिचय',
      tagline: 'स्वतंत्र संचार सलाहकार और दृश्य कथाकार, वैश्विक विकास परियोजनाओं में कार्यरत।',
      bio1: 'मैं एक संचार रणनीतिकार और दृश्य कथाकार हूँ, जो कई सामाजिक प्रभाव संगठनों में काम करते हुए जटिल विकास कार्य को शक्तिशाली, मानव-केंद्रित कथाओं में बदलने में मदद करता हूँ।',
      bio2: 'पिछले 9+ वर्षों में, मैंने UNDP India, Transform Schools और प्रमुख विकास भागीदारों सहित संगठनों के साथ सहयोग किया है — अभियान डिजाइन करना, प्रभाव का दस्तावेजीकरण करना और संचार प्रणालियाँ बनाना।',
      bio3: 'मेरा काम फ़ोटोग्राफ़ी, फ़िल्म, डिजिटल अभियान और संचार रणनीति तक फैला है — जलवायु कार्रवाई, शिक्षा, लैंगिक समानता और सतत विकास में पहलों का समर्थन करते हुए।',
      bio4: 'मैं सरकारों, गैर-लाभकारी संस्थाओं और संस्थानों के साथ मिलकर कथाएँ गढ़ता हूँ, दृश्य सामग्री तैयार करता हूँ, और उनके संचार पारिस्थितिकी तंत्र को मजबूत करता हूँ।',
      photo_caption: 'Antony CJ — प्रभाव फ़ोटोग्राफर',
      timeline_title: 'अनुभव',
      timeline_bold: 'यात्रा',
      t1_year: 'वर्तमान',
      t1_role: 'स्वतंत्र संचार सलाहकार',
      t1_desc: 'सरकारों, गैर-लाभकारी संस्थाओं और संस्थानों के साथ मिलकर कथाएँ गढ़ना और संचार पारिस्थितिकी तंत्र को मजबूत करना।',
      t2_year: 'पिछले 9+ वर्ष',
      t2_role: 'प्रभाव फ़ोटोग्राफर और विशेषज्ञ',
      t2_desc: 'जमीनी प्रभाव को सार्वजनिक समझ में बदलना। 12M+ से अधिक लोगों तक पहुँचने वाले राष्ट्रीय अभियानों का नेतृत्व करना।',
      t3_year: 'सहयोग',
      t3_role: 'वैश्विक संगठन',
      t3_desc: 'UNDP India, Transform Schools, Rafael Nadal Foundation, LaLiga, Martha Farrell Foundation, The Commonwealth.',
    },
    portfolio: {
      title: 'मेरा',
      bold: 'काम',
      subtitle: 'प्रेरक सामाजिक प्रभाव कहानियाँ खोजें',
      cat_all: 'सभी',
      cat_sport: 'खेल विकास',
      cat_edu: 'शिक्षा',
      cat_video: 'वीडियो निर्माण',
      cat_gender: 'लैंगिक समानता',
      cat_pub: 'प्रकाशन',
      item1_title: 'खेल विकास',
      item2_title: 'शिक्षा: बेहतर सीखने के परिणाम',
      item3_title: 'लैंगिक बाधाओं को तोड़ना',
      item4_title: 'वीडियो निर्माण',
      item5_title: 'लेख और प्रकाशन',
      item6_title: 'UNDP जलवायु कार्रवाई अभियान',
    },
    blog: {
      label: 'प्रेस और मीडिया',
      title: 'प्रकाशित',
      bold: 'लेख',
      subtitle: 'हमारे अभियानों, जमीनी दस्तावेज़ीकरण और सामाजिक प्रभाव कार्य को कवर करने वाले प्रकाशन और राष्ट्रीय मीडिया।',
      read: 'लेख पढ़ें',
      pub1_title: 'तेलंगाना में Back to School कार्यक्रम',
      pub1_desc: 'यह कार्यक्रम स्थानीय तेलुगु-माध्यम स्कूलों में छात्रों के लिए चार विषयों — अंग्रेजी, गणित, विज्ञान और तेलुगु — को कवर करता है।',
      pub2_title: 'Transform Schools',
      pub2_desc: 'संगठन बच्चों के लिए बेहतर सीखने के परिणाम सुनिश्चित करने की दिशा में परिवर्तन का नेतृत्व कर रहा है।',
      pub3_title: 'Rafael Nadal का NETS के माध्यम से ग्रामीण भारत को समर्थन जारी',
      pub3_desc: 'NETS के लगभग 210 बच्चों ने अनंतपुर स्पोर्ट्स विलेज में जिमखाना खेलों में भाग लिया, जो Nadal Educational & Tennis School की 7वीं वर्षगांठ का प्रतीक है।',
    },
    contact: {
      title: 'अपने प्रभाव को दस्तावेज़ करें',
      subtitle: 'भारत और विदेश में सामाजिक प्रभाव दस्तावेज़ीकरण में 10+ वर्षों के अनुभव के साथ, हम आपके ब्रांड के सार को कैप्चर करते हैं।',
      process_title: 'सहयोगी प्रक्रिया',
      process_desc: 'हम आपके साथ मिलकर काम करते हैं ताकि हर शूट आपकी अनूठी शैली और दृष्टि को प्रतिबिंबित करे।',
      quality_title: 'उच्च-गुणवत्ता की छवियाँ',
      quality_desc: 'विवरण पर हमारा ध्यान गारंटी देता है कि प्रत्येक छवि आपके काम की कारीगरी और गुणवत्ता को दर्शाती है।',
      time_title: 'समय पर, हर बार',
      time_desc: 'हम सामाजिक प्रभाव की तेज़ गति को समझते हैं और आपके विज़ुअल्स को समय पर डिलीवर करते हैं।',
      send_query: 'अपने प्रश्न भेजें:',
      form_title: 'या सीधे संदेश भेजें',
      name: 'नाम',
      email: 'ईमेल',
      message: 'संदेश',
      send: 'संदेश भेजें',
      sending: 'संदेश भेजा जा रहा है...',
      sent: 'संदेश सुरक्षित रूप से भेजा गया!',
      error: 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें।',
      fallback: 'संपर्क करने के लिए धन्यवाद! मैं जल्द ही वापस आऊंगा।',
    },
  },
};
