const state = {
  memoryList: []
}

const mutations = {
  ADD_LIST: (state, list) => {
    state.memoryList.push(list)
    console.log(window.performance.memory)
  }
}

const actions = {
  addMemoryList({ commit }, list) {
    console.log('addMemoryList')
    commit('ADD_LIST', list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

