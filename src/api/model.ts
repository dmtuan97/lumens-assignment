export type ExclusiveOffer = {
  id: string;
  content: string;
  thumbnail: string;
  cost: number;
  unit: string;
};

export type ExclusiveOfferCollection = {
  title: string;
  data: ExclusiveOffer[];
};

export type CurrentTierInfo = {
  tierName: string;
  paidRentalFee: string;
  coinBalance: number;
  maxBalance: number;
  incentive: {
    gain: string;
    cost: string;
  };
  nextTier?: {
    name: string;
    payMore: string;
  };
  lastUpdated: string;
};
