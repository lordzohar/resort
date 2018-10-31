<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<link rel="stylesheet" type="text/css" href="style.css">

<h3>Booking Confirmed!--</h3>
<H2>Scheduled for booking</H2>


<table>
	<th>Count per person</th>
	<th>Checck IN    </th>
	<th>Check OUT   </th>
	<th>Room number     </th>
	<th>Price ($)</th>
	<tr>
	<td><?php echo $_GET['count'];?></td>
	<td><?php echo $_GET['checkin'];?></td>
	<td><?php echo $_GET['checkout'];?></td>
	<td><?php foreach($_GET['roomno'] as $value){echo $value . "<br>";} ?></td>
	<td><?php echo array_sum($_GET['price']);?></td>
</tr>
</table>


<?php
//var_dump($_GET);
// $query  = explode('&', $_SERVER['QUERY_STRING']);
// $params = array();

// foreach( $query as $param )
// {
//   list($name, $value) = explode('=', $param, 2);
//   $params[urldecode($name)][] = urldecode($value);
// }

?>



</body>
</html>