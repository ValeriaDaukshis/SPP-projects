export class Task{
    constructor(
        public id: string,
        public name: string,
        public deadline: string,
        public details: string,
        public isMade: boolean,
    ){}
}