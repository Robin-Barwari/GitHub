<script setup>
import { ref, computed } from "vue";

const player = ref('X');

const playingField = ref([
  [''], [''], [''],
  [''], [''], [''],
  [''], [''], [''],
])
// calculate the winner by matching row
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const winner = computed(() => findWinner(playingField.value.flat()))

const move = (x, y) => {
  if (winner.value) return

  if (playingField.value[x], [y] !== '') return

  playingField.value[x][y] = player.value

  // if it was x turn it is now o, else it's x
  player.value = player.value === 'X' ? 'O' : 'X'
}

const Restart = () => {
  playingField.value = [
    [''], [''], [''],
    [''], [''], [''],
    [''], [''], [''],
  ]
  player.value = 'X'
}
</script>

<template>
  <main class="pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold">Luffarschack</h1>

    <h3 class="text-xl mb-4">Spelare {{ player }} tur</h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in playingField" :key="x" class="flex">
        <div v-for="(cell, y) in row" :key="y" @click="MakeMove(x, y)"
          :class="`border border-white w-24 h-24 hover:bg-blue flex items-center justify-center material-icons-outlined text-4xl cursor-pointer ${cell === 'X' ? 'text-pink-500' : 'text-blue-400'}`">
          {{ cell === 'X' ? 'close' : cell === 'O' ? 'circle' : '' }}
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 v-if="winner" class="text-6xl font-bold mb-8">Spelare '{{ winner }}' Har Vunnit!</h2>
      <button @click="ResetGame"
        class="px-4 py-2 bg-green rounded uppercase font-bold hover:bg-green duration-300">Starta om</button>
    </div>
  </main>
</template>

<style>
</style>
