const { series, src, dest } = require('gulp');



exports.default = series(
    copyPublicToDist
);


function copyPublicToDist() {
    return (
        src('./public/**/*')
        .pipe(dest('./test'))
        .pipe(dest('./dist'))
    );
}