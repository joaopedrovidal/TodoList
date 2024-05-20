    let tarefas = [];

    function renderizartarefas(){
        let todolist = document.getElementById("todolist");
        todolist.innerHTML = '';

        tarefas.forEach((tarefas, index) => {
            let li = document.createElement('li'); 
            li.className = 'todo-item';

            let span = document.createElement('span');
            span.text = tarefas;

            let editbotao = document.createElement('buttton');
            editbotao.textContent = 'Edit';
            editibotao.onclick = () => edittarefas(index);

            let deletebotao = docuemnte.createElement('button');
            deletebotao.textContent = 'Delete';
            editbotao.onclick = () => edittarefas(index);

            li.appendChild(span);
            li.appendChild(editbotao);
            li.append(deletebotao);

            todolist.appendChild(li);
        })
    }

    function adicionar(){
        let inputNovaTarefa = documument.getElementById("adicionaritem");
        let novatarefa = inputNovaTarefa.value.trim();

        if (novatarefa){
            tarefas.push(novatarefa);
            inputNovaTarefa.value = '';
            renderizartarefas();
        }
    }

    function deletartarefas(index){
        tarefas.splice(index, 1);
        renderizartarefas();
    }

    function edittarefas(index){
        let novatarefa = prompt('Edite essa tarefa: ', tarefas[index]);
        if (novatarefa !== null) {
            tarefas[index] = novatarefa.trim();
            renderizartarefas();
        }
    }

    renderizartarefas();

