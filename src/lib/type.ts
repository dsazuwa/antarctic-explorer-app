export type SearchParams = Record<string, string> | undefined;

export type TCruiseLine = {
  id: number;
  name: string;
  logo: string;
};

type BaseExpedition = {
  id: number;
  name: string;
  duration: string;
  startDate: string | null;
  startingPrice: number | null;
  photoUrl: string;
};

export type TExpedition = BaseExpedition & {
  cruiseLine: TCruiseLine;
};

export type TGallery = {
  alt: string | null;
  url: string;
};

export type TSchedule = {
  day: string;
  header: string;
  content: string[];
};

export type TItinerary = {
  id: number;
  name: string;
  startPort: string;
  endPort: string;
  duration: string;
  mapUrl: string;
  schedules: TSchedule[];
};

export type TVessel = {
  id: number;
  name: string;
  description: string[];
  capacity: number;
  cabins: number;
  photoUrl: string;
  website: string;
};

export type TDeparture = {
  id: number;
  expeditionId: number;
  name: string;
  itinerary: string;
  vessel: string;
  departingFrom: string | null;
  arrivingAt: string | null;
  duration: string;
  startDate: string;
  endDate: string;
  startingPrice: number;
  discountedPrice: number | null;
  website: string;
};

export type TExtension = {
  name: string;
  startingPrice: number | null;
  duration: number | null;
  photoUrl: string;
  website: string | null;
};

export type ExpeditionsResponse = {
  expeditions: TExpedition[];
  size: number;
  totalItems: number;
  totalPages: number;
  page: number;
};

export type ExpeditionResponse = {
  id: number;
  name: string;
  description: string[];
  highlights: string[];
  duration: string;
  startingPrice: number | null;
  photoUrl: string;
  website: string;
  cruiseLine: TCruiseLine;
  gallery: TGallery[];
  vessels: TVessel[];
  itineraries: TItinerary[];
  departures: { startDate: Date; endDate: Date }[];
  extensions: TExtension[];
  otherExpeditions: BaseExpedition[];
};

export type DeparturesResponse = {
  departures: TDeparture[];
  size: number;
  totalItems: number;
  totalPages: number;
  page: number;
};

export type MainResponse = {
  expeditions: ExpeditionsResponse;
  cruiseLines: string[];
};

export type BasicFilterOption = { displayText: string };

export type RangedFilterOption =
  | {
      displayText: string;
      min: number;
      max: number;
    }
  | {
      displayText: string;
      min: number;
    };

export type ExpeditionSortType = {
  displayText: string;
  sort: 'cruiseLine' | 'name' | 'startDate' | 'price';
  order: 'asc' | 'desc';
};

export type DepartureSortType = {
  displayText: string;
  sort: 'startDate' | 'price';
  order: 'asc' | 'desc';
};

export type SortType = ExpeditionSortType | DepartureSortType;
