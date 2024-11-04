document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menuForm');
    console.log("CHEGOU AO EVENTO CORRETO")
    if (form) { 
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);

            const formDataObject = {};
            for (let [key, value] of formData.entries()) {
                if (key == 'img'){
                    formDataObject[key] = value.name; 
                }else{
                    formDataObject[key] = value;
                }
            }
            
            console.log(formDataObject)

            fetch('/api/menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject)  
            })
            .then(response => {
                if (response.ok) {
                    showAlert('Item criado com sucesso!', 'success');
                    form.reset();
                } else {
                    showAlert('Erro ao criar o item.', 'danger');
                }
            })
            .catch(error => {
                console.log(error)
                showAlert('Ocorreu um erro: ' + error.message, 'danger');
            });
        });
    } else {
        console.error("Formulário não encontrado.");
    }
});

function deleteItem(itemId) {
    fetch(`/api/menu/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: itemId })
    })
    .then(response => {
        if (response.ok) {
            showAlert('Item excluído com sucesso!', 'success');
            const itemCard = document.getElementById(`item-${itemId}`);
            if (itemCard) {
                itemCard.remove()
            }
        } else {
            showAlert('Erro ao excluir o item.', 'danger');
        }
    })
    .catch(error => {
        showAlert('Ocorreu um erro: ' + error.message, 'danger');
    });
}

function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `${message}`;

    alertContainer.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}