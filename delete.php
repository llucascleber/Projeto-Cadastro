// delete.php
<?php
include 'db.php';

$id = $_POST['id'];

$sql = "DELETE FROM clientes WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Cliente deletado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
