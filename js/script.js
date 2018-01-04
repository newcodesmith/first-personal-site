$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll on click of Top Nav Button
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

//Top Nav button highlight on scroll
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#main-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#main-nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}


//Goal info show and hide with highlight of button
$('#goal_1_button').click(function () {
    $('#goal_1').show();
    $('#goal_2, #goal_3').hide();
    $('#goal_2_button, #goal_3_button').removeClass('active')
    $('#goal_1_button').addClass('active');
});

$('#goal_2_button').click(function () {
    $('#goal_2').show();
    $('#goal_1, #goal_3').hide();
    $('#goal_1_button, #goal_3_button').removeClass('active')
    $('#goal_2_button').addClass('active');
});

$('#goal_3_button').click(function () {
    $('#goal_3').show();
    $('#goal_1, #goal_2').hide();
    $('#goal_1_button, #goal_2_button').removeClass('active')
    $('#goal_3_button').addClass('active');
});

//Learn to Learn info show and hide with highlight of button
$('#learn_1_button').click(function () {
    $('#learn_1').show();
    $('#learn_2, #learn_3').hide();
    $('#learn_2_button, #learn_3_button').removeClass('active')
    $('#learn_1_button').addClass('active');
});

$('#learn_2_button').click(function () {
    $('#learn_2').show();
    $('#learn_1, #learn_3').hide();
    $('#learn_1_button, #Learn_3_button').removeClass('active')
    $('#learn_2_button').addClass('active');
});

$('#learn_3_button').click(function () {
    $('#learn_3').show();
    $('#learn_1, #learn_2').hide();
    $('#learn_1_button, #learn_2_button').removeClass('active')
    $('#learn_3_button').addClass('active');
});

//meet up's info show and hide with highlight of button
$('#meet_1_button').click(function () {
    $('#meet_1').show();
    $('#meet_2, #meet_3').hide();
    $('#meet_2_button, #meet_3_button').removeClass('active')
    $('#meet_1_button').addClass('active');
});

$('#meet_2_button').click(function () {
    $('#meet_2').show();
    $('#meet_1, #meet_3').hide();
    $('#meet_1_button, #meet_3_button').removeClass('active')
    $('#meet_2_button').addClass('active');
});

$('#meet_3_button').click(function () {
    $('#meet_3').show();
    $('#meet_1, #meet_2').hide();
    $('#meet_1_button, #meet_2_button').removeClass('active')
    $('#meet_3_button').addClass('active');
});