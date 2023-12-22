document.addEventListener('DOMContentLoaded', () => {
    const skill = document.querySelector('.lista-conocimientos');

    if(skill){
        skill.addEventListener('click', agregarSkills)
    }

})

const skills = new Set()

const agregarSkills = (e : Event) => {
    if((e.target as HTMLLIElement).tagName === 'LI'){
        if((e.target as HTMLLIElement).classList.contains('activo')){
            //* Quitarlo del Set y quitar la clase
            skills.delete((e.target as HTMLLIElement).textContent);
            (e.target as HTMLLIElement).classList.remove('activo')
        } else {
            //* Agregarlo al Set y agregar la clase
            skills.add((e.target as HTMLLIElement).textContent);
            (e.target as HTMLLIElement).classList.add('activo')
        }
    } 
    
    const skillsArray = [...skills];
    (document.querySelector('#skills') as HTMLInputElement).value = skillsArray as any


}