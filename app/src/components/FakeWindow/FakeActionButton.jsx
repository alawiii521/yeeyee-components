import PropTypes from 'prop-types';

function FakeActionButton({ color }) {
	return (
		<div>
			<style jsx>{`
				div {
					background: ${color};
					border-radius: 50%;
					width: 14px;
					height: 14px;
					margin-right: 0.5rem;
				}
			`}</style>
		</div>
	);
}

FakeActionButton.propTypes = {
	color: PropTypes.string.isRequired,
};

export default FakeActionButton;
