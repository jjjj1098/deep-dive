interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean
}

const bear1: Bear = {
  name: 'Bear',
  honey: true
}