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
