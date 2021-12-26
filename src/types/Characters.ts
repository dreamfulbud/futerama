export interface Characters {
  name: {
    first: string,
    middle: string,
    last: string,
  },
  images: {
    'head-shot': string,
    main: string,
  },
  gender: string,
  species: string,
  homePlanet: string,
  occupation: string,
  sayings: [string],
  id: number,
  age: string,
}