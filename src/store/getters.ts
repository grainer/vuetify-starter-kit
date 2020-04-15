import { GetterTree } from 'vuex';
import { GlobalState } from '@/types';

const getters: GetterTree<GlobalState, GlobalState> = {
  getVeutify: (state: GlobalState): boolean => {
    return state.vuetify;
  },
};

export default getters;
