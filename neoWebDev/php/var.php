<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variable in PHP</title>
</head>
<body>
    <?php
    $g = 56;
    $h = 76;
    echo "The value of variable g is $g and h is $h";

    function printvar(){
        global $g;
        print "Local variable is $g";
    }
    echo "<br>";
    echo "The variable s $g , $h";
    echo "<br>";
    echo var_dump($GLOBALS["g"]);
    print "<br>";
    print var_dump($GLOBALS["h"]);
    ?>
</body>
</html>