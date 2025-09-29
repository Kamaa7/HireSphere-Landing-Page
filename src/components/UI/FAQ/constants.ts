type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I get started with TalentBridge NJ?',
    answer:
      'Simply visit our website, create your profile, upload your resume, and our team will reach out to discuss your career goals and available opportunities.',
  },
  {
    question: 'How does TalentBridge NJ ensure the confidentiality of my job search?',
    answer:
      'We maintain strict confidentiality protocols. Your current employer will never be contacted without your explicit permission, and all communications are handled discreetly.',
  },
  {
    question: 'What types of positions does TalentBridge NJ specialize in?',
    answer:
      'We specialize in placing candidates across various industries including technology, finance, healthcare, manufacturing, and professional services throughout New Jersey.',
  },
  {
    question: 'What benefits does TalentBridge NJ offer for career development?',
    answer:
      'We offer personalized career coaching, resume optimization, interview preparation, salary negotiation support, and ongoing career guidance throughout your professional journey.',
  },
];
