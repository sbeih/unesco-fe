export interface IPub {
  title: string;
  subtitle: string;
  cityName: string;
  imageSrc: string;
  href: string;
  citylink: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  pubs: IPub[];
}
