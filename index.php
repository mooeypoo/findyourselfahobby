<?php

$data = json_decode( file_get_contents('data.json'), true );

$introIndex = 'basic';
if (
	isset( $_GET[ 'intro' ] ) &&
	isset( $data['intros'][$_GET[ 'intro' ]] )
) {
	$introIndex = $_GET[ 'intro' ];
}

$intro = $data['intros'][$introIndex];
$hobby = $data["hobbies"][ array_rand( $data["hobbies"] ) ];
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		<meta name="author" content="Get a hobby">
		<title>I think you need a hobby</title>

		<!-- Bootstrap core CSS -->
		<link href="assets/main.css" rel="stylesheet" />
	</head>
	<body class="bg-light">
		<div class="container">
			<div class="intro"><?php echo $intro; ?></div>
			<div class="reg">Why don't you try this hobby instead:</div>
			<div class="hobby"><?php echo $hobby; ?></div>
			<div class="reg">Be great at it! Be the best, and enjoy!</div>
		</div> <!-- container -->

		<script src="assets/lib/jquery-3.3.1.slim.min.js"></script>
	</body>
</html>
