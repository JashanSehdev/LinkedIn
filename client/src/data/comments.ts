import type { Comment, User } from "@/types/feed";


export const postComments: Comment[] = [
  {
    id: 101,
    author: {
      id: 201,
      name: "Bipul Sharma",
      username: "bipul-sharma",
      profileImage: "https://i.pravatar.cc/150?img=12",
      headline:
        "LinkedIn Personal Brand Partner for B2B & SaaS Founders | I Handle the ..."
    },
    text: "Real talk and raw stories work best. Gen Z sees right through polished corporate spin.",
    createdAt: "2026-09-13T10:00:00Z",
    likes: 7,
    isLiked: false,
    replies: []
  },

  {
    id: 102,
    author: {
      id: 202,
      name: "Divyanshi Vishwakarma",
      username: "divyanshi-vishwakarma",
      profileImage: "https://i.pravatar.cc/150?img=47",
      headline:
        "Founder Relations | Strategic Partnerships & International Growth | The ..."
    },
    text: "Expert voices can create initial credibility, but trust compounds when that message is reinforced throughout the buying journey. The stronger advantage comes when thought leadership, peer validation, and the company’s own proof all tell the same story as buyers move from awareness to evaluation.",
    createdAt: "2026-09-13T11:00:00Z",
    likes: 11,
    isLiked: false,

    replies: [
      {
        id: 103,
        author: {
          id: 203,
          name: "Agboola Aliyyah",
          username: "agboola-aliyyah",
          profileImage: "https://i.pravatar.cc/150?img=32",
          headline:
            "Business & Operations Strategist for B2B Companies|| Connectin..."
        },
        text: "Divyanshi Vishwakarma This!! 📌",
        createdAt: "2026-09-16T09:00:00Z",
        likes: 2,
        isLiked: false,
        replies: []
      }
    ]
  }
];

const users: User[] = [
  {
    id: 201,
    name: "Bipul Sharma",
    username: "bipul-sharma",
    profileImage: "https://i.pravatar.cc/150?img=12",
    headline: "LinkedIn Personal Brand Partner for B2B & SaaS Founders"
  },
  {
    id: 202,
    name: "Divyanshi Vishwakarma",
    username: "divyanshi-vishwakarma",
    profileImage: "https://i.pravatar.cc/150?img=47",
    headline: "Founder Relations | Strategic Partnerships & International Growth"
  },
  {
    id: 203,
    name: "Agboola Aliyyah",
    username: "agboola-aliyyah",
    profileImage: "https://i.pravatar.cc/150?img=32",
    headline: "Business & Operations Strategist for B2B Companies"
  },
  {
    id: 204,
    name: "Rohan Kapoor",
    username: "rohan-kapoor",
    profileImage: "https://i.pravatar.cc/150?img=13",
    headline: "Software Engineer at Amazon"
  },
  {
    id: 205,
    name: "Ananya Singh",
    username: "ananya-singh",
    profileImage: "https://i.pravatar.cc/150?img=44",
    headline: "Frontend Developer"
  },
  {
    id: 206,
    name: "Arjun Bhatia",
    username: "arjun-bhatia",
    profileImage: "https://i.pravatar.cc/150?img=52",
    headline: "Backend Engineer"
  }
];

export const comments: Comment[] = [
  {
    id: 1,
    author: users[0],
    text: "Real talk and raw stories work best. Gen Z sees right through polished corporate spin.",
    createdAt: "2026-09-13T10:00:00Z",
    likes: 7,
    isLiked: false,
    replies: []
  },

  {
    id: 2,
    author: users[1],
    text: "Expert voices can create initial credibility, but trust compounds when that message is reinforced throughout the buying journey.",
    createdAt: "2026-09-13T11:00:00Z",
    likes: 11,
    isLiked: false,

    replies: [
      {
        id: 3,
        author: users[2],
        text: "Divyanshi Vishwakarma This!! 📌",
        createdAt: "2026-09-16T09:00:00Z",
        likes: 2,
        isLiked: false,
        replies: []
      }
    ]
  },

  {
    id: 4,
    author: users[3],
    text: "Congratulations! One year already. Time really flies.",
    createdAt: "2026-09-14T08:30:00Z",
    likes: 14,
    isLiked: false,
    replies: [
      {
        id: 5,
        author: users[4],
        text: "Absolutely. The first year teaches you more than any course can.",
        createdAt: "2026-09-14T09:10:00Z",
        likes: 4,
        isLiked: true,
        replies: []
      }
    ]
  },

  {
    id: 6,
    author: users[5],
    text: "Would love to see how you handled connection failures.",
    createdAt: "2026-09-15T13:32:00Z",
    likes: 7,
    isLiked: false,
    replies: []
  }
];