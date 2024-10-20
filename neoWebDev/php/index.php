<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP INDEX</title>
</head>
<body style = "background-color: lightblue">
    <pre>
    <?php
    echo "Hello World! ";
    echo "<br>";
    echo 6+4;
    echo "<br>";
    $text = "New php ";
    echo "<br>";
    echo "This is $text";
    echo "<br>";
    $var1 =4;
    $var2 = 5;
    echo $var1+$var2;
    ?>
    <br>
    <hr>
    <?php
        $s=4;
        function myTest(){
            echo "this is a function s(global variabele) which is not print inside function ";
        }
        myTest();
        echo "<br>";
        echo "this is a function $s";
    ?>
<hr>
    <?php
    function f1(){
        $f="new txt function";
        echo "<br>";
        echo "This is a local(inside) function f1 which value is $f";
    }
    echo "<br>";
    f1();
    ?>  
    <?php
    print "Hello World !";
    ?>
<br>
<br>
<hr>
<br>
    <?
    $x = 2;
    $y = 88;
    $z = $x+$y;
    echo "Numbers are $x & $y";
    print "<br>";
    echo "Sum of two number is $z";
    ?>

    <br><br><hr>
    <?php
    $x = 99.5;
    $r = 88;
    var_dump($x);// Detects the number cataogry (int , float , short ....)
    ?>
    <br><br><hr>
    <?php
    $cars = array("Volvo","BMW","Lamborghini") ;
    var_dump($cars);
    ?>
    <br><br><br><hr>
    <?php
    echo "This is php min value :", PHP_INT_MIN;
    echo"<br>";
    echo "This is php max value : ", PHP_INT_MAX;
    echo "<br>";
    $x = "44";
    print "X value $x";
    echo "<br>";
    var_dump($x);
    ?>
    <hr>
    <br>
    <br>
    <?php
    $a = null;
    echo "Hello world !";
    var_dump($a);
    ?>
    <hr>
    <?php
    $guns = array("M416","AKM","SCAR-L");
    var_dump($guns);
    ?>
    <hr>
    <?php
    $x = 66.09;
    var_dump($x);
    ?>
    <?php
    class Mobile{
        public $Brand;
        public $Model;
        public function __construct($Brand,$Model){
            $this->Brand = $Brand;
            $this->Model = $Model;
        }
        public function message(){
            return "My phone Brand is ".$this->Brand ." & model name is ". $this->Model;
        }
    }
    $phone = new Mobile("Google", "Pixel 8 pro");
    echo $phone ->message();
    echo "<br>";
    $phone = new Mobile("Google","Pixel 8");
    echo $phone -> message();
    echo "<br>";
    $phone = new Mobile("Apple","iPhone XR");
    print $phone->message();
    echo "<br>";
    ?>
    <hr>
    <?php
    $x = 99;
    var_dump(is_int($x));
    var_dump(is_string($x));
    ?>
    <hr>
    <?php
    $c = 5;
    ?>
    <hr>
    <?php
    $color = "blue";
    switch ($color) {
        case "red":
            echo "This color is red";
        break;
        case "blue":
            echo "This is blue color ";
        break;  
        case "purple":
        echo "This is purple color";
        }
    ?>
    <hr>
    <?php
    $fruit = array("Apple","orange","Banana","mango");
    // for ($i=0; $i < count($fruit); $i++) { 
    //     echo $fruit[$i];
    //     echo "<br>";
    // }
    var_dump($fruit);
    foreach ($fruit as $value){
        echo "$value <br>";
    }

    $i=0;
    while($i<5){
        print "Hello World $i <br>";
        $i++;
    }
    echo "<hr>";
    $i=0;
    do{
        print "Hello World $i <br>";
        $i++;
    }while ($i <= 10) ;
    ?>
    <hr>
    <?php
    $google = array("Pixel 8","Pixel 8 pro","pixel 7");
    echo $google[0];
    echo "<br>";
    echo $google[2];
    ?>

<?php
define("GREETING", "PHP is a scripting language");
echo $GREETING;
?>
     
</pre>
</body>
</html>