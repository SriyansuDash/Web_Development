
$(document).ready(function () {
    // Your Jquerry code will execute here        
    console.log("This is jQuerry");
    $('h1').click();
    $('h1').click(function () {
        console.log("H1 is clicked");
        // $('h1').hide();
        // $(this).hide();
    })

    /*There are three type of selectors in jQuerry
    1. Element selector: $('h1')
    2. Id Selector
    3. Class Selector
    */
    //Element Selctor
    $('p').click(function () {
        console.log("H1 is clicked");
        $('p').css('color', 'blue');
    })
    //id selector 
    $('#first').click(function () {
        $('#first').css('color', 'red');
    })
    $('#second').click(function () {
        console.log("Secoond is hidden");
        $('#second').hide();
    });

    //Class Selector
    $('.Phones').click(function () {
        console.log("Phone is clicked", this);
        $('.Phones').css('color', 'orange')
    })

    $('p').dblclick(function () {
        console.log("Third is double clicked");
    })
    $('#four').mouseenter(function () {
        console.log("You enter the mouse", this);
    })
    $('#five').mouseleave(function () {
        console.log("Your mouse is leave", this);
    }, function () {
        console.log("Thanks For comming");
    })
    $('#six').mousedown(function () {
        console.log('your mouse is down', this)
    })
    $('#p2').on({
        click: function () {
            console.log(this, "para is clicked",);
        },
        mouseleave: function () {
            console.log("You Hover your mouse on ", this);
        }
    })
    // $('#wiki').hide(2000, function(){
    //     console.log("Your content is hidden now");
    //     $("#wiki").show(3000 , function(){
    //         console.log("Your content is visible now");
    //     })
    // })
    $("#w").click( function(){
        $("#wiki").toggle(4000);
    })
    $("#wiki").animate({
        opacity :0.5,
        height :300 ,
        width: '600px'
    },10000)
    $("#wiki").animate({opacity:1},1000)
    $("#btn").click(function(){
        $("#wiki").text("This is new text");
    })
    $("#stp").click(function(){
        $("#wiki").stop();
    })
})

