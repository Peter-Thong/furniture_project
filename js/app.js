$(document).ready(function () {
  $.keyframe.define([
    {
      name: "navLinkFade",
      from: {
        opacity: "0",
        transform: "translateX(-50px);",
      },
      to: {
        opacity: "1",
        transform: "translateX(0px);",
      },
    },
  ]);
  $(".navigation__burger").click(() => {
    $(".navigation__list").toggleClass("navigation-active");
    $(".navigation__item").each((index, link) => {
      $(link).playKeyframe({
        name: "navLinkFade",
        duration: "0.5s",
        timingFunction: "ease",
        delay: `${index / 7 + 0.3}s`,
        fillMode: "forwards",
        complete: function () {},
      });
    });

    $(".navigation__burger").toggleClass("navigation__burger--toggle");
  });

  $(".product-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
