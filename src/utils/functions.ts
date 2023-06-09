function shuffle(array: any[]): any[] {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function random_integer (min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_item (arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

function now (): string {
  return new Date().toLocaleString();
}

module.exports = {
  shuffle,
  random_item,
  random_integer,
  now,
}