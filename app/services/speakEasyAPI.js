export const speakEasyAPI = {
  authorize: (email, password) => {
    const options = {
      requestType: "post",
      params: { email: email, password: password }
    }
    return request("/sessions", options)
  },

  getSpeakEasies: () => {
    return request("/locations")
  },

  postSpeakEasy: (params, token) => {
    const options = {
      requestType: "post",
      params: { location: params },
      token: token
    }
    return request("/locations", options)
  }
}

const API_URL = "http://localhost:4000";

function request(path, options = {}) {
  const { params, requestType, token } = options;
  const requestOptions = buildRequest(requestType, params, token);

  return fetch(`${API_URL}${path}`, requestOptions)
    .then(handleResponse)
    .then(red => red.json())
}

function handleResponse(response) {
  if (response.ok) {
    return response
  } else {
    throw new Error(response.statusText)
  }
}

function buildRequest(responseType, params, token) {
  return {
    method: responseType || "get",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify(params)
  }
}
