import {computed, ref} from "vue";
import {useMq} from "vue3-mq";
import {useStore} from "vuex";

export function useCardTouch(id) {
    const mq = useMq();
    const store = useStore();
    const cardId = id;
    const activeCardId = computed(() => store.getters['cards/getActiveCard']);
    const isAnimating = ref(false);
    const isInactive = ref(false);
    const touchStart = ref(0);
    const difference = ref(0);
    const degree = ref(0);
    const decisionVal = ref(80);
    const direction = ref('');

    const handleTouchstart = (e) => {
        if(mq.current !== 'xs' || isAnimating.value) return;

        touchStart.value = e.touches[0].pageX;
    }

    const handleTouchmove = (e) => {
        if(mq.current !== 'xs') return;
        difference.value = e.touches[0].pageX - touchStart.value;
        transformCard();
    }

    const handleTouchend = (e) => {
        if(mq.current !== 'xs') return;

        stopTransform();
    }

    const transformCard = () => {
        isAnimating.value = true;
        degree.value = difference.value / 10;
    }

    const stopTransform = () => {
        if (difference.value >= decisionVal.value) {
            direction.value = 'save'
        } else if (difference.value <= -decisionVal.value) {
            direction.value = 'spend';
        }

        if(Math.abs(difference.value) >= decisionVal.value) {
            isInactive.value = true;
        }

        setTimeout(() => {
            isInactive.value = false;
            direction.value = '';
        }, 300);

        difference.value = 0;
        degree.value = 0
        isAnimating.value = false;
    }

    const transformStyle = computed(() => {
        let translate = difference.value
            ? difference.value + 'px'
            : activeCardId.value === cardId
                ? '0'
                : '-50%';

        return { transform: `translateX(${translate}) rotate(${degree.value}deg)` }
    });

    return {
        handleTouchstart,
        handleTouchmove,
        handleTouchend,
        transformStyle,
        direction,
        isInactive,
    };
}
