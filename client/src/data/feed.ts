import { FeedData } from "@/types/feed";

export const feedData  : FeedData = [
  {
    "id": 1,
    "author": {
      "id": 101,
      "name": "Aarav Mehta",
      "username": "aarav-mehta",
      "profileImage": "https://i.pravatar.cc/150?img=12",
      "headline": "Software Engineer at Microsoft",
      "location": "Bengaluru, India"
    },
    "content": "Just completed my first year as a Software Engineer. The journey has been challenging, rewarding, and full of lessons. Grateful for everyone who helped me grow along the way.",
    "media": null,
    "hashtags": ["SoftwareEngineering", "CareerGrowth", "Tech"],
    "createdAt": "2026-09-20T08:30:00Z",
    "reactions": {
      "likes": 342,
      "celebrate": 86,
      "support": 41,
      "love": 29
    },
    "shares": 12,
    "isLiked": false,
    "comments": [
      {
        "id": 1001,
        "author": {
          "id": 201,
          "name": "Rohan Kapoor",
          "username": "rohan-kapoor",
          "profileImage": "https://i.pravatar.cc/150?img=13",
          "headline": "Software Engineer at Amazon"
        },
        "text": "Congratulations! One year already. Time really flies.",
        "createdAt": "2026-09-20T09:10:00Z",
        "likes": 14,
        "isLiked": false
      },
      {
        "id": 1002,
        "author": {
          "id": 202,
          "name": "Ananya Singh",
          "username": "ananya-singh",
          "profileImage": "https://i.pravatar.cc/150?img=32",
          "headline": "Frontend Developer"
        },
        "text": "Congratulations Aarav! Your journey has been inspiring.",
        "createdAt": "2026-09-20T09:25:00Z",
        "likes": 8,
        "isLiked": true
      },
      {
        "id": 1003,
        "author": {
          "id": 203,
          "name": "Arjun Bhatia",
          "username": "arjun-bhatia",
          "profileImage": "https://i.pravatar.cc/150?img=52",
          "headline": "Backend Engineer"
        },
        "text": "What was the biggest lesson you learned during your first year?",
        "createdAt": "2026-09-20T09:40:00Z",
        "likes": 5,
        "isLiked": false
      }
    ]
  },

  {
    "id": 2,
    "author": {
      "id": 102,
      "name": "Priya Sharma",
      "username": "priya-sharma",
      "profileImage": "https://i.pravatar.cc/150?img=47",
      "headline": "Product Designer | UI/UX | Design Systems",
      "location": "Mumbai, India"
    },
    "content": "A good design is not just about making something beautiful. It is about making complex things feel simple. Here are 5 principles I use whenever I start designing a new product.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1558655146-d09347e92766"
    },
    "hashtags": ["UIDesign", "UXDesign", "DesignSystems"],
    "createdAt": "2026-09-19T16:45:00Z",
    "reactions": {
      "likes": 521,
      "celebrate": 104,
      "support": 63,
      "love": 48
    },
    "shares": 34,
    "isLiked": true,
    "comments": [
      {
        "id": 2001,
        "author": {
          "id": 204,
          "name": "Meera Joshi",
          "username": "meera-joshi",
          "profileImage": "https://i.pravatar.cc/150?img=45",
          "headline": "UX Researcher"
        },
        "text": "The point about reducing cognitive load is especially important.",
        "createdAt": "2026-09-19T17:20:00Z",
        "likes": 22,
        "isLiked": false
      },
      {
        "id": 2002,
        "author": {
          "id": 205,
          "name": "Kabir Anand",
          "username": "kabir-anand",
          "profileImage": "https://i.pravatar.cc/150?img=60",
          "headline": "Product Manager"
        },
        "text": "Great insights. Simplicity is definitely harder than adding more features.",
        "createdAt": "2026-09-19T18:05:00Z",
        "likes": 17,
        "isLiked": true
      },
      {
        "id": 2003,
        "author": {
          "id": 206,
          "name": "Ishita Rao",
          "username": "ishita-rao",
          "profileImage": "https://i.pravatar.cc/150?img=49",
          "headline": "UI Designer"
        },
        "text": "Saving this for my next design review.",
        "createdAt": "2026-09-19T19:12:00Z",
        "likes": 9,
        "isLiked": false
      }
    ]
  },

  {
    "id": 3,
    "author": {
      "id": 103,
      "name": "Rahul Verma",
      "username": "rahul-verma",
      "profileImage": "https://i.pravatar.cc/150?img=33",
      "headline": "Full Stack Developer | React | Node.js",
      "location": "Delhi, India"
    },
    "content": "Spent the weekend building a real-time collaboration feature using WebSockets and Redis. There is something extremely satisfying about seeing data move between multiple clients in real time.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    },
    "hashtags": ["JavaScript", "React", "NodeJS", "WebSockets"],
    "createdAt": "2026-09-19T12:20:00Z",
    "reactions": {
      "likes": 287,
      "celebrate": 53,
      "support": 35,
      "love": 21
    },
    "shares": 15,
    "isLiked": false,
    "comments": [
      {
        "id": 3001,
        "author": {
          "id": 207,
          "name": "Dev Patel",
          "username": "dev-patel",
          "profileImage": "https://i.pravatar.cc/150?img=68",
          "headline": "Software Developer"
        },
        "text": "WebSockets + Redis is such a powerful combination.",
        "createdAt": "2026-09-19T13:00:00Z",
        "likes": 11,
        "isLiked": false
      },
      {
        "id": 3002,
        "author": {
          "id": 208,
          "name": "Simran Kaur",
          "username": "simran-kaur",
          "profileImage": "https://i.pravatar.cc/150?img=29",
          "headline": "Full Stack Engineer"
        },
        "text": "Would love to see how you handled connection failures.",
        "createdAt": "2026-09-19T13:32:00Z",
        "likes": 7,
        "isLiked": false
      }
    ]
  },

  {
    "id": 4,
    "author": {
      "id": 104,
      "name": "Sneha Kapoor",
      "username": "sneha-kapoor",
      "profileImage": "https://i.pravatar.cc/150?img=44",
      "headline": "Data Scientist | Machine Learning | Python",
      "location": "Hyderabad, India"
    },
    "content": "Machine learning reminder: a more complex model does not automatically mean a better model. Start with a strong baseline, understand your data, and only then increase complexity.",
    "media": null,
    "hashtags": ["MachineLearning", "DataScience", "Python", "AI"],
    "createdAt": "2026-09-18T18:10:00Z",
    "reactions": {
      "likes": 634,
      "celebrate": 119,
      "support": 82,
      "love": 37
    },
    "shares": 61,
    "isLiked": false,
    "comments": [
      {
        "id": 4001,
        "author": {
          "id": 209,
          "name": "Nikhil Arora",
          "username": "nikhil-arora",
          "profileImage": "https://i.pravatar.cc/150?img=57",
          "headline": "ML Engineer"
        },
        "text": "Absolutely agree. Strong baselines save so much time.",
        "createdAt": "2026-09-18T18:45:00Z",
        "likes": 32,
        "isLiked": true
      },
      {
        "id": 4002,
        "author": {
          "id": 210,
          "name": "Tanya Shah",
          "username": "tanya-shah",
          "profileImage": "https://i.pravatar.cc/150?img=48",
          "headline": "Data Analyst"
        },
        "text": "This is something beginners often overlook.",
        "createdAt": "2026-09-18T19:10:00Z",
        "likes": 19,
        "isLiked": false
      },
      {
        "id": 4003,
        "author": {
          "id": 211,
          "name": "Aman Khanna",
          "username": "aman-khanna",
          "profileImage": "https://i.pravatar.cc/150?img=51",
          "headline": "AI Researcher"
        },
        "text": "Model complexity should solve a real problem, not just make the architecture diagram look impressive.",
        "createdAt": "2026-09-18T20:02:00Z",
        "likes": 27,
        "isLiked": false
      }
    ]
  },

  {
    "id": 5,
    "author": {
      "id": 105,
      "name": "Karan Singh",
      "username": "karan-singh",
      "profileImage": "https://i.pravatar.cc/150?img=68",
      "headline": "Engineering Manager | Cloud Architecture",
      "location": "Pune, India"
    },
    "content": "Leadership lesson I learned the hard way: your job as a manager is not to have all the answers. Your job is to create an environment where your team can find the answers.",
    "media": null,
    "hashtags": ["Leadership", "Management", "Engineering"],
    "createdAt": "2026-09-18T11:00:00Z",
    "reactions": {
      "likes": 412,
      "celebrate": 97,
      "support": 76,
      "love": 32
    },
    "shares": 28,
    "isLiked": true,
    "comments": [
      {
        "id": 5001,
        "author": {
          "id": 212,
          "name": "Ritika Jain",
          "username": "ritika-jain",
          "profileImage": "https://i.pravatar.cc/150?img=31",
          "headline": "Engineering Lead"
        },
        "text": "This is one of the biggest transitions when moving into management.",
        "createdAt": "2026-09-18T12:10:00Z",
        "likes": 24,
        "isLiked": false
      },
      {
        "id": 5002,
        "author": {
          "id": 213,
          "name": "Aditya Rao",
          "username": "aditya-rao",
          "profileImage": "https://i.pravatar.cc/150?img=15",
          "headline": "Senior Software Engineer"
        },
        "text": "Good managers create more leaders instead of more dependencies.",
        "createdAt": "2026-09-18T13:20:00Z",
        "likes": 18,
        "isLiked": true
      }
    ]
  },

  {
    "id": 6,
    "author": {
      "id": 106,
      "name": "Neha Gupta",
      "username": "neha-gupta",
      "profileImage": "https://i.pravatar.cc/150?img=25",
      "headline": "Frontend Developer | Next.js | TypeScript",
      "location": "Chandigarh, India"
    },
    "content": "Finally migrated one of our production applications from JavaScript to TypeScript. The initial effort was significant, but catching errors during development instead of production has already made it worth it.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
    },
    "hashtags": ["TypeScript", "NextJS", "Frontend", "WebDevelopment"],
    "createdAt": "2026-09-17T15:35:00Z",
    "reactions": {
      "likes": 298,
      "celebrate": 64,
      "support": 31,
      "love": 18
    },
    "shares": 17,
    "isLiked": false,
    "comments": [
      {
        "id": 6001,
        "author": {
          "id": 214,
          "name": "Yash Malhotra",
          "username": "yash-malhotra",
          "profileImage": "https://i.pravatar.cc/150?img=14",
          "headline": "React Developer"
        },
        "text": "TypeScript migration can be painful initially, but absolutely worth it.",
        "createdAt": "2026-09-17T16:05:00Z",
        "likes": 16,
        "isLiked": false
      },
      {
        "id": 6002,
        "author": {
          "id": 215,
          "name": "Pooja Nair",
          "username": "pooja-nair",
          "profileImage": "https://i.pravatar.cc/150?img=36",
          "headline": "Frontend Engineer"
        },
        "text": "How long did the migration take?",
        "createdAt": "2026-09-17T16:40:00Z",
        "likes": 4,
        "isLiked": false
      }
    ]
  },

  {
    "id": 7,
    "author": {
      "id": 107,
      "name": "Vikram Malhotra",
      "username": "vikram-malhotra",
      "profileImage": "https://i.pravatar.cc/150?img=11",
      "headline": "Founder & CEO at BuildStack",
      "location": "Gurugram, India"
    },
    "content": "After 8 months of building quietly, we are finally launching BuildStack. It started as a weekend project and has now grown into a team of 12 people. Extremely proud of what we have built together.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1556761175-b413da4baf72"
    },
    "hashtags": ["Startup", "Entrepreneurship", "ProductLaunch"],
    "createdAt": "2026-09-17T09:15:00Z",
    "reactions": {
      "likes": 843,
      "celebrate": 214,
      "support": 97,
      "love": 81
    },
    "shares": 72,
    "isLiked": true,
    "comments": [
      {
        "id": 7001,
        "author": {
          "id": 216,
          "name": "Manav Gupta",
          "username": "manav-gupta",
          "profileImage": "https://i.pravatar.cc/150?img=59",
          "headline": "Startup Advisor"
        },
        "text": "Congratulations to the entire team! Huge milestone.",
        "createdAt": "2026-09-17T10:00:00Z",
        "likes": 41,
        "isLiked": true
      },
      {
        "id": 7002,
        "author": {
          "id": 217,
          "name": "Simran Kaur",
          "username": "simran-kaur",
          "profileImage": "https://i.pravatar.cc/150?img=29",
          "headline": "Product Manager"
        },
        "text": "Eight months of work finally paying off. Congratulations!",
        "createdAt": "2026-09-17T10:25:00Z",
        "likes": 29,
        "isLiked": false
      },
      {
        "id": 7003,
        "author": {
          "id": 218,
          "name": "Rohit Mehra",
          "username": "rohit-mehra",
          "profileImage": "https://i.pravatar.cc/150?img=70",
          "headline": "Angel Investor"
        },
        "text": "Looking forward to seeing where BuildStack goes next.",
        "createdAt": "2026-09-17T11:10:00Z",
        "likes": 18,
        "isLiked": false
      }
    ]
  },

  {
    "id": 8,
    "author": {
      "id": 108,
      "name": "Anjali Verma",
      "username": "anjali-verma",
      "profileImage": "https://i.pravatar.cc/150?img=23",
      "headline": "HR Business Partner | Talent Acquisition",
      "location": "Noida, India"
    },
    "content": "Hiring managers: the best candidate is not always the person with the longest resume. Look for curiosity, ownership, communication, and the ability to learn.",
    "media": null,
    "hashtags": ["Hiring", "Recruitment", "Careers"],
    "createdAt": "2026-09-16T14:20:00Z",
    "reactions": {
      "likes": 387,
      "celebrate": 75,
      "support": 92,
      "love": 24
    },
    "shares": 43,
    "isLiked": false,
    "comments": [
      {
        "id": 8001,
        "author": {
          "id": 219,
          "name": "Mohit Sharma",
          "username": "mohit-sharma",
          "profileImage": "https://i.pravatar.cc/150?img=40",
          "headline": "Software Engineer"
        },
        "text": "Completely agree. Skills can be learned, but curiosity is much harder to teach.",
        "createdAt": "2026-09-16T15:00:00Z",
        "likes": 21,
        "isLiked": false
      },
      {
        "id": 8002,
        "author": {
          "id": 220,
          "name": "Aditi Kapoor",
          "username": "aditi-kapoor",
          "profileImage": "https://i.pravatar.cc/150?img=43",
          "headline": "Talent Acquisition Specialist"
        },
        "text": "Great point. Hiring should focus more on potential than keyword matching.",
        "createdAt": "2026-09-16T15:35:00Z",
        "likes": 13,
        "isLiked": true
      }
    ]
  },

  {
    "id": 9,
    "author": {
      "id": 109,
      "name": "Riya Malhotra",
      "username": "riya-malhotra",
      "profileImage": "https://i.pravatar.cc/150?img=5",
      "headline": "Cybersecurity Engineer | Cloud Security",
      "location": "Bengaluru, India"
    },
    "content": "Security is not a feature that you add at the end of development. It needs to be part of the architecture from day one.",
    "media": null,
    "hashtags": ["CyberSecurity", "CloudSecurity", "DevSecOps"],
    "createdAt": "2026-09-16T09:40:00Z",
    "reactions": {
      "likes": 452,
      "celebrate": 83,
      "support": 71,
      "love": 26
    },
    "shares": 37,
    "isLiked": false,
    "comments": [
      {
        "id": 9001,
        "author": {
          "id": 221,
          "name": "Akash Saini",
          "username": "akash-saini",
          "profileImage": "https://i.pravatar.cc/150?img=61",
          "headline": "DevOps Engineer"
        },
        "text": "Exactly. Retrofitting security is much more expensive.",
        "createdAt": "2026-09-16T10:15:00Z",
        "likes": 15,
        "isLiked": false
      },
      {
        "id": 9002,
        "author": {
          "id": 222,
          "name": "Naina Sharma",
          "username": "naina-sharma",
          "profileImage": "https://i.pravatar.cc/150?img=20",
          "headline": "Security Analyst"
        },
        "text": "Threat modeling early in the development cycle makes a huge difference.",
        "createdAt": "2026-09-16T11:05:00Z",
        "likes": 12,
        "isLiked": false
      }
    ]
  },

  {
    "id": 10,
    "author": {
      "id": 110,
      "name": "Aditya Kapoor",
      "username": "aditya-kapoor",
      "profileImage": "https://i.pravatar.cc/150?img=8",
      "headline": "Mobile App Developer | React Native | Flutter",
      "location": "Jaipur, India"
    },
    "content": "Released a new version of our mobile application today. Performance improved by 38% after optimizing image loading and reducing unnecessary renders.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
    },
    "hashtags": ["ReactNative", "MobileDevelopment", "Performance"],
    "createdAt": "2026-09-15T17:30:00Z",
    "reactions": {
      "likes": 326,
      "celebrate": 91,
      "support": 45,
      "love": 33
    },
    "shares": 22,
    "isLiked": true,
    "comments": [
      {
        "id": 10001,
        "author": {
          "id": 223,
          "name": "Varun Jain",
          "username": "varun-jain",
          "profileImage": "https://i.pravatar.cc/150?img=3",
          "headline": "React Native Developer"
        },
        "text": "38% is a massive improvement. Nice work!",
        "createdAt": "2026-09-15T18:00:00Z",
        "likes": 20,
        "isLiked": true
      },
      {
        "id": 10002,
        "author": {
          "id": 224,
          "name": "Kriti Arora",
          "username": "kriti-arora",
          "profileImage": "https://i.pravatar.cc/150?img=16",
          "headline": "Mobile Engineer"
        },
        "text": "Image optimization can make such a huge difference on mobile.",
        "createdAt": "2026-09-15T18:40:00Z",
        "likes": 11,
        "isLiked": false
      }
    ]
  },

  {
    "id": 11,
    "author": {
      "id": 111,
      "name": "Manish Tiwari",
      "username": "manish-tiwari",
      "profileImage": "https://i.pravatar.cc/150?img=67",
      "headline": "Cloud Engineer | AWS | Kubernetes",
      "location": "Kolkata, India"
    },
    "content": "Infrastructure as code completely changed how I think about deployments. Once your infrastructure becomes reproducible, debugging production environments becomes much easier.",
    "media": null,
    "hashtags": ["AWS", "Kubernetes", "DevOps", "Cloud"],
    "createdAt": "2026-09-15T11:25:00Z",
    "reactions": {
      "likes": 278,
      "celebrate": 52,
      "support": 43,
      "love": 17
    },
    "shares": 19,
    "isLiked": false,
    "comments": [
      {
        "id": 11001,
        "author": {
          "id": 225,
          "name": "Harsh Vardhan",
          "username": "harsh-vardhan",
          "profileImage": "https://i.pravatar.cc/150?img=69",
          "headline": "DevOps Engineer"
        },
        "text": "Terraform made deployments much more predictable for our team.",
        "createdAt": "2026-09-15T12:00:00Z",
        "likes": 14,
        "isLiked": false
      },
      {
        "id": 11002,
        "author": {
          "id": 226,
          "name": "Shreya Patel",
          "username": "shreya-patel",
          "profileImage": "https://i.pravatar.cc/150?img=30",
          "headline": "Cloud Architect"
        },
        "text": "Reproducibility is one of the biggest benefits of IaC.",
        "createdAt": "2026-09-15T12:35:00Z",
        "likes": 9,
        "isLiked": true
      }
    ]
  },

  {
    "id": 12,
    "author": {
      "id": 112,
      "name": "Pooja Mehta",
      "username": "pooja-mehta",
      "profileImage": "https://i.pravatar.cc/150?img=38",
      "headline": "Marketing Manager | Growth | SaaS",
      "location": "Mumbai, India"
    },
    "content": "One thing I learned from working on SaaS products: growth is not just about acquiring more users. Retaining the right users is where sustainable growth comes from.",
    "media": null,
    "hashtags": ["Growth", "SaaS", "Marketing", "Product"],
    "createdAt": "2026-09-14T16:10:00Z",
    "reactions": {
      "likes": 341,
      "celebrate": 69,
      "support": 54,
      "love": 22
    },
    "shares": 31,
    "isLiked": false,
    "comments": [
      {
        "id": 12001,
        "author": {
          "id": 227,
          "name": "Ravi Kumar",
          "username": "ravi-kumar",
          "profileImage": "https://i.pravatar.cc/150?img=53",
          "headline": "Growth Product Manager"
        },
        "text": "Retention is definitely the metric most teams underestimate.",
        "createdAt": "2026-09-14T17:00:00Z",
        "likes": 18,
        "isLiked": false
      },
      {
        "id": 12002,
        "author": {
          "id": 228,
          "name": "Divya Shah",
          "username": "divya-shah",
          "profileImage": "https://i.pravatar.cc/150?img=41",
          "headline": "Product Marketing Manager"
        },
        "text": "Acquisition without retention is just filling a leaky bucket.",
        "createdAt": "2026-09-14T17:45:00Z",
        "likes": 25,
        "isLiked": true
      }
    ]
  },

  {
    "id": 13,
    "author": {
      "id": 113,
      "name": "Sahil Arora",
      "username": "sahil-arora",
      "profileImage": "https://i.pravatar.cc/150?img=65",
      "headline": "Software Architect | Distributed Systems",
      "location": "Bengaluru, India"
    },
    "content": "Distributed systems teach you one important lesson: everything that can fail eventually will. Good architecture is about designing for failure instead of pretending it does not exist.",
    "media": null,
    "hashtags": ["DistributedSystems", "Architecture", "Backend"],
    "createdAt": "2026-09-14T10:05:00Z",
    "reactions": {
      "likes": 573,
      "celebrate": 121,
      "support": 66,
      "love": 34
    },
    "shares": 48,
    "isLiked": true,
    "comments": [
      {
        "id": 13001,
        "author": {
          "id": 229,
          "name": "Rohan Mehta",
          "username": "rohan-mehta",
          "profileImage": "https://i.pravatar.cc/150?img=18",
          "headline": "Backend Engineer"
        },
        "text": "Failure handling should definitely be considered during system design.",
        "createdAt": "2026-09-14T10:50:00Z",
        "likes": 26,
        "isLiked": false
      },
      {
        "id": 13002,
        "author": {
          "id": 230,
          "name": "Isha Kapoor",
          "username": "isha-kapoor",
          "profileImage": "https://i.pravatar.cc/150?img=27",
          "headline": "Platform Engineer"
        },
        "text": "Distributed systems are basically a collection of creative ways for things to break.",
        "createdAt": "2026-09-14T11:30:00Z",
        "likes": 31,
        "isLiked": true
      }
    ]
  },

  {
    "id": 14,
    "author": {
      "id": 114,
      "name": "Tanvi Sharma",
      "username": "tanvi-sharma",
      "profileImage": "https://i.pravatar.cc/150?img=42",
      "headline": "Technical Writer | Developer Advocate",
      "location": "Chennai, India"
    },
    "content": "Documentation is an underrated engineering skill. A feature that nobody understands is almost as problematic as a feature that does not exist.",
    "media": null,
    "hashtags": ["TechnicalWriting", "DeveloperExperience", "Documentation"],
    "createdAt": "2026-09-13T15:45:00Z",
    "reactions": {
      "likes": 265,
      "celebrate": 48,
      "support": 61,
      "love": 19
    },
    "shares": 26,
    "isLiked": false,
    "comments": [
      {
        "id": 14001,
        "author": {
          "id": 231,
          "name": "Aakash Verma",
          "username": "aakash-verma",
          "profileImage": "https://i.pravatar.cc/150?img=64",
          "headline": "Developer Advocate"
        },
        "text": "Good documentation saves hours of repeated questions.",
        "createdAt": "2026-09-13T16:20:00Z",
        "likes": 17,
        "isLiked": false
      },
      {
        "id": 14002,
        "author": {
          "id": 232,
          "name": "Maya Singh",
          "username": "maya-singh",
          "profileImage": "https://i.pravatar.cc/150?img=35",
          "headline": "Software Engineer"
        },
        "text": "Documentation should be treated as part of the product, not an afterthought.",
        "createdAt": "2026-09-13T17:05:00Z",
        "likes": 12,
        "isLiked": false
      }
    ]
  },

  {
    "id": 15,
    "author": {
      "id": 115,
      "name": "Rajat Khanna",
      "username": "rajat-khanna",
      "profileImage": "https://i.pravatar.cc/150?img=66",
      "headline": "Computer Science Student | Open Source Contributor",
      "location": "Punjab, India"
    },
    "content": "Contributed my first meaningful pull request to an open-source project today. It may look like a small contribution, but it taught me a lot about reading unfamiliar codebases and collaborating with maintainers.",
    "media": {
      "type": "image",
      "url": "https://images.unsplash.com/photo-1556075798-4825dfaaf498"
    },
    "hashtags": ["OpenSource", "GitHub", "Programming", "Learning"],
    "createdAt": "2026-09-13T09:30:00Z",
    "reactions": {
      "likes": 394,
      "celebrate": 88,
      "support": 73,
      "love": 28
    },
    "shares": 35,
    "isLiked": false,
    "comments": [
      {
        "id": 15001,
        "author": {
          "id": 233,
          "name": "Kunal Sharma",
          "username": "kunal-sharma",
          "profileImage": "https://i.pravatar.cc/150?img=54",
          "headline": "Open Source Maintainer"
        },
        "text": "Congratulations! The first PR is always special.",
        "createdAt": "2026-09-13T10:15:00Z",
        "likes": 23,
        "isLiked": true
      },
      {
        "id": 15002,
        "author": {
          "id": 234,
          "name": "Harpreet Singh",
          "username": "harpreet-singh",
          "profileImage": "https://i.pravatar.cc/150?img=58",
          "headline": "Software Developer"
        },
        "text": "Open source is one of the best ways to learn how real-world projects work.",
        "createdAt": "2026-09-13T11:00:00Z",
        "likes": 15,
        "isLiked": false
      },
      {
        "id": 15003,
        "author": {
          "id": 235,
          "name": "Naman Gupta",
          "username": "naman-gupta",
          "profileImage": "https://i.pravatar.cc/150?img=56",
          "headline": "Computer Science Student"
        },
        "text": "This is motivating me to finally make my first contribution.",
        "createdAt": "2026-09-13T11:45:00Z",
        "likes": 7,
        "isLiked": false
      }
    ]
  }
]