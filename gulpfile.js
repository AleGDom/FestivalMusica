const { src, watch, dest } = require("gulp");
const plumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass'));


//imagenes
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const avif=require("gulp-avif");



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
function toavif(done){

    const opciones={
        quality :50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'));
    done();
}

function imagenes(done){
    const opciones={
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}
function js(done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'));
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", js);
    done();
}

exports.css=css;
exports.towebp=towebp;
exports.dev=dev;
exports.imagenes=imagenes;
exports.toavif=toavif;
exports.js=js;