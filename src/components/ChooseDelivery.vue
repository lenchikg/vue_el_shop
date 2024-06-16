<template>
  <div class="delivery">
    <BaseHeading variant="h2">Вам нужна доставка или будет самовывоз?</BaseHeading>
    <BaseSelect :options="deliveryOptions" @onSelectClick="selectDelivery" />
    <h3 v-if="selectedDiveryOption.name">{{ price }}</h3>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import BaseHeading from "./UI/BaseHeading.vue";
import BaseSelect from "./UI/BaseSelect.vue";
import { computed } from "@vue/runtime-core";

const DELIVERY_OPTIONS = [
  {
    id: 1,
    name: "Самовывоз",
    type: "pickup",
    price: 0,
  },
  {
    id: 1,
    name: "С доставкой",
    type: "delivery",
    price: 10,
  },
];

const emit = defineEmits(["onSelectDeliveryOption"]);
const deliveryOptions = DELIVERY_OPTIONS;
const selectedDiveryOption = reactive({});

const selectDelivery = (deliveryOption) => {
  Object.assign(selectedDiveryOption, deliveryOption);
  emit("onSelectDeliveryOption", deliveryOption);
};

const price = computed(() =>
  selectedDiveryOption.price === 0
    ? "It's free"
    : "Price: $" + selectedDiveryOption.price
);
</script>

<style scoped>
.delivery {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
