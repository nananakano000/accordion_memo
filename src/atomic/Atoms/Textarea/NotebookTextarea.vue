<template>
  <div id="nb-textarea">
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
  name: "NotebookTextarea",
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
#nb-textarea {
  padding-right: 200px;
}
</style>