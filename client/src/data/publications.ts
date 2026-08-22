export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  abstract?: string;
  area: string;
};

// Add publicly released work here. Cards will appear automatically when this array has entries.
export const publications: Publication[] = [];
