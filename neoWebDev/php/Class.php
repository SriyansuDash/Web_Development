<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class and Objects</title>
</head>
<body>
    <?php
    Class phones{
        public $brand;
        public $model;
        function set_brand($brand){
            $this->brand = $brand;
        }
        function get_brand(){
            return $this->brand;
        }
        function set_model($model){
            $this->model = $model;
        }
        function get_model(){
            return $this->model;
        }
    }
    $apple = new phones();
    
    ?>
</body>
</html>