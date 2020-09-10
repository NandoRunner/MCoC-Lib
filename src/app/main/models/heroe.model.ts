import { Hashtag } from './hashtag.model';

export interface Heroe {
  id: string;
  name: string;
  heroeClass: string;
  infoPage: string;
  isactive: boolean;
  h: Hashtag[];
}

