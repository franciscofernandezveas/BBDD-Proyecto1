<?php 

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['rut']) >= 1 && strlen($_POST['especialidad']) >= 1    ) {
	    $name = trim($_POST['name']);
        $rut = trim($_POST['rut']);
	    $especialidad = trim($_POST['especialidad']);
	    $fechareg = date("d/m/y");
	    $consulta = "INSERT INTO medico(nombre, rut, especialidad, fecha_reg) VALUES ('$name','$rut','$especialidad','$fechareg')";
	    $resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {
	    	?> 
	    	<h3 class="ok">¡Te has inscripto correctamente!</h3>
           <?php
	    } else {
	    	?> 
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    }   else {
	    	?> 
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>