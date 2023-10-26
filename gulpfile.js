const { src, watch, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done){
    
    src('src/scss/app.scss')//Identificar archivo SASS
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css')); //Almacenarlo en el destino
    
    
    
    done(); //callback
}

function dev(done){
    watch("src/scss/app.scss", css);
    done();
}

exports.css=css;
exports.dev=dev;