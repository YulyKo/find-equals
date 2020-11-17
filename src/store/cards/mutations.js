function resetCardsWithNumbers(state) {
  for (let index = 0; index < state.cardsWithNumbers.length; index += 1) {
    const element = state.cardsWithNumbers[index];
    element.id = '';
    element.value = '';
  }
}

export default {
  resetCardsWithNumbers,
};
