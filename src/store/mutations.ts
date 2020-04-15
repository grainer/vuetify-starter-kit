import { MutationTree } from 'vuex';
import { GlobalState, SET_VUETIFY } from '@/types';

const mutations: MutationTree<GlobalState> = {
  [SET_VUETIFY](state: GlobalState, value: boolean) {
    state.vuetify = value;
  },
};

export default mutations;
