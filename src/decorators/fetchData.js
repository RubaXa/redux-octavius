import React, {Component} from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

export default function fetchData(getter, executor) {
	return (DecoratedComponent) => class FetchDataDecorator extends Component {
		componentWillMount() {
			executor(getter(this.props, this.props.params), this.props.actions);
		}

		componentDidUpdate(prevProps) {
			const params = getter(this.props, this.props.params);
			const prevParams = getter(prevProps, prevProps.params);

			!shallowEqual(params, prevParams) && executor(params, this.props.actions);
		}

		render() {
			return <DecoratedComponent {...this.props} />;
		}
	};
};
