export interface Game {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  enabled: boolean;
  label: string;
}

export interface Games {
  [id: string]: Game;
}
