// update.php
<?php
include 'db.php';

$id = $_POST['id'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];

$sql = "UPDATE clientes SET nome='$nome', email='$email', telefone='$telefone', endereco='$endereco' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Cliente atualizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
