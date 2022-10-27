import store from '../index';

export default {
    namespaced: true,

    state() {
        return {
            resultId: 0,
            results: [
                {
                    id: 1,
                    title: 'Вы отлично сэкономили за этот год',
                    text: `Да, на сэкономленные деньги дом не купишь, но можно использовать их на нужны семьи или же просто копить дальше`
                },

                {
                    id: 2,
                    title: 'Вы не отказывали себе и хорошо сэкономили',
                    text: `На сэкономленные деньги можно порадовать себя и своих близких`
                },

                {
                    id: 3,
                    title: 'Вы не сумели сэкономить за этот год',
                    text: `Но зато классно провели время! Теперь вы знаете как и на чем можно сэкономить в следующем году, 
                            или если возникнет такая необходимость`,
                }
            ],
            isPopupVisible: false,
            buttons: [
                {
                    id: 1,
                    icon: `<svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M2.85352 8.25L2.85352 12.5833C2.85352 13.78 3.82357 14.75 5.02018 14.75H8.52019L12.1868 14.75C13.3835 14.75 14.3535 13.78 14.3535 12.5833L14.3535 8.25" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                                   <path d="M8.68684 11.1885V1.27181M8.68684 1.27181L6.35352 3.6885M8.68684 1.27181L10.8535 3.6885" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>`,
                    color: 'light',
                    title: 'Поделиться',
                    type: 'share'
                },
                {
                    id: 2,
                    icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M8.62143 14.4635C11.2292 14.1714 13.3192 12.0868 13.6166 9.47899C14.007 6.06922 11.3567 3.16666 8.03454 3.12948V1.59986C8.03454 1.51489 7.92832 1.46974 7.85662 1.52285L4.70708 3.83587C4.65397 3.8757 4.65397 3.95271 4.70708 3.99255L7.85662 6.30557C7.92832 6.35868 8.03454 6.31088 8.03454 6.22855V4.70159C10.3688 4.73877 12.2383 6.72515 12.079 9.09924C11.9436 11.1414 10.2785 12.7985 8.23636 12.9286C6.07206 13.0667 4.23173 11.5211 3.90244 9.47634C3.84136 9.09659 3.50941 8.82041 3.12701 8.82041C2.65166 8.82041 2.27987 9.24265 2.35423 9.71268C2.8163 12.6259 5.50642 14.8114 8.62143 14.4635Z" stroke="none" />
                               </svg>`,
                    color: 'light',
                    title: 'Пройти заново',
                    type: 'restart'
                },
            ],
        }
    },

    getters: {
        getResultId() {
            return store.getters['money/getMoneyCount'] > 0 ? (store.getters['money/getMoneyCount'] < 150 ? 0 : 1) : 2;
        },

        getResult(state, getters) {
            return state.results[getters.getResultId];
        },

        getButtons(state) {
            return state.buttons;
        },

        getPopupVisible(state) {
            return state.isPopupVisible;
        }
    },

    mutations: {
        togglePopup(state, payload) {
            state.isPopupVisible = payload;
        }
    }
};
