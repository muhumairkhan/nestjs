import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesService {

    private posts: {
        id: number;
        title: string;
        content: string;
    }[];

    constructor(){
        this.posts = [
            {
                id: 1,
                title: "Post 1",
                content: "Post 1 content"
            },
            {
                id: 2,
                title: "Post 2",
                content: "Post 2 content"
            },
            {
                id: 3,
                title: "Post 3",
                content: "Post 3 content"
            },
            {
                id: 4,
                title: "Post 4",
                content: "Post 4 content"
            }
        ];
    }

    findMany() {
        return this.posts;
    }

    findUnique(id: number){
        return this.posts.filter(post => post.id==id);
    }

    remove(id: number) {
        
    }

}
