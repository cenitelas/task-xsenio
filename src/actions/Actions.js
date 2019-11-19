export const userPost = user => {
    return dispatch => {
      return fetch("/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (!data.type) {
            alert(data.data);
          } else {
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.data))
          }
        })
    }
  }
  
  export const userLogin = user => {
    return dispatch => {
      return fetch("/auth", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (!data.type) {
           alert(data.data)
          } else {
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.data))
          }
        })
    }
  }

  export const getMe = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("/me", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (!data.type) {
              alert(data.data);
              localStorage.removeItem("token")
            } else {
              dispatch(loginUser(data.data))
            }
          })
      }
    }
  }

  export const getCount = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("/getcount", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (!data.type) {
              alert(data.data);
              localStorage.removeItem("token")
            } else {
              dispatch(countGet(data.data))
            }
          })
      }
    }
  }

  export const getNext = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("/getcountnext", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (!data.type) {
              alert(data.data);
              localStorage.removeItem("token")
            } else {
              dispatch(countNext(data.data))
            }
          })
      }
    }
  }

  export const countIncrement = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("/getcountincrement", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (!data.type) {
              alert(data.data);
              localStorage.removeItem("token")
            } else {
              dispatch(countGet(data.data))
            }
          })
      }
    }
  }

  export const countGet = countObj => ({
    type: 'COUNT_GET',
    payload: countObj
  })

  export const countNext = countObj => ({
    type: 'COUNT_NEXT',
    payload: countObj
  })
  
  export const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })

  export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  })


