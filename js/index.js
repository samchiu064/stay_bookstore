var app = {
  settings: {
    booking: $(".reserve__booking"),
    content: $(".reserve__content"),
    description: $(".reserve__desc"),
    payment: $(".reserve__payment"),
    slider: $(".reserve__slider"),
  },

  init: function () {
    instance = this;
    settings = this.settings;

    settings.booking.hide();
    this.bindUIActions();
  },

  swap: function (start, end, currentView, desiredView) {
    settings.slider.css("width", start);
    settings.content.css("width", end);

    currentView.fadeOut(200);

    setTimeout(function () {
      desiredView.fadeIn(600);
    }, 100);
  },

  bindUIActions: function () {
    settings.description.find("button").on("click", function () {
      instance.swap("20%", "80%", settings.description, settings.booking);
      if (document.documentElement.clientWidth <= 768) {
        instance.swap("20%", "100%", settings.description, settings.booking);
      }
    });

    settings.booking.find(".cancel").on("click", function () {
      instance.swap(
        "66.666666%",
        "33.333334%",
        settings.booking,
        settings.description
      );
      if (document.documentElement.clientWidth <= 768) {
        instance.swap("100%", "100%", settings.booking, settings.description);
      }
    });

    settings.booking.find("button").on("click", function () {
      instance.swap(
        "66.666666%",
        "33.333334%",
        settings.booking,
        settings.description
      );
      if (document.documentElement.clientWidth <= 768) {
        instance.swap("100%", "100%", settings.booking, settings.description);
      }

      settings.description
        .find("button")
        .html('完成訂房 <i class="reserve__checkmark"></i>')
        .attr("disabled", "disabled")
        .attr("style", "background:#ccc");
    });
  },
};

app.init();

window.onload = function () {
  const imageCount = 5;
  for (let i = 0; i < imageCount; i++) {
    const imgFileName = `imgs/room-type/single_room/single_room0${i + 2}.jpeg`;
    const liClassName = `small-img0${i + 2}`;
    const li = document.getElementsByClassName(liClassName)[0];
    li.addEventListener("click", () => {
      document.getElementById("main-pic").setAttribute("src", imgFileName);
    });
  }
};
