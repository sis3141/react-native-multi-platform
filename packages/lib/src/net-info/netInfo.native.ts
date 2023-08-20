import NetInfo from "@react-native-community/netinfo";

export const initNetCheck = () => {
  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject("timeout!");
    }, 500);
  });

  const netCheck = new Promise((resolve, reject) => {
    NetInfo.fetch().then(async (netState) => {
      if (netState.isInternetReachable) {
        resolve(netState);
      } else {
        reject(netState);
      }
    });
  });

  const result = Promise.race([netCheck, timeout])
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log("error ", err);
      return false;
    });
  return result;
};
