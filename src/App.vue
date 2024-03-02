<template>
  <div class="main-container">
    <div class="header-container">
      <div class="header">
        <div class="nav-button" @click="goTo('desc')" v-if="!cpIsVertcial">
          Описание
        </div>
        <div class="nav-button" @click="goTo('team')">Команда</div>
        <div class="nav-button" @click="goTo('advantages')">Преимущества</div>
        <div class="nav-button" @click="goTo('roadmap')">Роадмап</div>
        <div class="nav-button" @click="goTo('team')" v-if="!cpIsVertcial">
          Контакты
        </div>
      </div>
    </div>
    <div class="logo-container" id="desc">
      <div class="logo-smart">SMART</div>
      <div class="logo-recipe">RECIPE</div>
      <div class="logo-description" v-if="!cpIsVertcial">
        Приложение “Smart Recipe” применяет в себе самые новые технологиии
        свежие идеи для того, чтобы сделать процесс приготовления удобными
        экономичным для вас.
      </div>
      <div class="logo-description" v-else>Новый взгляд на рецепты</div>
      <div class="logo-buttons-container" v-if="!cpIsVertcial">
        <div class="logo-button" @click="goTo('team')">Команда</div>
        <div class="logo-button" @click="goTo('roadmap')">Роадмап</div>
      </div>
    </div>

    <div class="promo-container" id="promo">
      <div class="promo-wrapper">
        <div class="promo-header">Промо-ролик</div>
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
      <div class="team-header">Команда</div>
      <div class="row">
        <CardComponent
          photo="/images/artem.png"
          name="Мотякин Артем"
          position="Руководитель"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: Huawei AI Laboratory, отдел AI Optimization and Acceleration."
          stack="C/C++, Python, SQL"
          info="Увлечения: Project Management, участие в хакатонах в роли backend & ml разработчика"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/maxim.png"
          name="Копырин Максим"
          position="Teamlead front-end /designer"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: Ростелеком ЦОД отдел “Мониторинг защищенности”"
          stack="Python, SQL, TS, React"
          info="Увлечения: CTF, OSINT-разведка, front-end, design"
        />
        <CardComponent
          photo="/images/mathew.png"
          name="Семенищев Матвей"
          position="Teamlead back-end"
          description="Студент НИУ ВШЭ ИБ 3 курс"
          stack="Postgres, Django, Selenium, REST API"
          info="Увлечения: Разработка сайтов, парсинг данных, шахматы"
        />
        <CardComponent
          photo="/images/daniel.png"
          name="Емельяненко Даниил"
          position="Devops/Системный архитектор"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: FullStack разработчик в компании АО «Нейросети»"
          stack="JS (VueJS, NestJS, AdonisJS), Python (Django)"
          info="Увлечения: рисование, игра на гитаре, хакатоны"
        />
        <CardComponent
          photo="/images/egor.png"
          name="Зотьев Егор"
          position="Продуктовый аналитик"
          description="Имеет свою студию по интеграции новых технологий и модернизации бизнес-процессов"
          stack="С/C++, Python"
          info="Увлечения: Продукт-аналитика, бизнес планирование"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/hz.png"
          name="Федоров Михаил"
          position="Front-end/designer"
          description="НИУ ВШЭ ИБ 3 курсУчусь, постепенно развиваюсьв своей сфере"
          work="Люблю писать интересные небольшие программки, не только как домашки"
          stack="Python, JS"
          info="Увлечения: мода/дизайн, программирование"
        />
        <CardComponent
          photo="/images/sergey.png"
          name="Гетун Сергей"
          position="Back-end разработчик"
          description="Студент НИУ ВШЭ КБ 3 курс"
          stack="Python, Django"
          info="Увлечения: написание back-end части для различных проектов, питон разработчик"
        />
        <CardComponent
          photo="/images/sendik.png"
          name="Сендик Михаил"
          position="ML/СV разработчик"
          description="Студент МИСИС БИСТ-21-1 3 курс"
          work="Работа: smart contract developer"
          stack="ML engineer, CV, NLP"
          info="Увлечения: написание CV проектов в сфере игр и траффика"
        />
        <CardComponent
          photo="/images/alexey.png"
          name="Комиссаренко Алексей"
          position="ML/СV разработчик"
          description="Студент МИСИС БИСТ-21-1 3 курс"
          work="Работа: ДИТ"
          stack="Python, PyTorch, Classic ML, DL, CV, NLP"
        />
      </div>
    </div>

    <!-- MOBILE LAYOUT XD -->
    <div class="team-container" id="team" v-else>
      <div class="team-header">Команда</div>
      <div class="row">
        <CardComponent
          photo="/images/artem.png"
          name="Мотякин Артем"
          position="Руководитель"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: Huawei AI Laboratory, отдел AI Optimization and Acceleration."
          stack="C/C++, Python, SQL"
          info="Увлечения: Project Management, участие в хакатонах в роли backend & ml разработчика"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/maxim.png"
          name="Копырин Максим"
          position="Teamlead front-end /designer"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: Ростелеком ЦОД отдел “Мониторинг защищенности”"
          stack="Python, SQL, TS, React"
          info="Увлечения: CTF, OSINT-разведка, front-end, design"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/mathew.png"
          name="Семенищев Матвей"
          position="Teamlead back-end"
          description="Студент НИУ ВШЭ ИБ 3 курс"
          stack="Postgres, Django, Selenium, REST API"
          info="Увлечения: Разработка сайтов, парсинг данных, шахматы"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/daniel.png"
          name="Емельяненко Даниил"
          position="Devops/Системный архитектор"
          description="Студент НИУ ВШЭ КБ 3 курс"
          work="Работа: FullStack разработчик в компании АО «Нейросети»"
          stack="JS (VueJS, NestJS, AdonisJS), Python (Django)"
          info="Увлечения: рисование, игра на гитаре, хакатоны"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/egor.png"
          name="Зотьев Егор"
          position="Продуктовый аналитик"
          work="Работа: -"
          description="Имеет свою студию по интеграции новых технологий и модернизации бизнес-процессов"
          stack="С/C++, Python"
          info="Увлечения: Продукт-аналитика, бизнес планирование"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/hz.png"
          name="Федоров Михаил"
          position="Front-end/designer"
          description="НИУ ВШЭ ИБ 3 курсУчусь, постепенно развиваюсьв своей сфере"
          work="Люблю писать интересные небольшие программки, не только как домашки"
          stack="Python, JS"
          info="Увлечения: мода/дизайн, программирование"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/sergey.png"
          name="Гетун Сергей"
          position="Back-end разработчик"
          description="Студент НИУ ВШЭ КБ 3 курс"
          stack="Python, Django"
          info="Увлечения: написание back-end части для различных проектов, питон разработчик"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/sendik.png"
          name="Сендик Михаил"
          position="ML/СV разработчик"
          description="Студент МИСИС БИСТ-21-1 3 курс"
          work="Работа: smart contract developer"
          stack="ML engineer, CV, NLP"
          info="Увлечения: написание CV проектов в сфере игр и траффика"
        />
      </div>
      <div class="row">
        <CardComponent
          photo="/images/alexey.png"
          name="Комиссаренко Алексей"
          position="ML/СV разработчик"
          description="Студент МИСИС БИСТ-21-1 3 курс"
          work="Работа: ДИТ"
          stack="Python, PyTorch, Classic ML, DL, CV, NLP"
          info="Увлечения: -"
        />
      </div>
    </div>

    <div class="special-thanks-container" id="thanks">
      <div class="thanks">Отдельная благодарность</div>
      <div class="row">
        <CardComponent
          photo="/images/bober.png"
          name="Бобер Станислав"
          description="Старший преподаватель НИУ ВШЭ"
          work="Работа: Главный разработчик ПО в компании СтатСофт"
          position="Руководитель направления"
          stack="научный стек Python, PyQt, FastAPI"
          info="Увлечения: программирование, математическое моделирование"
        />
      </div>
    </div>

    <div class="advantages-container" id="advantages">
      <div class="advantages-wrapper">
        <div class="advantages-header">Преимущества</div>
        <div class="advantages-desc">
          <ul>
            <li>
              Алгоритмы машинного обучения распознают на фотографии различные
              продукты и подбирают рецепты, учитывая наличие ингредиентов и ваши
              вкусовые предпочтения.
            </li>
            <li>
              Не нужно выходить из дома: недостающие продукты можно в один клик
              заказать в магазинах партнёров.
            </li>
            <li>
              Уникальная система интерактивных рецептов предлагает различные
              способы ускорения процесса приготовления.
            </li>
            <li>
              Вы можете добавить собственные рецепты и поделиться им с другими
              или оценить существующие.
            </li>
            <li>
              Подробная система фильтрации и сортировки позволит с легкостью
              подобрать вам нужный рецепт.
            </li>
            <li>
              Вы сможете настроить подбор рецептов под себя также благодаря
              блэклисту ингредиентов, сохранить рецепт в избранном.
            </li>
            <li>
              Вы сразу с лёгкостью сможете использовать весь функционал нашего
              приложения благодаря понятному интерфейсу с подробными гайдами на
              каждой странице.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="roadmap-container" id="roadmap">
      <div class="roadmap-wrapper">
        <div class="roadmap-header">Роадмап</div>
        <div class="roadmap-guide">
          <div class="dot" />
          <div class="guide">- Сейчас мы здесь</div>
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
          <div class="contacts-header">У вас остались вопросы?</div>
          <div class="contacts-email">Почта: smartreceipts@yandex.ru</div>
          <div class="contacts-socials">
            <div class="icon-wrapper">Наши соцсети:</div>
            <div class="icon-wrapper">
              <img src="/images/tg.png" width="46" height="46" class="tg" />
            </div>
            <img src="/images/vk.png" width="59" height="59" class="vk" />
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
            <form>
              <label for="fname">Имя</label>
              <input
                v-model="inputName"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ваше имя"
              />

              <label for="lname">Почта</label>
              <input
                v-model="email"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Ваша электронная почта"
              />

              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="contacts-container" v-if="cpIsVertcial">
      <div class="contacts-wrapper">
        <div class="contacts-form">
          <div class="contacts-form-wrapper">
            <form>
              <label for="fname">Имя</label>
              <input
                v-model="inputName"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ваше имя"
              />

              <label for="lname">Почта</label>
              <input
                v-model="email"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Ваша электронная почта"
              />

              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="delimeter" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CardComponent from "./components/CardComponent.vue";

const inputName = ref<String>("");
const email = ref<String>("");
const screenWidth = ref<number>(window.innerWidth);

const cpIsVertcial = computed(() => screenWidth.value <= 800);

const cpRoadMap = computed(() =>
  cpIsVertcial.value ? "/images/roadmap-mobile.png" : "/images/roadmap.png"
);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

function goTo(id: string) {
  location.hash = "#" + id;
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
