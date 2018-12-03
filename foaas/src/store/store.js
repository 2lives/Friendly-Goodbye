import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    fromInput: "",
    nameInput: "",
    companyInput: "",
    toolInput: "",
    formData: []
  },
  getters: {
    returnFrom: state => {
      return state.fromInput
    },
    returnName: state => {
      return state.nameInput
    },
    returnCompany: state => {
      return state.companyInput
    },
    returnTool: state => {
      return state.toolInput
    },
    returnFormData: state => {
      return state.formData
    }
  },
  mutations: {
    addFromInput(state, payload) {
      state.fromInput = payload.fieldvalue
    },
    addNameInput(state, payload) {
      state.nameInput = payload.fieldvalue
    },
    addCompanyInput(state, payload) {
      state.companyInput = payload.fieldvalue
    },
    addToolInput(state, payload) {
      state.toolInput = payload.fieldvalue
    },
    pushData(state) {
      state.formData.push(state.fromInput, state.nameInput, state.companyInput, state.toolInput)
    },
    resetState(state) {
      state.fromInput = ""
      state.nameInput = ""
      state.companyInput = ""
      state.toolInput = ""
      state.formData = []
    }
  }
})