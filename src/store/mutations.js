const mutations = {
  setUserinfo(state, data) {
    localStorage.setItem('userinfo',JSON.stringify(data))
  }
}




export default mutations;
