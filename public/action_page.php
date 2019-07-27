<html>
<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Travellister</title>
    <link href='https://fonts.googleapis.com/css?family=Kalam' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Alegreya Sans SC" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent Pro" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Allan" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Fira+Sans|Roboto:300,400|Questrial|Satisfy">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
<body>

Welcome Traveller. <br>
We see that you are a <?php echo $_GET["TProfile"]; ?> and you are travelling in a size of <?php echo $_GET["TGSize"]; ?>.<br>
Your trip length is: <?php echo $_GET["TLength"]; ?>.<br>
Your accomodation type is <?php echo $_GET["TOAccomodation"]; ?> and the expected weather is <?php echo $_GET["TOWeather"]; ?>.<br>
Outdoor activities are a <?php echo $_GET["Outdoor"]; ?> and water activities are a <?php echo $_GET["Water"]; ?>.<br>

Here is your packing list: 

</body>
</html>