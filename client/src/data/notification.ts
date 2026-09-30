export type NotificationCategory =
  | "jobs"
  | "my-posts"
  | "mentions";

export interface Notification {
  id: number;
  category: NotificationCategory;
  type: "comment" | "like" | "mention" | "job";
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
  targetUser?: string;
  postTitle?: string;
  message: string;
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  // =========================
  // MY POSTS
  // =========================

  {
    id: 1,
    category: "my-posts",
    type: "comment",
    user: {
      id: 101,
      name: "Hardik Sharma",
      profileImage:
        "https://randomuser.me/api/portraits/men/32.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "My journey as a Software Engineer",
    message: "commented on your post",
    time: "7m",
    read: false
  },

  {
    id: 2,
    category: "my-posts",
    type: "like",
    user: {
      id: 102,
      name: "Priya Sharma",
      profileImage:
        "https://randomuser.me/api/portraits/women/44.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Building applications with Next.js",
    message: "liked your post",
    time: "15m",
    read: false
  },

  {
    id: 3,
    category: "my-posts",
    type: "comment",
    user: {
      id: 103,
      name: "Rahul Mehta",
      profileImage:
        "https://randomuser.me/api/portraits/men/45.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Learning TypeScript",
    message: "commented on your post",
    time: "32m",
    read: true
  },

  {
    id: 4,
    category: "my-posts",
    type: "like",
    user: {
      id: 104,
      name: "Ananya Kapoor",
      profileImage:
        "https://randomuser.me/api/portraits/women/65.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Frontend Development Tips",
    message: "liked your post",
    time: "1h",
    read: true
  },

  // =========================
  // MENTIONS
  // =========================

  {
    id: 5,
    category: "mentions",
    type: "mention",
    user: {
      id: 105,
      name: "Arjun Singh",
      profileImage:
        "https://randomuser.me/api/portraits/men/52.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Developers building amazing projects",
    message: "mentioned you in a post",
    time: "1h",
    read: false
  },

  {
    id: 6,
    category: "mentions",
    type: "mention",
    user: {
      id: 106,
      name: "Simran Kaur",
      profileImage:
        "https://randomuser.me/api/portraits/women/48.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Best React projects this year",
    message: "mentioned you in a comment",
    time: "2h",
    read: false
  },

  {
    id: 7,
    category: "mentions",
    type: "mention",
    user: {
      id: 107,
      name: "Karan Malhotra",
      profileImage:
        "https://randomuser.me/api/portraits/men/61.jpg"
    },
    targetUser: "Jashan Sehdev",
    postTitle: "Hackathon Experience",
    message: "mentioned you in a post",
    time: "3h",
    read: true
  },

  // =========================
  // JOBS
  // =========================

  {
    id: 8,
    category: "jobs",
    type: "job",
    user: {
      id: 108,
      name: "Flipkart",
      profileImage:
        "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128"
    },
    postTitle: "Software Engineer",
    message: "posted a new job matching your profile",
    time: "4h",
    read: false
  },

  {
    id: 9,
    category: "jobs",
    type: "job",
    user: {
      id: 109,
      name: "Microsoft",
      profileImage:
        "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
    },
    postTitle: "Frontend Software Engineer",
    message: "posted a new job opportunity",
    time: "5h",
    read: true
  },

  {
    id: 10,
    category: "jobs",
    type: "job",
    user: {
      id: 110,
      name: "Amazon",
      profileImage:
        "https://www.google.com/s2/favicons?domain=amazon.com&sz=128"
    },
    postTitle: "Software Development Engineer",
    message: "posted a new job matching your skills",
    time: "6h",
    read: true
  },

  {
    id: 11,
    category: "jobs",
    type: "job",
    user: {
      id: 111,
      name: "Google",
      profileImage:
        "https://www.google.com/s2/favicons?domain=google.com&sz=128"
    },
    postTitle: "Software Engineer",
    message: "posted a new job opportunity",
    time: "1d",
    read: true
  },

  {
    id: 12,
    category: "jobs",
    type: "job",
    user: {
      id: 112,
      name: "Adobe",
      profileImage:
        "https://www.google.com/s2/favicons?domain=adobe.com&sz=128"
    },
    postTitle: "Full Stack Developer",
    message: "posted a new job matching your profile",
    time: "1d",
    read: true
  }
];