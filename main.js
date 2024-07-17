
AOS.init();
const aboutt = $('#about').offset().top;

$(document).scroll(function(){
    // console.log($(document).scrollTop()) 

    if($(document).scrollTop()> aboutt){
        $('.navbar').removeClass('bg-opacity-25')
        $('.navbar').addClass('bg-opacity-100','bg-opacity-25')
        $('.iconnn').css('backgroundColor' , '#333' ,)
        $('.iconnn').css('color' ,'white')
        $('.iconnn').css('display' , 'flex' )
    }
    else{
        
        $('.navbar').removeClass('bg-opacity-100')
        $('.navbar').addClass('bg-opacity-25')
        $('.iconnn').css('display' , 'none' )
    }
})


$('.iconnn').click(function(){
    $('html,body').animate({'scrollTop' : 0} , 500);
})

// $('.navbar li a').click(function(){
//     $('.loading').fadeIn(1000);
//     console.log('hi')
// })

$('document').ready(function(){
    
        $('.loading').fadeOut(2000 , function(){
            $('body').css('overflow' , 'auto')
        });
})