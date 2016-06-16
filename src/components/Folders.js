import React, {Component, PropTypes} from 'react';

import FoldersItem from './FoldersItem';

export default class Folders extends Component {
	render() {
		const {models, active} = this.props;

		return (
			<div className="nav nav_expanded">
				{models.map(folder => <FoldersItem
					key={folder.id}
					model={folder}
					active={folder.id == active}/>
				)}
			</div>
		);
	}
}
