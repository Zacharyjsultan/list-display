export function renderDisciplines(discipline) {
    const DivTag = document.createElement('div');
    DivTag.textContent = discipline;
    DivTag.classList.add('discipline-kind');

    return DivTag;
}

console.log(renderDisciplines);