// 32:00 Copy Task.ts from author
export interface Task {
  id?: number;
  text: string;
  day: string;
  // add description
  description: string;
  // add location
  location: string;
  reminder: boolean;
}
