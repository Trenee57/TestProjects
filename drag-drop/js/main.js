const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const js = document.querySelectorAll('.js');
const css = document.querySelectorAll('.css');

//Fill lisenters

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through the empties and call drag events
for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0)
    highlight();
}

function dragEnd(){
    this.className = 'fill';

}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';

}
function dragLeave(){
    this.className = 'empty';
}
function dragDrop(){
    this.className = 'empty';
    this.append(fill);
    normalText();
}

// Highlight Functions
function highlight(){
    js.forEach(light => {
        light.classList.add('underline')
    })
    // css.forEach(light => {
    //     light.classList.add('underline')
    // })
}

function normalText() {
    js.forEach(light => {
        light.classList.toggle('underline')
    })
    // css.forEach(light => {
    //     light.classList.toggle('underline')
    // })
}