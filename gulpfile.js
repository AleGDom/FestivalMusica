const { src, watch, dest } = require("gulp");
const plumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass'));

//imagenes

const webp = require("gulp-webp");



function css(done){
    
    src('src/scss/**/*.scss')//Identificar archivo SASS
    .pipe(plumber())
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css')); //Almacenarlo en el destino
    
    
    
    done(); //callback
}

function towebp(done){

    const opciones={
        quality :50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'));
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}

exports.css=css;
exports.towebp=towebp;
exports.dev=dev;