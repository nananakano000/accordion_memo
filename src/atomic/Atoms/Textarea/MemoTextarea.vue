<template>
  <div class="add-notebook-button">
    <b-input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
      variant="outline-primary"
    ></b-input>
  </div>
</template>

<script>
export default {
  name: "MemoTextarea",
  props: {
    value: { type: String, require: true },
    type: { type: String, require: true },
    name: { type: String, require: true },
    placeholder: { type: String, require: false }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style>
</style>