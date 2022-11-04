<template>
  <div class="xtx-checkbox" @click="changeChecked()">
    <i v-if="checked" class="iconfont icon-CheckboxChecked"></i>
    <i v-else class="iconfont icon-checkbox_unchecked"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "XtxCheckbox",
};
</script>

<script setup>
import { ref, watch } from "vue";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

// const checked = ref(false);
// const changeChecked = () => {
//   checked.value = !checked.value;

//   // 双向绑定 传值
//   console.log(checked.value);
//   emits("update:modelValue", checked.value);
// };
// watch(
//   () => props.modelValue,
//   () => {
//     checked.value = props.modelValue;
//   },
//   { immediate: true }
// );

const checked = useVModel(props, "modelValue", emit);
const changeChecked = () => {
  const newVal = !checked.value;
  // 通知父组件
  checked.value = newVal;

  // 让组件支持change事件
  emit("change", newVal);
};
</script>

<style lang="scss" scoped>
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-CheckboxChecked {
    color: $xtxColor;

    ~ span {
      color: $xtxColor;
    }
  }

  i {
    position: relative;
    top: 2px;
  }

  span {
    margin-left: 2px;
  }
}
</style>
