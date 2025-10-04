import decodeJWT from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApollo } from "../../apollo/client";
import { LOGIN, SIGN_UP } from "../../apollo/user/mutation";
import { userVar } from "../../apollo/store";

// ------------------------
// TOKEN HELPERS
// ------------------------
export const getJwtToken = async () => {
  return (await AsyncStorage.getItem("accessToken")) || "";
};

export const setJwtToken = async (token) => {
  await AsyncStorage.setItem("accessToken", token);
};

const deleteStorage = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.setItem("logout", Date.now().toString());
};

// ------------------------
// LOGIN
// ------------------------
export const logIn = async (nick, password) => {
  try {
    const { jwtToken } = await requestJwtToken({ nick, password });
    if (jwtToken) {
      await updateStorage({ jwtToken });
      updateUserInfo(jwtToken);
    }
  } catch (err) {
    console.warn("login err", err);
    await logOut();
    throw new Error("Login Err");
  }
};

const requestJwtToken = async ({ nick, password }) => {
  const apolloClient = initializeApollo();

  try {
    const result = await apolloClient.mutate({
      mutation: LOGIN,
      variables: { input: { memberNick: nick, memberPassword: password } },
      fetchPolicy: "network-only",
    });

    const { accessToken } = result?.data?.login;
    return { jwtToken: accessToken };
  } catch (err) {
    console.log("request token err", err.graphQLErrors);
    const msg = err.graphQLErrors?.[0]?.message;

    if (msg === "Definer: login and password do not match") {
    } else if (msg === "Definer: user has been blocked!") {
    }

    throw new Error("token error");
  }
};

// ------------------------
// SIGN UP
// ------------------------
export const signUp = async (nick, password, phone, type) => {
  try {
    const { jwtToken } = await requestSignUpJwtToken({
      nick,
      password,
      phone,
      type,
    });
    if (jwtToken) {
      await updateStorage({ jwtToken });
      updateUserInfo(jwtToken);
    }
  } catch (err) {
    console.warn("signup err", err);
    await logOut();
    throw new Error("Signup Err");
  }
};

const requestSignUpJwtToken = async ({ nick, password, phone, type }) => {
  const apolloClient = initializeApollo();

  try {
    const result = await apolloClient.mutate({
      mutation: SIGN_UP,
      variables: {
        input: {
          memberNick: nick,
          memberPassword: password,
          memberPhone: phone,
          memberType: type,
        },
      },
      fetchPolicy: "network-only",
    });

    const { accessToken } = result?.data?.signup;
    return { jwtToken: accessToken };
  } catch (err) {
    console.log("request signup token err", err.graphQLErrors);
    const msg = err.graphQLErrors?.[0]?.message;

    if (msg === "Definer: login and password do not match") {
    } else if (msg === "Definer: user has been blocked!") {
    }

    throw new Error("token error");
  }
};

// ------------------------
// UPDATE USER STATE
// ------------------------
export const updateStorage = async ({ jwtToken }) => {
  await setJwtToken(jwtToken);
  await AsyncStorage.setItem("login", Date.now().toString());
};

export const updateUserInfo = (jwtToken) => {
  if (!jwtToken) return false;

  const claims = decodeJWT(jwtToken);
  console.log("claims", claims);

  userVar({
    _id: claims._id || "",
    memberType: claims.memberType || "",
    memberStatus: claims.memberStatus || "",
    memberAuthType: claims.memberAuthType,
    memberPhone: claims.memberPhone || "",
    memberNick: claims.memberNick || "",
    memberFullName: claims.memberFullName || "",
    memberImage:
      claims.memberImage == null
        ? "/img/profile/defaultImg.jpg"
        : `${claims.memberImage}`,
    memberAddress: claims.memberAddress || "",
    memberDesc: claims.memberDesc || "",
    memberProducts: claims.memberProducts,
    newProductAmount: claims.newProductAmount,
    memberRank: claims.memberRank,
    memberArticles: claims.memberArticles,
    memberPoints: claims.memberPoints,
    memberLikes: claims.memberLikes,
    memberViews: claims.memberViews,
    memberWarnings: claims.memberWarnings,
    memberBlocks: claims.memberBlocks,
  });
};

// ------------------------
// LOGOUT
// ------------------------
export const logOut = async () => {
  await deleteStorage();
  deleteUserInfo();
  // No window.location.reload in React Native
  console.log("User logged out.");
};

const deleteUserInfo = () => {
  userVar({
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
};
