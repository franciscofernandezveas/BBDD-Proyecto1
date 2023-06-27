<!DOCTYPE html>
<html>
<head>
	<title>Registrar Medico</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
    <form method="post">
    	<h1>Registrar Medico</h1>
    	<input type="text" name="name" placeholder="Nombre completo">
        <input type="text" name="rut" placeholder="rut completo">
    	<input type="text" name="especialidad" placeholder="especialidad">
    	<input type="submit" name="register">
    </form>
        <?php 
        include("Registrarmedico.php");
        ?>
</body>
</html>