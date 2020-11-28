import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectEntireShop = createSelector(shopSelector, (shop) => shop);
export const selectShop = createSelector(shopSelector, (shop) =>
  Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (urlParam) =>
  createSelector(selectEntireShop, (shop) => shop[urlParam]);
