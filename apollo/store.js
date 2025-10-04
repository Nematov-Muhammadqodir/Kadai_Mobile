import { makeVar } from "@apollo/client";

export const themeVar = makeVar({});

export const userVar = makeVar({
  _id: "",
  memberType: "",
  memberStatus: "",
  memberAuthType: "",
  memberPhone: "",
  memberNick: "",
  memberFullName: "",
  memberImage: "",
  memberAddress: "",
  memberDesc: "",
  memberProducts: 0,
  newProductAmount: 0,
  memberRank: 0,
  memberArticles: 0,
  memberPoints: 0,
  memberLikes: 0,
  memberViews: 0,
  memberWarnings: 0,
  memberBlocks: 0,
});
