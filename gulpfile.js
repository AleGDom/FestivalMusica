const { src, watch, dest } = require("gulp");
const plumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass'));


function css(done){
    
    src('src/scss/**/*.scss')//Identificar archivo SASS
    .pipe(plumber())
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css')); //Almacenarlo en el destino
    
    
    
    done(); //callback
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}

exports.css=css;
exports.dev=dev;