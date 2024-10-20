<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARRAY</title>
</head>
<body>
    <?php
    class Car {
        public $color;
        public $model;
        public function __construct($color , $model) {
            $this->color = $color;
            $this->model = $model;
        }
        public function message(){
            return "My car is a ". $this->color ." " .$this->model;
        }
    }
    $mycar = new Car("Black","BMW");
    echo $mycar -> message();
    echo"<br>";
    $mycar = new Car("yellow" ,"Lamborghini");
    echo $mycar->message();
    ?>
    <hr>
    <?php
    class Morons{
        public $name ;
        public $phone ;
        public function __construct($name , $phone){
            $this->name = $name;
            $this->phone = $phone;
        }
        public function message(){
            return "I am ".$this->name." And my phone name ". $this->phone;
        }
    }
    $moron = new Morons("Sriyansu" , "iQOO Neo 6");
    echo $moron->message();
    ?>
    <hr>
    <?php
    class Phone{
        public $brand;
        public $model;
        public function __construct($brand,$model){
            $this->brand = $brand;
            $this->model = $model;
        }
        public function message(){
            return $this->brand." ".$this->model;
        }
    }
    $phone = new Phone("Google","pixel 8");
        echo $phone->message();
    ?>
</body>
</html>