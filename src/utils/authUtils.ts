export const extractAuthResponse = (url:string) => {
    return url
      .substring(1)
      .split("&")
      .reduce(function(result: { [key: string]: any; }, item) {
        if (item) {
          var parts = item.split("=");
          result[parts[0]] = decodeURIComponent(parts[1]);
        }
        return result;
      }, {});
}

export const getUserFromStorage = ()=> {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return {};
};