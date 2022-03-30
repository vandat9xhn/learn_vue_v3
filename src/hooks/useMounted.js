import { ref } from 'vue';

//
const useMounted = () => {
    const mounted = ref(false);

    const handleMounted = () => {
        mounted.value = true;
    };

    const handleUnmounted = () => {
        mounted.value = false;
    };

    // ----

    return {
        mounted,
        handleMounted,
        handleUnmounted,
    };
};

export default useMounted;
