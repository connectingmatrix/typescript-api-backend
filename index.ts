import { Search } from '@webaverse/index';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv as any;

if (!argv.api) {
    console.log('Starting single only!');
    if (!argv.path) {
        console.log('No path supplied!');
        process.exit(0);
    }

} else if (process.env.DEBUG) {
    Promise.all([
        Search.start(),
    ]);
} else {
    console.log('Starting server tests only!');
    Search.start();
}

process.on('unhandledRejection', (e) => {
    console.log(e);
});
