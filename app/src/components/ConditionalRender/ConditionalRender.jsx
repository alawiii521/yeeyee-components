import PropTypes from 'prop-types';

function ConditionalRender({ predicate, children }) {
	return predicate ? children : null;
}

ConditionalRender.propTypes = {
	predicate: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export default ConditionalRender;
