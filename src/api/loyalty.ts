import { MOCK_CURRENT_TIER, MOCK_DATA_EXCLUSIVE_OFFER } from '../mocks';

const fakeCall = async (time = 3000) => {
  // @ts-ignore
  return await new Promise(resolve => setTimeout(resolve, time));
};

export const getCurrentTier = async () => {
  await fakeCall(2000);
  return Promise.resolve(MOCK_CURRENT_TIER);
};

export const getDataExclusive = async () => {
  await fakeCall(2000);
  return Promise.resolve(MOCK_DATA_EXCLUSIVE_OFFER);
};
