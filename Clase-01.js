const juan = {
    name: 'JuanDC',
    age: 25,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse)
        console.log(this.approvedCourses);
    }
}
console.log(Object.getOwnPropertyDescriptors(juan));
Object.defineProperty(juan, 'PruebaNasa', {
    writable:true, 
    configurable:true, 
    value: 'Extraterrestres', 
    enumerable:true
});
console.log(juan);

/* console.log('Keys',Object.keys(juan))
console.log('getOwnPropertyNames',Object.getOwnPropertyNames(juan))
console.log("entries",Object.entries(juan)) */

//console.log("entries",Object.entries(juan)[3][1]("Curso2"))


// Lo que pasa es que al usar object.entries, juan se convierte en un array de arrays por lo que el .this hace referencia a ["addCourse", f]
// entonces deja de ser el this del objeto juan, sino el this del Array mencionado


