export type Item = {
  raw: string;
  html: string;
  id: string;
  updatedAt: number;
};

export type State = {
  wordCount: number;
  raw: string;
  html: string;
  outline: Array<any>;
  showPreview: boolean;
  toolMode: "preview" | "outline" | "help";
};
