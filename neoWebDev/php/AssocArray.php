<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Associative Array</title>
</head>
<body>
    <font face size = 6>
        <p align = "center">
    <?php
    $phone = array('Google' => 'Pixel 8 ', 'Apple' =>'iPhone 15', 'Samsung'=>'Galaxy s23 Ultra');
    echo $phone['Google'];
    echo $phone ['Apple'];
    ?>
    <hr>
    <?php
    $cars = array('BMW'=>'m5 CS', 'Lamborghini' => 'Urus', 'Nissan' => 'GTR R35');
    echo "<br>";
    foreach($cars as $array => $val){
        echo "$array =>$val <br>";
        echo "<br>"; 
    }
    ?>
    <hr>
    </p>
    </font>
</body>
</html>