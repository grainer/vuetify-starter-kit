import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import { GlobalState } from '@/types';

Vue.use(Vuex);

const ls = new SecureLS({
  encodingType: 'des',
  isCompression: false,
  encryptionSecret: process.env.ENCRYPTION_KEY,
});

export default new Vuex.Store<GlobalState>({
  state,
  getters,
  mutations,
  // actions: {},
  // modules: {},
  strict: true,
  plugins: [
    // TODO: encrypt storage
    createPersistedState({
      key: 'secure-ls',
      paths: ['vuetify'],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
