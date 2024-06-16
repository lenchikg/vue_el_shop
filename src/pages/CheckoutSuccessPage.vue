<template>
  <div class="checkout-success">
    <BaseHeading variant="h1" class="checkout-success__title"
      >Заказ отправлен. Спасибо за заказ. Пожалуйста ожидайте связи с менеджером для уточнения подробностей.</BaseHeading
    >
    <BaseHeading variant="h3" class="checkout-success__subtitle"
      >Переходим на главную через...</BaseHeading
    >
    <CountDownTimer
      :timeout="5"
      @onTimerEnd="redirectToHomepage"
    ></CountDownTimer>
  </div>
</template>

<script setup>
import CountDownTimer from "@/components/CountDownTimer.vue";
import BaseHeading from "@/components/UI/BaseHeading.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const redirectToHomepage = () => {
  router.replace("/");
};
</script>

<style scoped>
.checkout-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.checkout-success__title {
  color: #5ec343;
}

.checkout-success__subtitle {
  color: lightgray;
}
</style>
