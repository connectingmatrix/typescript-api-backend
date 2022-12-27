import 'reflect-metadata';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import { HelloController } from '@webaverse/controllers/hello.controller';

export const Search = {
    start: () => {
        useContainer(Container);

        const app = express();

        app.use(function (req, res, next) {
            req.setTimeout(0); // no timeout for all requests, your server will be DoS'd
            next();
        });

        app.use(express.urlencoded({ extended: true }));

        // Configure controllers
        useExpressServer(app, {
            routePrefix: '/api',
            controllers: [
                HelloController
            ],
        });

        app.get('*', (req, res, next) => {
            if (req.path.startsWith('/api')) {
                next();
            } else {
                res.end();
            }
        });

        const server = app.listen(process.env.PORT || 3000, () => {
            // eslint-disable-next-line no-console
            console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT || 3000}`);
        });

        server.setTimeout(0);
    },
};

Search.start();