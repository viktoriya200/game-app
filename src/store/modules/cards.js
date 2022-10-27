export default {
    namespaced: true,

    state() {
        return {
            activeCardId: 1,
            cards: [
                {
                    id: 24,
                    number: 12,
                    isQuestion: false,
                    type: 'berries',
                    save_text: 'Так и сделаем!',
                    spend_text: 'Нет, давай не будем? А купим уже готовые'
                },
                {
                    id: 23,
                    number: 12,
                    isQuestion: true,
                    type: 'berries',
                    count: 18,
                    image: require('@/assets/images/berries.jpeg'),
                    text: `Может заморозим ягоды и&nbsp;овощи в&nbsp;сезон сами? Чем покупать их&nbsp;замороженные зимой`
                },
                {
                    id: 22,
                    number: 11,
                    isQuestion: false,
                    type: 'air_tickets',
                    save_text: 'Отличная идея! Заодно сможем выбрать места и&nbsp;не&nbsp;сидеть в&nbsp;проходе',
                    spend_text: 'А&nbsp;вдруг планы поменяются? Я&nbsp;не&nbsp;готов(а) так рисковать'
                },
                {
                    id: 21,
                    number: 11,
                    isQuestion: true,
                    type: 'air_tickets',
                    count: 62,
                    image: require('@/assets/images/air_tickets.jpeg'),
                    text: `Купим авиабилеты заранее а&nbsp;не&nbsp;за&nbsp;пару дней? Даты отпусков ведь нам уже известны`
                },
                {
                    id: 20,
                    number: 10,
                    isQuestion: false,
                    type: 'cashback',
                    save_text: 'Давай, это будет полезно',
                    spend_text: 'Категорически нет, не&nbsp;хочу изучать никакие карты!'
                },
                {
                    id: 19,
                    number: 10,
                    isQuestion: true,
                    type: 'cashback',
                    count: 14,
                    image: require('@/assets/images/cashback.jpeg'),
                    text: `Давай использовать карту с&nbsp;кешбеком? Вернём часть от&nbsp;уже потраченных денег`
                },
                {
                    id: 18,
                    number: 9,
                    isQuestion: false,
                    type: 'subscription',
                    save_text: 'Хорошо, давно хочу это сделать',
                    spend_text: 'Может сделаем это позже? Вдруг я&nbsp;все&nbsp;же ими воспользуюсь'
                },
                {
                    id: 17,
                    number: 9,
                    isQuestion: true,
                    type: 'subscription',
                    count: 12,
                    image: require('@/assets/images/subscription.jpeg'),
                    text: `Почистим телефон от&nbsp;подписок? Там точно есть пара, которыми мы&nbsp;не&nbsp;пользуемся`
                },
                {
                    id: 16,
                    number: 8,
                    isQuestion: false,
                    type: 'technique',
                    save_text: 'Отлично. И еще немного заработаем',
                    spend_text: 'Ну&nbsp;уж&nbsp;нет! Вся техника пойдет на&nbsp;помойку'
                },
                {
                    id: 15,
                    number: 8,
                    isQuestion: true,
                    type: 'technique',
                    count: 30,
                    image: require('@/assets/images/technique.jpeg'),
                    text: `Может продадим неработающую технику на&nbsp;запчасти, вместо того чтобы выкинуть&nbsp;ее?`
                },
                {
                    id: 14,
                    number: 7,
                    isQuestion: false,
                    type: 'list',
                    save_text: 'Давай, так мы&nbsp;точно не&nbsp;будем ходить между полками и&nbsp;пытаться вспомнить что на&nbsp;нужно',
                    spend_text: 'Категорически против! Никаких списков'
                },
                {
                    id: 13,
                    number: 7,
                    isQuestion: true,
                    type: 'list',
                    count: 60,
                    image: require('@/assets/images/list.jpeg'),
                    text: `Составим список продуктов перед походом в&nbsp;магазин?
                            Так мы&nbsp;ничего не&nbsp;забудем и&nbsp;купим только то&nbsp;что нужно`,
                },
                {
                    id: 12,
                    number: 6,
                    isQuestion: false,
                    type: 'smoking',
                    save_text: 'Отличная мысль!',
                    spend_text: 'Ну&nbsp;нет, без сигарет я&nbsp;не&nbsp;смогу!'
                },
                {
                    id: 11,
                    number: 6,
                    isQuestion: true,
                    type: 'smoking',
                    count: 21,
                    image: require('@/assets/images/smoking.jpeg'),
                    text: `Может бросим курить? Давно ведь уже хотим`
                },
                {
                    id: 10,
                    number: 5,
                    isQuestion: false,
                    type: 'cafe',
                    save_text: 'Конечно! Так и для здороья будет лучше',
                    spend_text: 'Ни&nbsp;в&nbsp;коем случае! Это уже наш ритуал'
                },
                {
                    id: 9,
                    number: 5,
                    isQuestion: true,
                    type: 'cafe',
                    count: 144,
                    image: require('@/assets/images/cafe.jpeg'),
                    text: `Может будем ходить в&nbsp;ресторан не&nbsp;кадждые выходные, а&nbsp;через неделю?
                            Вместо этого' можем покататься на&nbsp;велосипедах или самокатах вместе`
                },
                {
                    id: 8,
                    number: 4,
                    isQuestion: false,
                    type: 'lunch',
                    save_text: 'Подходит!',
                    spend_text: `Ну&nbsp;уж&nbsp;нет! Готовить сам(а) я&nbsp;не&nbsp;буду`
                },
                {
                    id: 7,
                    number: 4,
                    isQuestion: true,
                    type: 'lunch',
                    count: 120,
                    image: require('@/assets/images/lunch.jpeg'),
                    text: `Вместо обеда в&nbsp;кафе, может приготовим его сами и&nbsp;возьмём обед с&nbsp;собой?`
                },
                {
                    id: 6,
                    number: 3,
                    isQuestion: false,
                    type: 'taxi',
                    save_text: 'Отлично, давай! Заодно немгого прогуляемся',
                    spend_text: 'Ни&nbsp;в&nbsp;коем случае! У&nbsp;меня нет времни на&nbsp;прогулки'
                },
                {
                    id: 5,
                    number: 3,
                    isQuestion: true,
                    type: 'taxi',
                    count: 81,
                    image: require('@/assets/images/taxi.jpeg'),
                    text: `Может вместо такси проедем на&nbsp;автобусе и&nbsp;немного прогуляемся до&nbsp;остановки?
                            По&nbsp;времени выходит всего на&nbsp;10&nbsp;минут дольше`
                },
                {
                    id: 4,
                    number: 2,
                    isQuestion: false,
                    type: 'hungry',
                    save_text: 'Прекрасная идея!',
                    spend_text: 'Ни&nbsp;за&nbsp;что! Мой желудок сам ведет меня в&nbsp;магазин'
                },
                {
                    id: 3,
                    number: 2,
                    isQuestion: true,
                    type: 'hungry',
                    count: 74,
                    image: require('@/assets/images/hungry.jpeg'),
                    text: `Давай не&nbsp;ходить в&nbsp;магазин на&nbsp;голодный желудок? 
                            Так мы&nbsp;неосознанно покупаем больше продуктов, которые не&nbsp;сильно нужны`
                },
                {
                    id: 2,
                    number: 1,
                    isQuestion: false,
                    type: 'coffee',
                    save_text: 'Разумно. К&nbsp;тому&nbsp;же мы&nbsp;сбережем природу, не&nbsp;используя одноразовые стаканчики',
                    spend_text: 'Хотя&nbsp;бы на&nbsp;кофе давай не&nbsp;будем экономить!'
                },
                {
                    id: 1,
                    number: 1,
                    isQuestion: true,
                    type: 'coffee',
                    count: 72,
                    image: require('@/assets/images/coffee.jpeg'),
                    text: `Давай не&nbsp;будем покупать кофе по&nbsp;пути на&nbsp;работу, а&nbsp;возьмём его с&nbsp;собой в&nbsp;стакане? 
                            Он&nbsp;не&nbsp;менее вкусный`
                }
            ],
        }
    },

    getters: {
        getCards(state) {
            return state.cards;
        },

        getCardsCount(state) {
            return state.cards.length;
        },

        getActiveCard(state) {
            return state.activeCardId;
        },
    },

    mutations: {
        setActiveCard(state, payload) {
            state.activeCardId = payload;
        },
    },
};
