<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi dimensional Array </title>
</head>
<body>
    $multidim = array(array(2,3,4),
    array(5,6,7), array(8,9,10));
    for($i=0;$i<count($multidim);$i++){
        for($j=0;$j< count($multidim[$i]);j++){
            echo $multidim[$i][$j];
            echo " ";
        }
        echo "<br>";
        
    }
</body>
</html>