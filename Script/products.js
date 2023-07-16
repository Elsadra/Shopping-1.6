$(document).ready(function () {

    // Start submenu

    var isOpen = false;
    $('.bi-list').click(function () {
        if (!isOpen) {
            $('.bi-x-lg').addClass('bi-list').removeClass('bi-x-lg');
            isOpen = true;
            $('.sub-menu').stop(true, true).css({
                "position": "fixed",
                "left": "170%",
                "transition": ".7s"
            });
            $("#navbar").css({
                "transition": ".7",
                "opacity": ".9",
                
            })
            $('#slider').click(function () {
                $('.bi-x-lg').addClass('bi-list').removeClass('bi-x-lg');
                isOpen = true;
                $('.sub-menu').stop(true, true).css({});
                $("#navbar").css({
                    "transition": ".7",
                    "opacity": ".9"
                })
                $('.sub-menu').stop(true, true).css({
                    "position": "fixed",
                    "left": "30%",
                    "transition": ".7s"
                });
                $("#navbar").css({
                    "transition": ".7",
                    "opacity": ".8",
                    "z-index": "12"
                })
            })
        } else {
            isOpen = false;
            $('.bi-list').addClass('bi-x-lg').removeClass('bi-list');
            $('.sub-menu').stop(true, true).css({
                "position": "fixed",
                "left": "30%",
                "transition": ".7s"
            });
            $("#navbar").css({
                "transition": ".7",
                "opacity": ".8",
                "z-index": "12"
            })
            $('#slider').click(function () {
                $('.bi-x-lg').addClass('bi-list').removeClass('bi-x-lg');
                isOpen = true;
                $('.sub-menu').stop(true, true).css({
                    "position": "fixed",
                    "left": "170%",
                    "transition": ".7s"
                });
                $("#navbar").css({
                    "transition": ".7",
                    "opacity": ".9"
                })
                $("#navbar").css({
                    "transition": ".7",
                    "opacity": ".9"
                })
            })
        }
    })

    // end submenu

    // Start navbar

    var myMenuOffset = $("#navbar").offset().top;
    $(window).resize(function () {
        myMenuOffset = $("#navbar").offset().top;
    });

    $(window).on('scroll', function () {
        var scrollvalue = $(window).scrollTop();
        if (scrollvalue > myMenuOffset) {
            $("#navbar").css({
                "position": "fixed",
                "top": "0px",
                "left": "0px",
                "right": "0px",
                "z-index": "12"
            })
        } else {
            $("#navbar").css({
                "position": "fixed",
                "top": "0px",
                "left": "0px",
                "right": "0px",
                "z-index": "12"
            })
        }
    })

    $(window).on('scroll', function () {
        var scrollvalue = $(window).scrollTop();
        if (scrollvalue > 50) {
            $("#navbar").css({
                "position": "fixed",
                "transition": ".7s",
                "opacity": ".6"
            })
        }
        if (scrollvalue < 50) {
            $("#navbar").css({
                "position": "fixed",
                "transition": ".7s",
                "opacity": "1"
            })
        }
    })

    // end navbar

    // Start btn-top

    $(window).on('scroll', function () {
        var scrollvalue = $(window).scrollTop();
        if (scrollvalue > 150) {
            $(".btn-top").css({
                "position": "fixed",
                "top": "85%",
                "right": "2%",
                "transition": ".7",
                "opacity": "1"
            })
        } else {
            $(".btn-top").css({
                "position": "fixed",
                "top": "85%",
                "right": "-100%",
                "transition": ".7",
                "opacity": "0"
            })
        }
    })

    // end btn-top

    // Start cart information

    var isOpen = true;
    $("#product-1").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-information-1").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-1").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        } else {
            isOpen = false;
            $(".patern-cart-information-1").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-1").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    var isOpen = true;
    $("#product-2").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-information-2").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-2").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })

        } else {
            isOpen = false;
            $(".patern-cart-information-2").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-2").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    var isOpen = true;
    $("#product-3").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-information-3").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-3").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })

        } else {
            isOpen = false;
            $(".patern-cart-information-3").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-3").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    var isOpen = true;
    $("#product-4").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-information-4").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-4").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })

        } else {
            isOpen = false;
            $(".patern-cart-information-4").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-4").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    var isOpen = true;
    $("#product-5").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-information-5").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-5").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })

        } else {
            isOpen = false;
            $(".patern-cart-information-5").css({
                "position": "fixed",
                "left": "0%",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-information-back").click(function () {
                $(".patern-cart-information-5").css({
                    "position": "fixed",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    // end cart information

    // Start cart-buy

    var isOpen = true;
    $(".cart-shop-btn").click(function () {
        if (!isOpen) {
            isOpen = true;
            $(".patern-cart-buy").stop(true, true).css({
                "position": "absolute",
                "top": "0",
                "left": "0",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-buy-back-btn").click(function () {
                $(".patern-cart-buy").stop(true, true).css({
                    "position": "fixed",
                    "top": "0",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
                $(".patern-cart-buy").click(function () {
                    $(".patern-cart-buy").stop(true, true).css({
                        "position": "fixed",
                        "top": "0",
                        "left": "100%",
                        "opacity": "0",
                        "transition": ".7s"
                    })
                })
            })
        } else {
            isOpen = false;
            $(".patern-cart-buy").stop(true, true).css({
                "position": "absolute",
                "top": "0",
                "left": "0",
                "opacity": "1",
                "transition": ".7s"
            })
            $(".cart-buy-back-btn").click(function () {
                $(".patern-cart-buy").stop(true, true).css({
                    "position": "fixed",
                    "top": "0",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
            $(".patern-cart-buy").click(function () {
                $(".patern-cart-buy").stop(true, true).css({
                    "position": "fixed",
                    "top": "0",
                    "left": "100%",
                    "opacity": "0",
                    "transition": ".7s"
                })
            })
        }
    })

    // end cart-buy
})