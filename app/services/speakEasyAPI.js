export const speakEasyAPI = {
  authorize: (email, password) => {
    return (
      fetch(`${API_URL}/sessions/`, buildPost({email: email, password: password}))
        .then(handleResponse)
        .then(res => res.json())
    )
  },

  getSpeakEasies: () => {
    return (
      fetch(`${API_URL}/locations`)
        .then(res => res.json())
    )
  },

  postSpeakEasy: (params, token) => {
    return (
      fetch(`${API_URL}/locations/`, buildPost({ location: params }, token))
        .then(handleResponse)
        .then(res => res.json())
    )
  }
}

const API_URL = "http://localhost:4000";

function buildPost(params, token) {
  return {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify(params)
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response
  } else {
    throw new Error(response.statusText)
  }
}
