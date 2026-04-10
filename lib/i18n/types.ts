export interface Dictionary {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    bookMeeting: { title: string; description: string };
    dataFactory: { title: string; description: string };
    dataSquad: { title: string; description: string };
  };
  nav: {
    solutions: string;
    resources: string;
    company: string;
    bookMeeting: string;
    featuredSolutions: string;
    dataFactory: { title: string; description: string; mobileDesc: string };
    dataSquad: { title: string; description: string; mobileDesc: string };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    home: string;
    about: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    allRightsReserved: string;
    emailUs: string;
    callUs: string;
  };
  contactCta: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    emailLabel: string;
    callLabel: string;
    cta: string;
    statsTitle: string;
    statsSubtitle: string;
    responseTime: string;
    projectsDelivered: string;
    industries: string;
    yearsExp: string;
    trustedBy: string;
  };
  home: {
    hero: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      titleLine3: string;
      description: string;
      cta: string;
      ctaSecondary: string;
    };
    stats: { dataPoints: string; repos: string; services: string; hours: string };
    services: {
      badge: string;
      title1: string;
      title2: string;
      dataFactory: { badge: string; title: string; description: string; cta: string };
      dataSquad: { badge: string; title: string; description: string; cta: string };
    };
    industries: { badge: string; title1: string; title2: string };
    process: { badge: string; title1: string; title2: string };
    testimonials: { badge: string; title1: string; title2: string };
  };
  dataFactory: {
    hero: { badge: string; title1: string; title2: string; description: string; cta: string; ctaSecondary: string };
    services: { badge: string; title1: string; title2: string };
    cta: { title: string; description: string; button: string };
  };
  dataSquad: {
    hero: { badge: string; title1: string; title2: string; description: string; cta: string; ctaSecondary: string };
    services: { badge: string; title1: string; title2: string };
    faq: { badge: string; title1: string; title2: string; subtitle: string };
  };
  about: {
    hero: { badge: string; title1: string; title2: string; description: string };
  };
  bookMeeting: {
    hero: { badge: string; title1: string; title2: string; description: string };
    form: {
      fullName: string;
      email: string;
      phone: string;
      country: string;
      agree: string;
      submit: string;
      sending: string;
    };
  };
  common: {
    learnMore: string;
    getStarted: string;
    bookMeeting: string;
    viewAll: string;
    loading: string;
    error: string;
  };
}
