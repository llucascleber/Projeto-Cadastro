// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const clientesList = document.getElementById('clientesList');

    const loadClientes = async () => {
        const response = await fetch('read.php');
        const clientes = await response.json();
        clientesList.innerHTML = '';
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.endereco}</td>
                <td>
                    <button onclick="editCliente(${cliente.id})">Editar</button>
                    <button onclick="deleteCliente(${cliente.id})">Deletar</button>
                </td>
            `;
            clientesList.appendChild(row);
        });
    };

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const id = document.getElementById('clienteId').value;
        const url = id ? 'update.php' : 'create.php';

        await fetch(url, {
            method: 'POST',
            body: formData
        });

        form.reset();
        loadClientes();
    });

    window.editCliente = async (id) => {
        const response = await fetch(`read.php?id=${id}`);
        const cliente = await response.json();
        document.getElementById('clienteId').value = cliente.id;
        document.getElementById('nome').value = cliente.nome;
        document.getElementById('email').value = cliente.email;
        document.getElementById('telefone').value = cliente.telefone;
        document.getElementById('endereco').value = cliente.endereco;
    };

    window.deleteCliente = async (id) => {
        if (confirm('Tem certeza que deseja deletar este cliente?')) {
            await fetch('delete.php', {
                method: 'POST',
                body: new URLSearchParams({ id })
            });
            loadClientes();
        }
    };

    loadClientes();
});
