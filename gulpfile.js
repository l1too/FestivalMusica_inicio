const {src, dest, watch} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const plumber = require("gulp-plumber")


function css(done) {
src("src/scss/**/*.scss") //buscar archivo sass
.pipe(plumber())
.pipe(sass()) //compila el archivo sass
.pipe(dest("build/css")) // almacena en disco duro

done()
}

function dev(done){
    watch("src/scss/**/*.scss", css)

    done()
}
exports.css = css;
exports.dev = dev;