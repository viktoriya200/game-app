export default {
    namespaced: true,

    state() {
        return {
            moneyCount: 0,
            savedMoney: {
                coffee: '',
                hungry: '',
                taxi: '',
                lunch: '',
                cafe: '',
                smoking: '',
                list: '',
                technique: '',
                subscription: '',
                cashback: '',
                air_tickets: '',
                berries: '',
            },
        }
    },

    getters: {
        getMoneyCount(state) {
            return state.moneyCount;
        },

        getSavedMoney(state) {
            return state.savedMoney;
        },
    },

    mutations: {
        saveMoney(state, values) {
            if(values.count === undefined) return;

            state.savedMoney[values.type] = values.count;
            state.moneyCount += values.count;
        },

        resetMoney(state) {
            state.moneyCount = 0;
        },
    },
};
