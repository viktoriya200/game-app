import {computed, ref} from "vue";
import {useStore} from "vuex";

export function useAudio() {
    let store;
    store = useStore();
    const sounds = computed(() => store.getters.getSounds);
    const isSoundOn = computed(() => store.getters.getIsSoundOn);
    const save = ref(null);
    const spend = ref(null);

    const audioPlay = (type) => {
        if(!isSoundOn.value) return;

        let elem = type === 'save' ? save.value : spend.value;

        if(elem.paused) {
            elem.play();
        } else {
            elem.currentTime = 0;
            elem.play();
        }
    }

    return {
        sounds,
        save,
        spend,
        audioPlay,
    };
}
