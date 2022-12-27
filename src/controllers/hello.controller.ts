import { Body, BodyParam, Get, JsonController, Param, Post, QueryParams, Res } from 'routing-controllers';
import { HelloService } from '@webaverse/services/hello.service';
import { Service } from 'typedi';

@JsonController('/hello')
@Service()
export class HelloController {
    constructor(private helloService:HelloService) {
    }

    @Get('')
    async getRequest(@QueryParams() query, @Res() response: any) {
        return response.send(await this.helloService.hello());
    }

    @Post('')
    async postReqeust(@QueryParams() query, @Res() response: any) {
        return response.send(await this.helloService.hello());
    }

}
