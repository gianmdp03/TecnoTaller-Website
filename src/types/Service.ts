export type Service = {
  id: number;
  name: string;
  category: "HARDWARE" | "SOFTWARE" | "REMOTE";
  description: string;
  imageUrl?: string;
  available: boolean;
};
