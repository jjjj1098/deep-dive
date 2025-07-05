interface getLikeNumber {
  (Like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post1 = {
  id: 1,
  title: 'post 1',
  getLikeNumber(Like: number) {
    return Like;
  }
}