<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div>Slot</div>
        <slot></slot>

        <div style="margin-top: 15px">Slot 2</div>
        <slot name="hello_slot_2" :title="title"></slot>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',

    data() {
        return {
            title: 'This is title from HelloWorld pass to children',
        };
    },
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin-bottom: 20px;
    padding: 10px;
}
</style>
