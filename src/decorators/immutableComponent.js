import React, {Component} from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

export default function immutableComponent(propKeys) {
	return (DecoratedComponent) => class ImmutableComponentDecorator extends Component {
		shouldComponentUpdate(nextProps) {
			if (propKeys) {
				return propKeys.some(name => this.props[name] !== nextProps[name]);
			} else {
				return !shallowEqual(this.props, nextProps);
			}
		}

		render() {
			return <DecoratedComponent {...this.props} />;
		}
	};
};
