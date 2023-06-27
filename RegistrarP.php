<!DOCTYPE html>
<html>
<head>
	<title>Registrar Paciente</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
    <form method="post">
    	<h1>Registrar Paciente</h1>
    	<input type="text" name="name" placeholder="Nombre completo">
        <input type="text" name="rut" placeholder="rut completo">
    	<input type="email" name="email" placeholder="Email">
    	<input type="submit" name="register">
    </form>
        <?php 
        include("Registrarpaciente.php");
        ?>
</body>
</html>