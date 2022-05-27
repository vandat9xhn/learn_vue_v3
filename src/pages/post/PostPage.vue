<template>
  <h1>This is Post {{ post_id || '' }}</h1>

  <div>
    <input type="text" v-focus v-log />
  </div>

  <div>
    <button type="button" @click="toggleShowModal">Show Modal</button>
  </div>

  <template v-if="show_modal">
    <Modal>
      <div style="background-color: blue; color: white">
        <div style="height: 50px"></div>

        <div>This is modal</div>

        <div>
          <button type="button" @click="toggleShowModal">Close Modal</button>
        </div>

        <div>
          <button type="button" @click="toggleShowModal2">Open Modal 2</button>
        </div>

        <div style="height: 250px"></div>
      </div>
    </Modal>
  </template>

  <template v-if="show_modal2">
    <Modal>
      <div style="background-color: green; color: white">
        <div style="height: 250px"></div>

        <div>This is modal 2</div>

        <div>
          <button type="button" @click="toggleShowModal2">Close Modal 2</button>
        </div>

        <div style="height: 250px"></div>
      </div>
    </Modal>
  </template>
</template>

<script>
import { useRouter } from 'vue-router';
//
import logHello from '../../directives/logHello.js';
import Modal from '../../components/modal/Modal.vue';

export default {
  name: 'PostPage',
  directives: {
    log: logHello,
  },
  components: { Modal },

  data() {
    return {
      post_id: 0,
      show_modal: false,
      show_modal2: false,
    };
  },
  setup() {},
  //
  mounted() {
    console.log(this.$authorName);
    const router = useRouter();

    this.post_id = router.currentRoute.value.params['id'];
  },

  //
  methods: {
    toggleShowModal() {
      this.show_modal = !this.show_modal;
    },
    toggleShowModal2() {
      this.show_modal2 = !this.show_modal2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
