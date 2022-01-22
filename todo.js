// alert("ajsldaj");

let choice = prompt('What would you like to do: new, list, delete, or quit:');

const record = ['watch a movie', 'read a book'];

while (choice !== 'quit') {
    if (choice === 'list') {
        console.log('**********');
        for (let i = 0; i < record.length; i++) {
            console.log(`${i}: ${record[i]}`);
        }
        console.log('**********');
    } else if (choice === 'new') {
        const newTodo = prompt('Enter new todo');
        record.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (choice === 'delete') {
        let index = parseInt(prompt('Enter index of todo to delete'));
        if(!Number.isNaN(index)){
            const del = record.splice(index, 1);
            console.log(`${del[0]} is removed`);
        } else {
            console.log('Not a valid index. Please re-enter:')
        }
    } 
    choice = prompt('what would you like to do: new, list, delete, or quit:');
}
console.log('OK, YOU QUIT THE APP');



