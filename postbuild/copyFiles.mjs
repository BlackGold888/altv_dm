import gulp from 'gulp';
import path from 'path';
import using from 'gulp-using';
import fs from 'fs';
import fkill from 'fkill';
import { spawn } from 'child_process';

const __dirname = process.cwd();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));

console.log(`[TS] Beginning File Copy`);

// cfg files
const cfgSyntax = `./src/**/*.cfg`;
gulp.src([path.join(__dirname, cfgSyntax)]).pipe(using({}));
gulp.src([path.join(__dirname, cfgSyntax)]).pipe(gulp.dest(path.join(__dirname, '/resources')));

// src-copy directory
const directorySyntax = './src-copy/**/*';
gulp.src([path.join(__dirname, directorySyntax)]).pipe(using({}));
gulp.src([path.join(__dirname, directorySyntax)]).pipe(gulp.dest(path.join(__dirname, '/resources')));

console.log(`[TS] Finished Copying Files`);

if (config.restartServerAfterCopy) {
    (async () => {
        await fkill('altv-server.exe').catch((err) => {
            return;
        });

        await fkill('altv-server').catch((err) => {
            return;
        });

        await fkill('start.sh').catch((err) => {
            return;
        });

        if (fs.existsSync(path.join(__dirname, `altv-server.exe`))) {
            console.log(`Started Windows Server for alt:V`);
            spawn(`cmd`, ['/C', 'start altv-server.exe'], { detached: true, stdio: 'inherit' });
        }

        if (fs.existsSync(path.join(__dirname, 'start.sh'))) {
            console.log(`Started Linux Server for alt:V`);
            spawn(`/bin/sh`, ['start.sh'], { detached: true, stdio: 'inherit' });
        }
    })();
}
