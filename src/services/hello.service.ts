import { Service } from 'typedi';
import hash from 'object-hash';

const cache: {
    [key: string]: {
        time: number,
        value: any
    }
} | {} = {};

@Service()
export class HelloService {
    constructor() {
    }

    async hello(param1?: string) {
        return {hello : "world"};
    }
}
