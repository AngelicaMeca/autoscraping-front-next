import { ReactNode } from 'react';
import { Target, Building2, Home as HomeIcon, Users, UserCheck, ShoppingCart, Globe, CheckSquare, Zap, BarChart, Shield } from 'lucide-react';

export interface ServiceData {
  slug: string;
  badge: string;
  titlePart1: string;
  titlePartGradient: string;
  titlePart2: string;
  description: string;
  testimonials: {
    rating: number; // usually 5
    text: string;
    authorName: string;
    authorRole: string;
    authorInitials: string;
  }[];
  features: {
    icon: any;
    title: string;
    description: string;
  }[];
  needThisTitle: string;
  needThisDescription: string;
  helpYouSub: string;
  helpYouTitle: string;
  helpYouDescription: string;
  helpYouList: string[];
  ctaTitle: string;
  ctaDescription: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'generacion-de-leads': {
    slug: 'generacion-de-leads',
    badge: 'Lead Generation Platform',
    titlePart1: '',
    titlePartGradient: 'Web Scraping',
    titlePart2: 'for Lead Generation',
    description: 'Perfect for businesses that need to gather large volumes of prospect data or automate the lead verification process, reducing time and resources on campaigns.',
    testimonials: [
      {
        rating: 5,
        text: '"This service strictly changed how I manage my partnerships platform, making our lead generation processes significantly faster and more efficient."',
        authorName: 'Sarah J.',
        authorRole: 'Head of Sales, Tech',
        authorInitials: 'SJ'
      },
      {
        rating: 5,
        text: '"We experienced a major leap forward with our automated lead generation process, allowing our team to excel beyond our expectations."',
        authorName: 'Mark D.',
        authorRole: 'Lead Generation Executive',
        authorInitials: 'MD'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Up to date contact data',
        description: 'Access current contact information to build a robust database for your sales efforts.'
      },
      {
        icon: Zap,
        title: 'Customizable lead criteria',
        description: 'Define specific lead criteria to ensure extracted data aligns precisely with your target market.'
      },
      {
        icon: Shield,
        title: 'Time savings in research',
        description: 'Automate data collection, enabling your sales team to focus on closing deals instead of searching for leads.'
      },
      {
        icon: BarChart,
        title: 'Seamless CRM integration',
        description: 'Receive data in a format that integrates smoothly into your CRM, streamlining your sales workflow.'
      }
    ],
    needThisTitle: 'How To Know If You Need This',
    needThisDescription: 'If your company struggles with generating leads manually, wasting time and resources on low-quality prospects that fail to convert, web scraping for lead generation is the solution for you.',
    helpYouSub: 'Our Approach',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our web scraping solutions automate lead generation by extracting highly relevant prospect information from any source, organizing the data into an actionable format.',
    helpYouList: [
      'Automated prospect extraction',
      'Data structured in ready-to-use format',
      'Empowers your sales team to close faster'
    ],
    ctaTitle: 'Ready to transform your lead generation?',
    ctaDescription: 'Start automating your reach and routines today, and see results in opening, and converting.',
    faqs: [
      {
        question: 'What does Web Scraping for Lead Generation involve?',
        answer: 'Web Scraping for Lead Generation is the process of extracting contact information and relevant data from various websites to build a targeted lead database.'
      },
      {
        question: 'Who is the target audience for this service?',
        answer: 'This service is aimed at sales teams, marketers, and businesses seeking to identify potential customers and enhance their lead generation efforts.'
      },
      {
        question: 'What are the benefits of using Web Scraping for Lead Generation?',
        answer: 'By scraping data for leads, you can create a more robust sales pipeline, increase your outreach efficiency, and target your marketing efforts based on specific customer profiles.'
      }
    ]
  },
  'ai-web-scraping': {
    slug: 'ai-web-scraping',
    badge: 'AI Scraping',
    titlePart1: '',
    titlePartGradient: 'AI Web Scraping',
    titlePart2: '',
    description: 'Perfect for companies that need to efficiently collect large volumes of data or automate repetitive tasks, reducing time and resource consumption with AI Web Scraping services.',
    testimonials: [
      {
        rating: 5,
        text: '"Thanks to AI Web Scraping, we\'ve reduced operational costs by automating the data collection process. We now get high-quality data without wasting time"',
        authorName: 'John D.',
        authorRole: 'E-commerce Industry',
        authorInitials: 'JD'
      },
      {
        rating: 5,
        text: '"The accuracy and speed with which AI Web Scraping adapts to website changes have given us a competitive edge we didn\'t have before"',
        authorName: 'Elena M.',
        authorRole: 'E-commerce Industry',
        authorInitials: 'EM'
      }
    ],
    features: [
      {
        icon: Zap,
        title: 'Adaptability to website changes',
        description: 'Our AI technology swiftly adapts to website design changes, ensuring you never miss valuable information.'
      },
      {
        icon: BarChart,
        title: 'Enhanced data analysis',
        description: 'Extracted data is automatically analyzed by our AI tools, giving you relevant insights without manual effort.'
      },
      {
        icon: Target,
        title: 'Save time and resources',
        description: 'Automating data collection allows you to focus on strategic decisions instead of manual data gathering.'
      },
      {
        icon: Shield,
        title: 'Scalable solutions',
        description: 'Our AI Web Scraping service scales effortlessly to meet your data extraction needs, supporting seamless business growth.'
      }
    ],
    needThisTitle: 'How To Know If You Need AI Web Scraping',
    needThisDescription: 'If your company struggles to collect data from multiple websites, consumes a lot of time and resources and delays decision-making and impedes growth; AI Web Scraping is for you.',
    helpYouSub: 'AI Solutions',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our AI Web Scraping service automates data collection efficiently and accurately, adapting to website changes in real-time, so you can make data-driven decisions quickly.',
    helpYouList: [
      'Automate repetitive data collection tasks',
      'Real-time adaptation to website changes',
      'Enable rapid data-driven decisions'
    ],
    ctaTitle: 'The power of experienced talent ready to provide you with AI Web Scraping',
    ctaDescription: '',
    faqs: [
      {
        question: 'What is AI Web Scraping?',
        answer: 'AI Web Scraping leverages artificial intelligence to automate the extraction of data from websites, enhancing efficiency and accuracy in data collection.'
      },
      {
        question: 'Who is the target audience for AI Web Scraping?',
        answer: 'This service is aimed at businesses and organizations that need advanced data extraction capabilities, particularly those looking to analyze large datasets efficiently.'
      },
      {
        question: 'What are the advantages of hiring AI Web Scraping services?',
        answer: 'By utilizing AI Web Scraping, you can significantly reduce manual data extraction time, increase data accuracy, and gain insights from complex datasets that would be challenging to process manually.'
      }
    ]
  },
  'extraccion-de-linkedin': {
    slug: 'extraccion-de-linkedin',
    badge: 'LinkedIn',
    titlePart1: '',
    titlePartGradient: 'Web Scraping LinkedIn',
    titlePart2: '',
    description: 'Perfect for businesses that need to collect professional data or automate lead generation, reducing time and resource consumption with Web Scraping LinkedIn services.',
    testimonials: [
      {
        rating: 5,
        text: '"With LinkedIn Web Scraping, we can now access critical professional information quickly, helping us improve our business opportunities."',
        authorName: 'Carlos A.',
        authorRole: 'From the Job Industry',
        authorInitials: 'CA'
      },
      {
        rating: 5,
        text: '"The ability to obtain updated and organized LinkedIn data has streamlined our research and outreach strategies."',
        authorName: 'Fabiola T.',
        authorRole: 'Booking Agents Industry',
        authorInitials: 'FT'
      }
    ],
    features: [
      {
        icon: UserCheck,
        title: 'Qualified lead generation',
        description: 'Extract contact information from LinkedIn to generate qualified leads aligned with your business goals.'
      },
      {
        icon: Users,
        title: 'Competitor analysis',
        description: 'Gather insights on competitors and industry trends from LinkedIn data to strengthen your business strategy.'
      },
      {
        icon: Zap,
        title: 'Regular data updates',
        description: 'Choose the frequency of data updates to ensure you always have timely, relevant information at hand.'
      },
      {
        icon: Shield,
        title: 'Customized data formats',
        description: 'Receive LinkedIn data in your preferred format and location, allowing for seamless integration into your existing systems.'
      }
    ],
    needThisTitle: 'How To Know If You Need LinkedIn Web Scraping',
    needThisDescription: 'If your company struggles to collect relevant professional data from LinkedIn manually, leading to slow and incomplete insights that hinder your ability to make informed business decisions; LinkedIn Web Scraping is for you.',
    helpYouSub: 'Data Extraction',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our LinkedIn Data Automation service extracts up-to-date professional data efficiently, providing you with qualified leads, competitor insights, and customized reports that seamlessly integrate into your systems, empowering smarter, faster decision-making.',
    helpYouList: [
      'Extract data from LinkedIn profiles and job postings',
      'Automate professional trend analysis',
      'Seamlessly integrate data into your CRM'
    ],
    ctaTitle: 'The power of experienced talent ready to provide you with Web Scraping LinkedIn',
    ctaDescription: '',
    faqs: [
      {
        question: 'What is Web Scraping LinkedIn?',
        answer: 'Web Scraping LinkedIn involves extracting data from LinkedIn profiles and job postings to gather insights about professionals, companies, and job market trends.'
      },
      {
        question: 'Who benefits from Web Scraping LinkedIn?',
        answer: 'This service is particularly useful for recruiters, marketers, and businesses looking to analyze professional trends and identify potential candidates or leads.'
      },
      {
        question: 'What are the benefits of using Web Scraping LinkedIn?',
        answer: 'By scraping LinkedIn, you gain access to a wealth of professional data that can inform your hiring strategies, improve your networking efforts, and help you stay updated on industry trends.'
      }
    ]
  },
  'monitoreo-de-airbnb': {
    slug: 'monitoreo-de-airbnb',
    badge: 'Airbnb',
    titlePart1: '',
    titlePartGradient: 'Airbnb Web Scraping Services',
    titlePart2: '',
    description: 'Perfect for businesses that need to understand large volumes of property and pricing data to automate market tasks, reducing time and resource consumption with Airbnb Web Scraping services.',
    testimonials: [
      {
        rating: 5,
        text: '"We\'ve been able to stay ahead in the real estate market by using this service to track competitor listings and analyze trends"',
        authorName: 'Maria C.',
        authorRole: 'From the Real Estate Industry',
        authorInitials: 'MC'
      },
      {
        rating: 5,
        text: '"The periodic market trend reports have been invaluable for planning our investment strategies."',
        authorName: 'James P.',
        authorRole: 'From the Investment Sector',
        authorInitials: 'JP'
      }
    ],
    features: [
      {
        icon: BarChart,
        title: 'Market trend analysis',
        description: 'Gather insights on rental market trends to make data-driven investment decisions in the short-term rental space.'
      },
      {
        icon: Target,
        title: 'Competitor price tracking',
        description: 'Analyze competing Airbnb listings to adjust your pricing strategy effectively.'
      },
      {
        icon: Zap,
        title: 'Automated change monitoring',
        description: 'Set alerts for price or availability changes in Airbnb listings, ensuring you stay updated at all times.'
      },
      {
        icon: Shield,
        title: 'Structured data delivery',
        description: 'Receive data in a clean, organized format for straightforward, actionable analysis.'
      }
    ],
    needThisTitle: 'How To Know If You Need Airbnb Web Scraping',
    needThisDescription: 'If your company struggles to track property prices, availability, and market trends manually, leading to inefficiencies and outdated insights, Airbnb Web Scraping is for you.',
    helpYouSub: 'Data Analytics',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our Airbnb Web Scraping service provides real-time property data and trends in a structured format, enabling you to make informed investment and marketing decisions with confidence and precision.',
    helpYouList: [
      'Track real-time property prices and availability',
      'Analyze dynamic market trends efficiently',
      'Receive structured data for confident decisions'
    ],
    ctaTitle: 'The power of experienced talent ready to provide you with Airbnb Web Scraping',
    ctaDescription: '',
    faqs: [
      {
        question: 'What is Airbnb Web Scraping?',
        answer: 'Airbnb Web Scraping is the process of extracting data from Airbnb listings, reviews, and pricing information to analyze market trends and consumer preferences.'
      },
      {
        question: 'Who should consider Airbnb Web Scraping services?',
        answer: 'This service is ideal for property managers, real estate investors, and market analysts who want to understand rental market dynamics and competitive pricing strategies.'
      },
      {
        question: 'What advantages does Airbnb Web Scraping offer?',
        answer: 'By utilizing Airbnb Web Scraping, you can gather comprehensive market data, identify pricing trends, and enhance your property management strategies based on real-time insights.'
      }
    ]
  },
  'registro-de-google-maps': {
    slug: 'registro-de-google-maps',
    badge: 'Google Maps',
    titlePart1: '',
    titlePartGradient: 'Web Scraping Google Maps',
    titlePart2: '',
    description: 'Perfect for businesses that need to extract location data to automate the collection of geographic information, reducing time and resource consumption with Web Scraping Google Maps services.',
    testimonials: [
      {
        rating: 5,
        text: '"This service helped us identify key local businesses for partnerships, making our expansion more targeted and efficient."',
        authorName: 'Sandra L.',
        authorRole: 'From the Travel Industry',
        authorInitials: 'SL'
      },
      {
        rating: 5,
        text: '"The structured data from Google Maps allowed us to map out customer locations, improving our delivery logistics."',
        authorName: 'Alex T.',
        authorRole: 'From the Logistics Industry',
        authorInitials: 'AT'
      }
    ],
    features: [
      {
        icon: Target,
        title: 'Competitor analysis',
        description: 'Extract competitor data to gain insights into local market conditions and refine your strategy.'
      },
      {
        icon: Globe,
        title: 'Customer location mapping',
        description: 'Collect data on potential customer locations to optimize your marketing efforts effectively.'
      },
      {
        icon: Zap,
        title: 'Real-time data updates',
        description: 'Stay informed with regularly updated data, ensuring your strategies are always based on the latest information.'
      },
      {
        icon: Shield,
        title: 'Custom data formats',
        description: 'Receive Google Maps data in your preferred format for seamless integration with your analysis tools.'
      }
    ],
    needThisTitle: 'How To Know If You Need Google Maps Web Scraping',
    needThisDescription: 'If your company struggles to extract local business data manually, leading to inefficiencies and incomplete information that make it difficult to target specific areas effectively; Google Maps Web Scraping is for you.',
    helpYouSub: 'Location Data',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our Google Maps Web Scraping service extracts valuable business data, including reviews, ratings, and locations, providing the insights you need to analyze local markets and optimize your strategies with precision.',
    helpYouList: [
      'Extract valuable location and business data',
      'Analyze local markets to optimize strategies',
      'Use structural insights to target specific areas'
    ],
    ctaTitle: 'The power of experienced talent ready to provide you with Web Scraping Google Maps',
    ctaDescription: '',
    faqs: [
      {
        question: 'What is Web Scraping Google Maps?',
        answer: 'Web Scraping Google Maps involves extracting location-based data, such as business details, reviews, and contact information from Google Maps.'
      },
      {
        question: 'Who can benefit from Web Scraping Google Maps?',
        answer: 'This service is beneficial for businesses looking to analyze competitor locations, gather customer feedback, and identify new market opportunities.'
      },
      {
        question: 'What are the advantages of using Web Scraping Google Maps?',
        answer: 'By utilizing this service, you can gain valuable insights into local market conditions, enhance your location-based marketing strategies, and stay competitive in your industry.'
      }
    ]
  },
  'web-scraping-automation': {
    slug: 'web-scraping-automation',
    badge: 'Automation',
    titlePart1: '',
    titlePartGradient: 'Web Scraping Automation',
    titlePart2: '',
    description: 'Perfect for businesses that need to automate the collection of large volumes of data or streamline routine tasks, reducing time and resource consumption with Web Scraping Automation services.',
    testimonials: [
      {
        rating: 5,
        text: '"Automating our web scraping has allowed us to process data faster, giving us more time for strategic work."',
        authorName: 'Tom W.',
        authorRole: 'From the Content Industry',
        authorInitials: 'TW'
      },
      {
        rating: 5,
        text: '"The automation features have improved our data accuracy and speed, leading to better customer insights and increased revenue."',
        authorName: 'Rachel S.',
        authorRole: 'From the Entertainment Industry',
        authorInitials: 'RS'
      }
    ],
    features: [
      {
        icon: Shield,
        title: 'Reduced Human Error',
        description: 'Automation minimizes the chances of human error, ensuring the accuracy and reliability of the data collected.'
      },
      {
        icon: Zap,
        title: 'Continuous Monitoring',
        description: 'Set schedules for automatic scraping to keep your data updated without manual intervention.'
      },
      {
        icon: Target,
        title: 'Flexible Scheduling Options',
        description: 'Customize how often you want data to be scraped, tailored to your specific business needs.'
      },
      {
        icon: BarChart,
        title: 'Time and Resource Efficiency',
        description: 'By automating scraping, your team can spend more time on strategic initiatives rather than data collection.'
      }
    ],
    needThisTitle: 'How To Know If You Need Web Scraping Automation',
    needThisDescription: 'If your company struggles with manual web scraping, facing inefficiencies and errors in handling large-scale data extraction tasks, Web Scraping Automation is for you.',
    helpYouSub: 'Data Automation',
    helpYouTitle: 'How We Help You',
    helpYouDescription: 'Our automation tools streamline the web scraping process, enabling accurate and efficient data collection at scale, so you can focus on making faster, data-driven decisions.',
    helpYouList: [
      'Streamline web scraping processes',
      'Enable efficient data collection at scale',
      'Focus on making fast, data-driven decisions'
    ],
    ctaTitle: 'The power of experienced talent ready to provide you with Web Scraping Automation',
    ctaDescription: '',
    faqs: [
      {
        question: 'What is Web Scraping Automation?',
        answer: 'Web Scraping Automation refers to the use of tools and scripts to automate the data extraction process, making it more efficient and less time-consuming.'
      },
      {
        question: 'Who should consider Web Scraping Automation services?',
        answer: 'This service is ideal for businesses that regularly collect data from websites and need a scalable solution to automate their data extraction processes.'
      },
      {
        question: 'What are the benefits of implementing Web Scraping Automation?',
        answer: 'By automating your web scraping efforts, you can significantly reduce the time spent on data collection, minimize human error, and ensure you always have access to the latest data.'
      }
    ]
  }
};
