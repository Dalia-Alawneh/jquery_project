$("#home").animate({width:'100%'},2000).animate(
    {height:'100vh'},2000, function(){
        $('h1').show(1000,function(){
            $('p').fadeIn(1000,function(){
                $('.items').fadeIn(3000);
            })
        })
    });