<template>
  <div class="main-container">
    <div class="header-container">
      <div class="header">
        <div class="nav-button" @click="goTo('desc')" v-if="!cpIsVertcial">
          {{ t("nav.description") }}
        </div>
        <div class="nav-button" @click="goTo('team')">{{ t("nav.team") }}</div>
        <div class="nav-button" @click="goTo('advantages')">
          {{ t("nav.advantages") }}
        </div>
        <div class="nav-button" @click="goTo('roadmap')" v-if="cpRu">
          {{ t("nav.roadmap") }}
        </div>
        <div class="nav-button" @click="goTo('contacts')" v-if="!cpIsVertcial">
          {{ t("nav.contacts") }}
        </div>
        <div style="font-size: 30px" class="nav-button" @click="changeLocale">
          {{ t("nav.locale") }}
        </div>
      </div>
    </div>
    <div class="logo-container" id="desc">
      <div class="logo-smart">SMART</div>
      <div class="logo-recipe">RECIPE</div>
      <div class="logo-description" v-if="!cpIsVertcial">
        {{ t("logo.description") }}
      </div>
      <div class="logo-description" v-else>{{ t("logo.description.sub") }}</div>
      <div class="logo-buttons-container" v-if="!cpIsVertcial">
        <div class="logo-button" @click="goTo('team')">{{ t("nav.team") }}</div>
        <div class="logo-button" @click="goTo('roadmap')" v-if="cpRu">
          {{ t("nav.roadmap") }}
        </div>
      </div>
    </div>

    <div class="promo-container" id="promo" v-if="cpRu">
      <div class="promo-wrapper">
        <div class="promo-header">{{ t("header.promo") }}</div>
        <div class="promo-video">
          <video
            src="https://smart-recipe.ru/media/done.mp4"
            alt="Promo Video"
            width="1200px"
            height="675px"
            controls="true"
          />
        </div>
      </div>
    </div>

    <div class="team-container" id="team" v-if="!cpIsVertcial">
      <div class="team-header">{{ t("header.team") }}</div>
      <div class="row">
        <CardComponent
          photo="/images/artem.png"
          :name="t('Мотякин Артем.name')"
          :position="t('Мотякин Артем.position')"
          :description="t('Мотякин Артем.description')"
          :work="t('Мотякин Артем.work')"
          stack="C/C++, Python, SQL"
          :info="t('Мотякин Артем.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/maxim.png"
          :name="t('Копырин Максим.name')"
          :position="t('Копырин Максим.position')"
          :description="t('Копырин Максим.description')"
          :work="t('Копырин Максим.work')"
          stack="Python, SQL, TS, React"
          :info="t('Копырин Максим.info')"
        />
        <CardComponent
          photo="/images/mathew.png"
          :name="t('Семенищев Матвей.name')"
          :position="t('Семенищев Матвей.position')"
          :description="t('Семенищев Матвей.description')"
          stack="Postgres, Django, Selenium, REST API"
          :info="t('Семенищев Матвей.info')"
        />
        <CardComponent
          photo="/images/daniel.png"
          :name="t('Емельяненко Даниил.name')"
          :position="t('Емельяненко Даниил.position')"
          :description="t('Емельяненко Даниил.description')"
          :work="t('Емельяненко Даниил.work')"
          stack="JS (VueJS, NestJS, AdonisJS), Python (Django)"
          :info="t('Емельяненко Даниил.info')"
        />
        <CardComponent
          photo="/images/egor.png"
          :name="t('Зотьев Егор.name')"
          :position="t('Зотьев Егор.position')"
          :description="t('Зотьев Егор.description')"
          stack="С/C++, Python"
          :info="t('Зотьев Егор.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/hz.png"
          :name="t('Федоров Михаил.name')"
          :position="t('Федоров Михаил.position')"
          :description="t('Федоров Михаил.description')"
          :work="t('Федоров Михаил.work')"
          stack="Python, JS"
          :info="t('Федоров Михаил.info')"
        />
        <CardComponent
          photo="/images/sergey.png"
          :name="t('Гетун Сергей.name')"
          :position="t('Гетун Сергей.position')"
          :description="t('Гетун Сергей.description')"
          stack="Python, Django"
          :info="t('Гетун Сергей.info')"
        />
        <CardComponent
          photo="/images/sendik.png"
          :name="t('Сендик Михаил.name')"
          :position="t('Сендик Михаил.position')"
          :description="t('Сендик Михаил.description')"
          :work="t('Сендик Михаил.work')"
          stack="ML engineer, CV, NLP"
          :info="t('Сендик Михаил.info')"
        />
        <CardComponent
          photo="/images/alexey.png"
          :name="t('Комиссаренко Алексей.name')"
          :position="t('Комиссаренко Алексей.position')"
          :description="t('Комиссаренко Алексей.description')"
          :work="t('Комиссаренко Алексей.work')"
          stack="Python, PyTorch, Classic ML, DL, CV, NLP"
        />
      </div>
    </div>

    <!-- MOBILE LAYOUT XD -->
    <div class="team-container" id="team" v-else>
      <div class="team-header">{{ t("header.team") }}</div>
      <div class="row">
        <CardComponent
          photo="/images/artem.png"
          :name="t('Мотякин Артем.name')"
          :position="t('Мотякин Артем.position')"
          :description="t('Мотякин Артем.description')"
          :work="t('Мотякин Артем.work')"
          stack="C/C++, Python, SQL"
          :info="t('Мотякин Артем.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/maxim.png"
          :name="t('Копырин Максим.name')"
          :position="t('Копырин Максим.position')"
          :description="t('Копырин Максим.description')"
          :work="t('Копырин Максим.work')"
          stack="Python, SQL, TS, React"
          :info="t('Копырин Максим.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/mathew.png"
          :name="t('Семенищев Матвей.name')"
          :position="t('Семенищев Матвей.position')"
          :description="t('Семенищев Матвей.description')"
          stack="Postgres, Django, Selenium, REST API"
          :info="t('Семенищев Матвей.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/daniel.png"
          :name="t('Емельяненко Даниил.name')"
          :position="t('Емельяненко Даниил.position')"
          :description="t('Емельяненко Даниил.description')"
          :work="t('Емельяненко Даниил.work')"
          stack="JS (VueJS, NestJS, AdonisJS), Python (Django)"
          :info="t('Емельяненко Даниил.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/egor.png"
          :name="t('Зотьев Егор.name')"
          :position="t('Зотьев Егор.position')"
          :description="t('Зотьев Егор.description')"
          stack="С/C++, Python"
          :info="t('Зотьев Егор.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/hz.png"
          :name="t('Федоров Михаил.name')"
          :position="t('Федоров Михаил.position')"
          :description="t('Федоров Михаил.description')"
          :work="t('Федоров Михаил.work')"
          stack="Python, JS"
          :info="t('Федоров Михаил.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/sergey.png"
          :name="t('Гетун Сергей.name')"
          :position="t('Гетун Сергей.position')"
          :description="t('Гетун Сергей.description')"
          stack="Python, Django"
          :info="t('Гетун Сергей.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/sendik.png"
          :name="t('Сендик Михаил.name')"
          :position="t('Сендик Михаил.position')"
          :description="t('Сендик Михаил.description')"
          :work="t('Сендик Михаил.work')"
          stack="ML engineer, CV, NLP"
          :info="t('Сендик Михаил.info')"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/alexey.png"
          :name="t('Комиссаренко Алексей.name')"
          :position="t('Комиссаренко Алексей.position')"
          :description="t('Комиссаренко Алексей.description')"
          :work="t('Комиссаренко Алексей.work')"
          stack="Python, PyTorch, Classic ML, DL, CV, NLP"
        />
      </div>
    </div>

    <div class="special-thanks-container" id="thanks">
      <div class="thanks">{{ t("header.speacial-thanks") }}</div>
      <div class="row">
        <CardComponent
          photo="/images/bober.png"
          :name="t('Бобер Станислав.name')"
          :description="t('Бобер Станислав.description')"
          :work="t('Бобер Станислав.work')"
          :position="t('Бобер Станислав.position')"
          stack="Sci Python, PyQt, FastAPI"
          :info="t('Бобер Станислав.info')"
        />
      </div>
    </div>

    <div class="advantages-container" id="advantages">
      <div class="advantages-wrapper">
        <div class="advantages-header">{{ t("header.advantages") }}</div>
        <div class="advantages-desc">
          <ul>
            <li>
              {{ t("advantages.description.one") }}
            </li>
            <li>
              {{ t("advantages.description.second") }}
            </li>
            <li>
              {{ t("advantages.description.third") }}
            </li>
            <li>
              {{ t("advantages.description.fourth") }}
            </li>
            <li>
              {{ t("advantages.description.fifth") }}
            </li>
            <li>
              {{ t("advantages.description.sixth") }}
            </li>
            <li>
              {{ t("advantages.description.seventh") }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="roadmap-container" id="roadmap" v-if="cpRu">
      <div class="roadmap-wrapper">
        <div class="roadmap-header">{{ t("header.roadmap") }}</div>
        <div class="roadmap-guide">
          <div class="dot" />
          <div class="guide">{{ t("roadmap.guide") }}</div>
        </div>
        <div class="roadmap-img">
          <img
            :src="cpRoadMap"
            alt="roadmap"
            style="max-width: 100%; height: auto"
          />
        </div>
      </div>
    </div>

    <div class="contacts-container" id="contacts">
      <div class="contacts-wrapper">
        <div class="contacts-text">
          <div class="contacts-header">{{ t("header.contacts") }}</div>
          <div class="contacts-email">
            {{ t("contacts.email") + "smart-recipe@yandex.ru" }}
          </div>
          <div class="contacts-socials">
            <div class="icon-wrapper">{{ t("contacts.media") }}</div>
            <div class="icon-wrapper" @click="goToTelegram()">
              <img src="/images/tg.png" width="46" height="46" class="tg" />
            </div>
            <div class="icon-wrapper">
              <img src="/images/vk.png" width="59" height="59" class="vk" />
            </div>
            <div class="icon-wrapper">
              <img
                src="/images/inst.png"
                width="37"
                height="37"
                class="instagram"
              />
            </div>
          </div>
        </div>
        <div class="contacts-form" v-if="!cpIsVertcial">
          <div class="contacts-form-wrapper">
            <form @submit.prevent="sendEmail">
              <label for="fname">{{ t("contacts.form.name") }}</label>
              <input
                v-model="inputName"
                type="text"
                id="fname"
                name="firstname"
                :placeholder="t('contacts.form.name.placeholder')"
              />

              <label for="lname">{{ t("contacts.form.email") }}</label>
              <input
                v-model="email"
                type="text"
                id="lname"
                name="lastname"
                :placeholder="t('contacts.form.email.placeholder')"
              />

              <label for="letter-text">{{ t("contacts.form.text") }}</label>
              <textarea
                v-model="letterText"
                id="letter-text"
                name="letter-text"
                minlength="10"
                maxlength="250"
                :placeholder="t('contacts.form.text.placeholder')"
                required
              ></textarea>

              <input type="submit" :value="t('contacts.form.submit-text')" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="contacts-container" v-if="cpIsVertcial">
      <div class="contacts-wrapper">
        <div class="contacts-form">
          <div class="contacts-form-wrapper">
            <form @submit.prevent="sendEmail">
              <label for="fname">{{ t("contacts.form.name") }}</label>
              <input
                v-model="inputName"
                type="text"
                id="fname"
                name="firstname"
                :placeholder="t('contacts.form.name.placeholder')"
                required
              />

              <label for="lname">{{ t("contacts.form.email") }}</label>
              <input
                v-model="email"
                type="text"
                id="lname"
                name="lastname"
                :placeholder="t('contacts.form.email.placeholder')"
                required
              />

              <label for="letter-text">{{ t("contacts.form.text") }}</label>
              <textarea
                v-model="letterText"
                id="letter-text"
                name="letter-text"
                minlength="10"
                maxlength="250"
                :placeholder="t('contacts.form.text.placeholder')"
                required
              ></textarea>

              <input type="submit" :value="t('contacts.form.submit-text')" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="delimeter" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";
import CardComponent from "./components/CardComponent.vue";
import axios, { AxiosInstance } from "axios";
import { getUserLocale, setI18nLanguage, useI18n } from "./i18n";

const { t } = useI18n();

const inputName = ref<String>("");
const email = ref<String>("");
const letterText = ref("");
const screenWidth = ref<number>(window.innerWidth);

const api = ref<AxiosInstance | null>(null);

const cpIsVertcial = computed(() => screenWidth.value <= 800);

const cpRoadMap = computed(() =>
  cpIsVertcial.value ? "/images/roadmap-mobile.png" : "/images/roadmap.png"
);

const cpRu = computed(() => t("locale") === "ru");

onBeforeMount(() => {
  api.value = axios.create({
    baseURL: `https://smart-recipe.ru/api/v1`,
    responseType: "json",
    params: {},
  });
});

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

function goTo(id: string) {
  location.hash = "#" + id;
}

function goToTelegram() {
  location.assign("https://t.me/m_artem_ka");
}

function sendEmail() {
  if (!api.value) {
    console.error("API not initialized");
    return;
  }

  api.value.post("mail/save-form", {
    email: email.value,
    name: inputName.value,
    text: letterText.value,
  });
}

function changeLocale() {
  const locale = getUserLocale();
  setI18nLanguage(locale === "ru" ? "en" : "ru");
}
</script>

<style scoped>
.main-container {
  background: #0b0b0b;
  height: 100vh;
  padding: 0;
  margin: 0;
}

/* Rectangle 147 */
.header-container {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
}

.header .nav-button {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;

  cursor: pointer;
}

.logo-smart {
  color: #fff;
  font-family: Montserrat;
  font-size: 230px;
  font-style: normal;
  font-weight: 800;

  height: 190px;

  text-align: center;
}

.logo-recipe {
  color: #fff;
  font-family: Montserrat;
  font-size: 230px;
  font-style: normal;
  font-weight: 300;

  height: 190px;
  margin-bottom: 50px;

  text-align: center;
}

.logo-description {
  width: 100%;
  height: 82px;
  flex-shrink: 0;

  color: #c2c2c2;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;

  text-align: center;
}

.logo-buttons-container {
  width: 100%;

  display: flex;
  justify-content: space-around;
}

.logo-buttons-container .logo-button {
  width: 246px;
  height: 58px;
  flex-shrink: 0;

  border-radius: 38px;
  background: #fff;

  align-items: center;
  text-align: center;
  line-height: 58px;

  color: #000;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;

  cursor: pointer;
}

.team-container {
  margin-top: 200px;
  width: 100%;
}

.team-container .team-header {
  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.row {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 25px 0px 25px 0px;
}

.special-thanks-container {
  width: 100%;
  margin-top: 150px;
}

.special-thanks-container .thanks {
  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.advantages-container {
  width: 100%;
  margin-top: 150px;

  display: flex;
  justify-content: center;
}

.advantages-container .advantages-header {
  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.advantages-container .advantages-desc {
  width: 100%;

  overflow-wrap: normal;
  color: #fff;
  font-family: Montserrat;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.advantages-container .advantages-wrapper {
  width: 100%;
  max-width: 1200px;
}

ul li {
  margin-bottom: 30px;
}

.roadmap-container {
  width: 100%;
  margin-top: 150px;

  display: flex;
  justify-content: center;
}

.roadmap-container .roadmap-wrapper {
  width: 1200px;
}

.roadmap-container .roadmap-header {
  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.roadmap-container .roadmap-guide {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.roadmap-container .roadmap-guide .dot {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 100%;
  background: #f73131;
}

.roadmap-container .roadmap-guide .guide {
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.roadmap-container .roadmap-img {
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 100px;
}

.roadmap-container .roadmap-img img {
  object-fit: cover;
}

.promo-container {
  width: 100%;
  margin-top: 150px;

  display: flex;
  justify-content: center;
}

.promo-container .promo-wrapper {
  width: 1200px;
  height: 675px;
}

.promo-container .promo-header {
  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.promo-container .promo-video {
  position: relative;

  width: 100%;
  height: 100%;
  flex-shrink: 0;
  margin-bottom: 100px;
}

.promo-container .promo-video video {
  position: absolute;
  width: 100%;
  height: 100%;
}

.contacts-container {
  width: 100%;
  margin-top: 50px;

  display: flex;
  justify-content: center;

  background-image: url("images/family-gradiented.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
}

.contacts-container .contacts-wrapper {
  width: 1000px;
  height: 500px;

  display: flex;
  justify-content: center;
  gap: 50px;
}

.contacts-text {
  width: 100%;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contacts-text .contacts-header {
  width: 100%;

  color: #fff;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.contacts-text .contacts-email {
  width: 100%;

  overflow-wrap: normal;
  color: #fff;
  font-family: Montserrat;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.contacts-text .contacts-socials {
  width: 100%;
  height: 59px;

  overflow-wrap: normal;
  color: #fff;
  font-family: Montserrat;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;

  display: flex;
  justify-content: space-between;
  vertical-align: center;
}

.icon-wrapper {
  height: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
}

.contacts-form {
  width: 100%;
  padding: 30px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  font-family: Montserrat;
  color: white;
}

.delimeter {
  height: 100px;
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-bottom: 30px;
  display: inline-block;
  border: 3px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  background-color: black;

  font-family: Montserrat;
}

textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-bottom: 30px;
  display: inline-block;
  border: 3px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  background-color: black;

  font-family: Montserrat;

  resize: none; /* Запретить изменение размеров */
  overflow: auto; /* Добавить прокрутку */
}

input[type="submit"] {
  width: 100%;
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border-style: solid;
  border-width: 3px;
  border-color: white;

  font-family: Montserrat;
}

input[type="submit"]:hover {
  background-color: white;
  color: black;
}

@media (width <= 800px) {
  .logo-smart {
    font-size: 90px;
    height: 100px;
    margin-top: 100px;
  }

  .logo-recipe {
    font-size: 90px;
    height: 100px;
    margin-bottom: 10px;
  }

  .team-container .team-header {
    font-size: 40px;
  }

  .promo-container .promo-header {
    font-size: 40px;
  }

  .roadmap-container .roadmap-header {
    font-size: 40px;
  }

  .roadmap-container .roadmap-guide {
    margin-bottom: 30px;
  }

  .advantages-container .advantages-header {
    font-size: 40px;
  }

  .advantages-container .advantages-desc {
    font-size: 19px;
  }

  .advantages-container .advantages-wrapper {
    width: 100%;
    max-width: 500px;
  }

  .roadmap-container .roadmap-wrapper {
    width: 400px;
  }

  .contacts-container {
    height: 350px;
    margin-top: 0px;

    background-image: none;
  }

  .contacts-container .contacts-wrapper {
    height: 350px;
  }

  .contacts-text {
    height: 250px;

    text-align: center;
  }

  .contacts-text .contacts-header {
    width: 100%;
    font-size: 40px;
  }

  .contacts-text .contacts-email {
    font-size: 17px;
  }

  .contacts-text .contacts-socials {
    justify-content: center;
    font-size: 17px;
    gap: 12px;
  }

  .special-thanks-container .thanks {
    font-size: 40px;
  }

  .header {
    gap: 20px;
  }
}
</style>
