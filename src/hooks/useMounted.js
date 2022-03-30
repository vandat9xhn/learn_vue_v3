import { onBeforeUnmount, onMounted, ref } from 'vue';

//
function useMounted() {
    const mounted = ref(false);

    onMounted(() => {
        handleMounted();
    });
    onBeforeUnmount(() => {
        handleUnmounted();
    });

    // ----

    const handleMounted = () => {
        mounted.value = true;
    };

    const handleUnmounted = () => {
        mounted.value = false;
    };

    // ----

    return {
        mounted,
        // handleMounted,
        // handleUnmounted,
    };
}

export default useMounted;
