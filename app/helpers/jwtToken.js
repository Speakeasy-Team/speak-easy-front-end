export function setToken(token) {
  window.localStorage.setItem("jwt", token);
}

export function getToken() {
  return window.localStorage.getItem("jwt");
}
