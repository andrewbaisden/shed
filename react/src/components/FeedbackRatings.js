import React, { Component } from 'react';

class FeedbackRatings extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={this.props.class}>
					<div>
						<h2>{this.props.title}</h2>
					</div>
					<div className={this.props.starList} data-rating="3">
						<span className={this.props.star}>&nbsp;</span> <span className={this.props.star}>&nbsp;</span>
						<span className={this.props.star}>&nbsp;</span>
						<span className={this.props.star}>&nbsp;</span> <span className={this.props.star}>&nbsp;</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default FeedbackRatings;
