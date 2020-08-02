<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Simple Stopwatch</title>
		<link href="./style.css" rel="stylesheet">
	</head>

	<body>

		<div id='timer'>00:00:00:00</div>
		<div id='labels'>
			<span id='hh'>Hours</span>
			<span id='mm'>Minutes</span>
			<span id='ss'>Seconds</span>
			<span id='ms'>Centiseconds</span>
		</div>

		<div id='controls'>
			<button onclick='startTimer()' id='go'>Go</button>
			<button onclick='stopTimer()'  id='stop'>Stop</button>
			<button onclick='clearTimer()' id='clear'>Clear</button>
		</div>

		<script src="index.js"></script>

	</body>
</html>
