<template>
  <div>
    <div class="container">
      <div class="close-btn">
        <span class="close-cross">&nbsp;</span>
      </div>
      <div class="container-heading">
        <h1>How did we do?</h1>
        <p>Please let us know how your food delievery was. It will really help us to keep improving our service!</p>
      </div>
      <div class="container-rate-food">
        <div>
          <h2>How would you rate your food?</h2>
        </div>
        <div class="stars" data-rating="3">
          <span class="star">&nbsp;</span>
          <span class="star">&nbsp;</span>
          <span class="star">&nbsp;</span>
          <span class="star">&nbsp;</span>
          <span class="star">&nbsp;</span>
        </div>
      </div>
      <div class="container-rate-delivery">
        <div>
          <h2>How would you rate your delivery driver?</h2>
        </div>
        <div class="stars2" data-rating="3">
          <span class="star2">&nbsp;</span>
          <span class="star2">&nbsp;</span>
          <span class="star2">&nbsp;</span>
          <span class="star2">&nbsp;</span>
          <span class="star2">&nbsp;</span>
        </div>
      </div>
      <div class="container-rate-overall">
        <div>
          <h2>How would you rate your overall experience?</h2>
        </div>
        <div class="stars3" data-rating="3">
          <span class="star3">&nbsp;</span>
          <span class="star3">&nbsp;</span>
          <span class="star3">&nbsp;</span>
          <span class="star3">&nbsp;</span>
          <span class="star3">&nbsp;</span>
        </div>
      </div>
      <div class="container-form-submit">
        <button class="form-submit">Submit feedback</button>
      </div>
    </div>

    <div class="container hide submitted">
      <p>Form submitted!!! 😁</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadApp();
  },
  methods: {
    loadApp() {
      //initial setup
      document.addEventListener("DOMContentLoaded", function() {
        addListeners();
        setRating(); //based on value inside the div
        setRating2();
        setRating3();
      });

      function addListeners(starList, starListItem) {
        var stars = document.querySelectorAll(starList);
        [].forEach.call(stars, function(star, index) {
          star.addEventListener(
            "click",
            function(idx) {
              // console.log('adding rating on', index);
              document
                .querySelector(starListItem)
                .setAttribute("data-rating", idx + 1);

              // Checks to see which star list was clicked and then logs the amount of stars to the console.
              if (starList === ".star") {
                console.log("Rating for food is now", idx + 1);
                starRatingFood = idx + 1;
              } else if (starList === ".star2") {
                console.log("Rating for delivery is now", idx + 1);
                starRatingDelivery = idx + 1;
              } else {
                console.log("Rating overall is now", idx + 1);
                starRatingOverall = idx + 1;
              }

              setRating(starList, starListItem);
              setRating2(starList, starListItem);
              setRating3(starList, starListItem);
            }.bind(window, index)
          );
        });
      }

      // Creates event click listeners for all star component boxes
      addListeners(".star", ".stars");
      addListeners(".star2", ".stars2");
      addListeners(".star3", ".stars3");

      // Sets star rating for the food component
      function setRating() {
        var stars = document.querySelectorAll(".star");
        var rating = parseInt(
          document.querySelector(".stars").getAttribute("data-rating")
        );

        [].forEach.call(stars, function(star, index) {
          if (rating > index) {
            star.classList.add("rated");
            console.log("added rated on", index);
          } else {
            star.classList.remove("rated");
            console.log("removed rated on", index);
          }
        });
      }

      // Sets star rating for the delivery component
      function setRating2() {
        var stars = document.querySelectorAll(".star2");
        var rating = parseInt(
          document.querySelector(".stars2").getAttribute("data-rating")
        );

        [].forEach.call(stars, function(star, index) {
          if (rating > index) {
            star.classList.add("rated");
            console.log("added rated on", index);
          } else {
            star.classList.remove("rated");
            console.log("removed rated on", index);
          }
        });
      }

      // Sets star rating for the overall component
      function setRating3() {
        var stars = document.querySelectorAll(".star3");
        var rating = parseInt(
          document.querySelector(".stars3").getAttribute("data-rating")
        );

        [].forEach.call(stars, function(star, index) {
          if (rating > index) {
            star.classList.add("rated");
            console.log("added rated on", index);
          } else {
            star.classList.remove("rated");
            console.log("removed rated on", index);
          }
        });
      }

      // The default star rating when the app loads
      let defaultStarRating = 3;

      let starRatingFood = defaultStarRating;
      let starRatingDelivery = defaultStarRating;
      let starRatingOverall = defaultStarRating;

      document.querySelector(".form-submit").addEventListener("click", () => {
        // Collects the data from all of the star components and puts it in a javascript object
        let formData = {
          foodRating: starRatingFood,
          deliveryRating: starRatingDelivery,
          overallrating: starRatingOverall
        };

        // Converts the javascript object into a JSON format and logs it to the console.
        const formResult = JSON.stringify(formData);

        console.log("Submitted form", formResult);
        starRatingForm.classList.add("hide");
        document.querySelector(".submitted").classList.remove("hide");
        setInterval(() => {
          document.querySelector(".submitted").classList.add("hide");

          // Redirect disabled so the code can be read in the console
          // window.location = 'https://www.wagamama.com/';
        }, 4000);
      });

      let starRatingForm = document.querySelector(".container");

      document.querySelector(".close-btn").addEventListener("click", () => {
        starRatingForm.classList.add("hide");

        // Redirect disabled so the code can be read in the console
        // window.location = 'https://www.wagamama.com/';
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: relative;
  max-width: 658px;
  width: 100%;
  margin: 5rem auto;
  padding: 5rem;
  background: var(--container-bg-color);
  border-radius: 0.5rem;
  text-align: center;
  -webkit-box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
  -moz-box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
  box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
  .container-heading,
  .container-rate-food,
  .container-rate-delivery,
  .container-rate-overall {
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 4rem;
    margin-top: 3rem;
  }
  .container-form-submit {
    button {
      background: #0021ff;
      color: #ffffff;
      padding: 2rem;
      text-align: center;
      border-radius: 1rem;
      font-size: 2rem;
      max-width: 300px;
      width: 100%;
      margin-top: 4rem;
      cursor: pointer;
      -webkit-box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
      -moz-box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
      box-shadow: 0px 2px 40px 0px rgba(163, 163, 163, 1);
    }
  }
}

.close-btn {
  position: absolute;
  top: -1rem;
  right: -1em;
}

.hide {
  display: none;
}

.show {
  display: block;
}

.close-cross {
  color: #ebb82f;
  font-size: 4rem;
  padding: 0 1rem;
  background: #000000;
  border-radius: 50%;
  cursor: pointer;
}

.close-cross::before {
  content: "\x";
  cursor: pointer;
  font-size: 4rem;
  color: #ffffff;
  position: relative;
  left: 0.5rem;
  top: -0.4rem;
}

.star,
.star2,
.star3 {
  font-size: 4rem;
  padding: 0 1rem;
  /* space out the stars */
}

.star::before,
.star2::before,
.star3::before {
  content: "\2606";
  cursor: pointer;
  font-size: 4rem;
  color: #ebb82f;
}

.star:hover::before,
.star2:hover::before,
.star3:hover::before {
  /* the :hover should come first */
  content: "\2605";
  font-size: 4rem;
  color: darkcyan;
}

.star.rated::before,
.star2.rated::before,
.star3.rated::before {
  /* the :hover should come first */
  content: "\2605";
  font-size: 4rem;
}

@media (min-width: 481px) and (max-width: 767px) {
  .close-btn {
    position: inherit;
    top: -7rem;
    right: 0;
    margin: 0 auto;
  }
  .star,
  .star2,
  .star3 {
    font-size: 1.9rem;
  }
  .star::before,
  .star2::before,
  .star3::before {
    font-size: 1.9rem;
  }
  .star:hover::before,
  .star2:hover::before,
  .star3:hover::before {
    font-size: 1.9rem;
  }
  .star.rated::before,
  .star2.rated::before,
  .star3.rated::before {
    font-size: 1.9rem;
  }
}

/* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */

@media (min-width: 320px) and (max-width: 480px) {
  body {
    h1 {
      font-size: 3rem;
    }
  }
  .close-btn {
    position: inherit;
    top: -7rem;
    right: 0;
    margin: 0 auto;
  }
  .star,
  .star2,
  .star3 {
    font-size: 1.6rem;
  }
  .star::before,
  .star2::before,
  .star3::before {
    font-size: 1.6rem;
  }
  .star:hover::before,
  .star2:hover::before,
  .star3:hover::before {
    font-size: 1.6rem;
  }
  .star.rated::before,
  .star2.rated::before,
  .star3.rated::before {
    font-size: 1.6rem;
  }
}
</style>
