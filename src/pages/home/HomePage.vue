<template>
    <div class="home">Home</div>

    <!-- 2 way binding -->
    <div class="home_part">
        <div>Input value: {{ ip_2_way }}</div>

        <input type="text" v-model="ip_2_way" @input="handleChangeInput" />
    </div>

    <!-- ref -->
    <div class="home_part">
        <BtnRounded
            :btn_props="{
                class: 'home_ref-btn',
                type: 'button',
                onclick: handleFocusIpFile,
            }"
        >
            Choose file
        </BtnRounded>

        <input
            ref="refInput"
            type="file"
            :multiple="false"
            hidden
            accept="image/*"
            @change="handleChangeFile"
        />

        <div v-if="file">
            {{ file.name }}
        </div>

        <div v-else>Choose an image</div>
    </div>

    <!-- For If EventModifier -->
    <div class="home_part" @click="handleClickFor">
        <div>For (click me and list below!) (Using EventModifier .stop)</div>

        <div
            v-for="(item, index) in [1, 2, 3, 4, 5]"
            :key="item"
            :class="item === 2 ? 'home_for-2' : ''"
            class="home_for"
            @click.stop="handleClickForItem(item)"
        >
            Index: {{ index }}, Number: {{ item }}

            <template v-if="item === 1"> (1) </template>

            <template v-else-if="item === 3"> (3) </template>

            <template v-else> (other number) </template>
        </div>
    </div>
</template>

<script>
import BtnRounded from '../../components/btns/btn_rounded/BtnRounded.vue';

import useMounted from '../../hooks/useMounted';
export default {
    name: 'HomePage',
    components: {
        BtnRounded,
    },
    setup() {
        const mounted_obj = useMounted();

        return { mounted_obj };
    },
    data() {
        return {
            ip_2_way: '',
            file: null,
        };
    },
    methods: {
        handleChangeInput() {
            console.log(this.ip_2_way);
        },
        //
        handleClickFor() {
            console.log('click parent');
        },
        handleClickForItem(num) {
            console.log(num);
        },
        //
        handleFocusIpFile() {
            this.$refs.refInput.click();
        },
        handleChangeFile(event) {
            const new_file = event.target.files[0];

            if (new_file) {
                this.file = new_file;
            }
        },
    },
    mounted() {
        console.log(this.mounted_obj.mounted.value);
    },

    beforeUnmount() {
        console.log(this.mounted_obj.mounted.value);
    },
};
</script>

<!-- -->
<style scoped>
.home_part {
    padding: 20px;
}

.home_for-2 {
    color: red;
}
</style>
