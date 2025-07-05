class Post {
  //private id: number = 0;
  //private title: string = "";

  constructor(
    public id: number, 
    public title: string) {
  }

  public getPost(){
    return `postId ${this.id}, postTitle ${this.title}`;
  }
}

class PostB extends Post {
  getPostB() {
    return this.id;
  }
}