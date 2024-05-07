<template>
  <div class="box">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <img class="image" alt="Image" :src="props.photo" />
        <div class="overlap">
          <div class="text-wrapper">{{ props.name }}</div>
          <div class="div">{{ props.position }}</div>
        </div>
        <div class="flexcontainer">
          <p class="text" v-if="props.description">
            <span class="span">
              {{ props.description }}
            </span>
          </p>
          <p class="text" v-if="props.work">
            <span class="span">
              {{ props.work }}
            </span>
          </p>
          <p class="text" v-if="props.stack">
            <span class="span">
              Stack: {{ props.stack }}
            </span>
          </p>
          <p class="text" v-if="props.info">
            <span class="span">
              {{ props.info }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
    photo: String,
    name: String,
    position: String,
    description: String,
    work: String,
    stack: String,
    info: String,
})
</script>

<style scoped>
p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
}
.box {
  height: 460px;
  width: 250px;
}

.box .overlap-group-wrapper {
  height: 460px;
  width: 256px;
}

.box .overlap-group {
  background-color: #383838;
  border-radius: 5px;
  box-shadow: 0px 4px 8.6px #00000033;
  height: 460px;
  position: relative;
  width: 250px;
}

.box .image {
  height: 186px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 250px;
}

.box .overlap {
  height: 37px;
  left: 11px;
  position: absolute;
  top: 199px;
  width: 200px;
}

.box .text-wrapper {
  color: #ffffff;
  font-family: "Montserrat-SemiBold", Helvetica;
  font-size: 18px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 230px;
}

.box .div {
  color: #ffffff;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 13px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 21px;
  width: 200px;
}

.box .flexcontainer {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 131px;
  left: 11px;
  position: absolute;
  top: 247px;
  width: 225px;
}

.box .text {
  align-self: stretch;
  color: #ffffff;
  font-family: "Montserrat-Light", Helvetica;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.box .span {
  color: #ffffff;
  font-family: "Montserrat-Light", Helvetica;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0;
}
</style>
