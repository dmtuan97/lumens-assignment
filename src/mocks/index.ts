import { CurrentTierInfo, ExclusiveOfferCollection } from '../api/model';

export const MOCK_DATA_EXCLUSIVE_OFFER: ExclusiveOfferCollection[] = [
  {
    title: 'Petrol',
    data: [
      {
        id: 'petrol_1',
        content: '50% discount for every $100 top-up on your Shell Petrol Card',
        thumbnail: 'https://i.imgur.com/vHEp947.png',
        cost: 15,
        unit: 'Coins',
      },
      {
        id: 'petrol_2',
        content: '70% discount top-up on your Shell Petrol Card',
        thumbnail: 'https://i.imgur.com/vHEp947.png',
        cost: 1000,
        unit: 'Coins',
      },
    ],
  },
  {
    title: 'Rental Rebate',
    data: [
      {
        id: 'rental_rebate_1',
        content: 'Get $20 Rental rebate',
        thumbnail: 'https://i.imgur.com/307G7eg.png',
        cost: 20,
        unit: 'Coins',
      },
      {
        id: 'rental_rebate_2',
        content: '70% discount top-up on your Shell Petrol Card',
        thumbnail: 'https://i.imgur.com/307G7eg.png',
        cost: 15,
        unit: 'Coins',
      },
    ],
  },
  {
    title: 'Food and Beverage',
    data: [
      {
        id: 'food_beverage_1',
        content: 'NTUC Fairprice $50 Voucher',
        thumbnail: 'https://i.imgur.com/ra54HDT.png',
        cost: 25,
        unit: 'Coins',
      },
      {
        id: 'food_beverage_2',
        content: 'Free Cold Stone Sundae at any flavour!',
        thumbnail: 'https://i.imgur.com/ra54HDT.png',
        cost: 5,
        unit: 'Coins',
      },
    ],
  },
];

export const MOCK_CURRENT_TIER: CurrentTierInfo = {
  tierName: 'Silver Tier',
  paidRentalFee: '$1,200',
  incentive: {
    gain: '2 coins',
    cost: '$1',
  },
  coinBalance: 340,
  maxBalance: 1000,
  nextTier: {
    name: 'Gold Tier',
    payMore: '$800',
  },
  lastUpdated: '2022-04-14',
};
