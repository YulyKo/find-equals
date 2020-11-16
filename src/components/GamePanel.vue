<template>
  <main class="panel flex">
    <card-vue v-for="card in cardsWithNumbers"
               :key="card.id"
               :id="card.id"
               @click="selectCard(card)"
               :disable="card.disable">
      {{ card.value }}
    </card-vue>
  </main>
</template>

<script>
import CardVue from '@/components/Card.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'GamePanel',
  components: {
    cardVue: CardVue,
  },
  data() {
    return {
      firstSelectedCard: {
        id: '',
        value: '',
      },
      secondSelectedCard: {
        id: '',
        value: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      cardsWithNumbers: 'getCardsWithNumbers',
    }),
  },
  methods: {
    disableCards(firstId, secondId) {
      for (let index = 0; index < this.cardsWithNumbers.length; index += 1) {
        const element = this.cardsWithNumbers[index];
        const { id } = this.cardsWithNumbers[index];
        if (id === firstId || id === secondId) {
          element.disable = true;
        }
      }
      this.cardsWithNumbers.forEach((card) => {
        if (card.id === firstId || card.id === secondId) {
          // eslint-disable-next-line no-unused-vars
          let { disable } = card;
          disable = false;
        }
      });
    },
    closeSelectedCards() {
      const first = document.getElementById(this.firstSelectedCard.id);
      const second = document.getElementById(this.secondSelectedCard.id);
      setTimeout(() => {
        first.style.display = 'none';
        second.style.display = 'none';
      }, 1000);
    },
    cleanSelectedCard() {
      this.firstSelectedCard = {
        id: '',
        value: '',
      };
      this.secondSelectedCard = {
        id: '',
        value: '',
      };
    },
    checkEquals() {
      if (this.firstSelectedCard.value !== this.secondSelectedCard.value) {
        this.closeSelectedCards();
      } else this.disableCards(this.firstSelectedCard.id, this.secondSelectedCard.id);
      this.cleanSelectedCard();
    },
    selectCard(card) {
      const cardDOM = document.getElementById(card.id);
      if (this.firstSelectedCard.id === '') {
        this.firstSelectedCard = card;
        cardDOM.style.display = 'block';
      } else if (this.secondSelectedCard.id === '') {
        this.secondSelectedCard = card;
        cardDOM.style.display = 'block';
      }
      if (this.firstSelectedCard.id !== '' && this.secondSelectedCard.value !== '') this.checkEquals();
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/main'

.panel
  margin: 0 auto
  margin-top: 2em
  width: $panel-width
  flex-wrap: wrap
</style>
