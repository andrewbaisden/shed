import React, { Component } from 'react';

class App extends Component {
	componentDidMount() {
		this.loadApp();
	}
	loadApp() {
		//initial setup
		document.addEventListener('DOMContentLoaded', function() {
			addListeners();
			setRating(); //based on value inside the div
			setRating2();
			setRating3();
		});

		function addListeners(starList, starListItem) {
			var stars = document.querySelectorAll(starList);
			[].forEach.call(stars, function(star, index) {
				star.addEventListener(
					'click',
					function(idx) {
						// console.log('adding rating on', index);
						document.querySelector(starListItem).setAttribute('data-rating', idx + 1);

						// Checks to see which star list was clicked and then logs the amount of stars to the console.
						if (starList === '.star') {
							console.log('Rating for food is now', idx + 1);
							starRatingFood = idx + 1;
						} else if (starList === '.star2') {
							console.log('Rating for delivery is now', idx + 1);
							starRatingDelivery = idx + 1;
						} else {
							console.log('Rating overall is now', idx + 1);
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
		addListeners('.star', '.stars');
		addListeners('.star2', '.stars2');
		addListeners('.star3', '.stars3');

		// Sets star rating for the food component
		function setRating() {
			var stars = document.querySelectorAll('.star');
			var rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));

			[].forEach.call(stars, function(star, index) {
				if (rating > index) {
					star.classList.add('rated');
					console.log('added rated on', index);
				} else {
					star.classList.remove('rated');
					console.log('removed rated on', index);
				}
			});
		}

		// Sets star rating for the delivery component
		function setRating2() {
			var stars = document.querySelectorAll('.star2');
			var rating = parseInt(document.querySelector('.stars2').getAttribute('data-rating'));

			[].forEach.call(stars, function(star, index) {
				if (rating > index) {
					star.classList.add('rated');
					console.log('added rated on', index);
				} else {
					star.classList.remove('rated');
					console.log('removed rated on', index);
				}
			});
		}

		// Sets star rating for the overall component
		function setRating3() {
			var stars = document.querySelectorAll('.star3');
			var rating = parseInt(document.querySelector('.stars3').getAttribute('data-rating'));

			[].forEach.call(stars, function(star, index) {
				if (rating > index) {
					star.classList.add('rated');
					console.log('added rated on', index);
				} else {
					star.classList.remove('rated');
					console.log('removed rated on', index);
				}
			});
		}

		// The default star rating when the app loads
		let defaultStarRating = 3;

		let starRatingFood = defaultStarRating;
		let starRatingDelivery = defaultStarRating;
		let starRatingOverall = defaultStarRating;

		document.querySelector('.form-submit').addEventListener('click', () => {
			// Collects the data from all of the star components and puts it in a javascript object
			let formData = {
				foodRating: starRatingFood,
				deliveryRating: starRatingDelivery,
				overallrating: starRatingOverall
			};

			// Converts the javascript object into a JSON format and logs it to the console.
			const formResult = JSON.stringify(formData);

			console.log('Submitted form', formResult);
			starRatingForm.classList.add('hide');
			document.querySelector('.submitted').classList.remove('hide');
			setInterval(() => {
				document.querySelector('.submitted').classList.add('hide');

				// Redirect disabled so the code can be read in the console
				// window.location = 'https://www.wagamama.com/';
			}, 4000);
		});

		let starRatingForm = document.querySelector('.container');

		document.querySelector('.close-btn').addEventListener('click', () => {
			starRatingForm.classList.add('hide');

			// Redirect disabled so the code can be read in the console
			// window.location = 'https://www.wagamama.com/';
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="close-btn">
						<span className="close-cross">&nbsp;</span>
					</div>
					<div className="container-heading">
						<h1>How did we do?</h1>
						<p>Please let us know how your food delievery was. It will really help us to keep improving our service!</p>
					</div>
					<div className="container-rate-food">
						<div>
							<h2>How would you rate your food?</h2>
						</div>
						<div className="stars" data-rating="3">
							<span className="star">&nbsp;</span> <span className="star">&nbsp;</span>{' '}
							<span className="star">&nbsp;</span>
							<span className="star">&nbsp;</span> <span className="star">&nbsp;</span>
						</div>
					</div>
					<div className="container-rate-delivery">
						<div>
							<h2>How would you rate your delivery driver?</h2>
						</div>
						<div className="stars2" data-rating="3">
							<span className="star2">&nbsp;</span> <span className="star2">&nbsp;</span>{' '}
							<span className="star2">&nbsp;</span>
							<span className="star2">&nbsp;</span> <span className="star2">&nbsp;</span>
						</div>
					</div>
					<div className="container-rate-overall">
						<div>
							<h2>How would you rate your overall experience?</h2>
						</div>
						<div className="stars3" data-rating="3">
							<span className="star3">&nbsp;</span> <span className="star3">&nbsp;</span>{' '}
							<span className="star3">&nbsp;</span>
							<span className="star3">&nbsp;</span> <span className="star3">&nbsp;</span>
						</div>
					</div>
					<div className="container-form-submit">
						<button className="form-submit">Submit feedback</button>
					</div>
				</div>

				<div className="container hide submitted">
					<p>
						Form submitted!!!
						<span role="img" aria-label="Happy Face">
							😁
						</span>
					</p>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
