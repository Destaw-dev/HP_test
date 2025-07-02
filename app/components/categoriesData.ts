import { CategoryIconType } from "./types";

export interface Category {
  id: number;
  title: string;
  icon: CategoryIconType;
}

export const categories: Category[] = [
  { id: 1, title: "סופרמרקט", icon: "supermarket" },
  { id: 2, title: "תכשיטים", icon: "diamond" },
  { id: 3, title: "טיפוח", icon: "makeup" },
  { id: 4, title: "אלכוהול", icon: "alcohol" },
  { id: 5, title: "אופנה", icon: "clothes" },
  { id: 6, title: "חופשה", icon: "vacation" },
  { id: 7, title: "פיצה", icon: "pizza" },
  { id: 8, title: "מוניות", icon: "taxi" },
  { id: 9, title: "בעלי חיים", icon: "animals" },
  { id: 10, title: "חדרי כושר", icon: "gym" },
  { id: 11, title: "מסעדות", icon: "restaurant" },
  { id: 12, title: "יועץ", icon: "consultation" },
  { id: 13, title: "סופרמרקט", icon: "supermarket" },
  { id: 23, title: "תכשיטים", icon: "diamond" },
  { id: 33, title: "טיפוח", icon: "makeup" },
  { id: 43, title: "אלכוהול", icon: "alcohol" },
  { id: 53, title: "אופנה", icon: "clothes" },
  { id: 63, title: "חופשה", icon: "vacation" },
  { id: 73, title: "פיצה", icon: "pizza" },
  { id: 83, title: "מוניות", icon: "taxi" },
  { id: 93, title: "בעלי חיים", icon: "animals" },
  { id: 103, title: "חדרי כושר", icon: "gym" },
  { id: 113, title: "מסעדות", icon: "restaurant" },
  { id: 123, title: "יועץ", icon: "consultation" },
];
