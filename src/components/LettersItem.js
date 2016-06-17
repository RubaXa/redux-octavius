import classNames from 'classnames';
import React, {Component} from 'react';
import immutableComponent from '../decorators/immutableComponent';

import Avatar from './Avatar';
import Button from './Button';
import Swipeable from './Swipeable';
import LetterStatus from './LetterStatus';

const DAY = 60 * 60 * 24 * 1000;
const Months = 'Янв Фев Мар Апр Мая Июн Июл Авг Сен Окт Ноя Дек'.split(' ');

function pad(number) {
	return (number < 10) ? '0' + number : number;
}

function letterTime(time) {
	time *= 1000;

	const now = Date.now();
	const date = new Date(time);

	if (now - time > DAY) {
		return date.getDate() + ' ' + Months[date.getMonth()];
	} else {
		return date.getHours() + ':' + pad(date.getMinutes());
	}
}

@immutableComponent(['model', 'selected'])
export default class LettersItem extends Component {
	render() {
		const {model, selected, onToggleSelect} = this.props;
		const classes = classNames({
			'dataset__item': true,
			'dataset__item_unread': model.flags.unread,
			'dataset__item_active': false,
			'dataset__item_selected': selected,
		});

		const actions = (
			<div className="dataset__swipe-actions">
				<Button ico="toolbar_unread" short borderless />
				<Button ico="toolbar_mark" short borderless />
				<Button ico="toolbar_remove" short borderless/>
				<Button ico="toolbar_spam" short borderless/>
				<Button ico="toolbar_more" short borderless/>
			</div>
		);

		const itemRow = (
			<div className="dataset__item-row">
				<div className="dataset__info">
					<div className="dataset__addrs">
						{
							model.correspondents.from[0].name ||
							model.correspondents.from[0].email ||
							'Неизвестно'
						}
					</div>

					<div className="dataset__subj">
						<div className="dataset__status">
							<LetterStatus
								name="flagged"
								state={model.flags.flagged}
							/>
						</div>

						{model.length > 1 ? <div className="dataset__badge">{model.length}</div> : null}
						{model.subject}

						<div className="dataset__snippet">{model.snippet}</div>
					</div>
				</div>

				<div className="dataset__attach" dangerouslySetInnerHTML={model.flags.attach ? {__html: '&#128206'} : null}/>
				<div className="dataset__date">{letterTime(model.date)}</div>
			</div>
		);

		return (
			<a
				className={classes}
				title={model.subject}
				href={`/${model.folder}/${model.id}/`}
			>
				<div className="dataset__avatar-cover">
					<div className="dataset__status">
						<LetterStatus
							name="unread"
							state={model.flags.unread}
						/>
					</div>

					<div className="dataset__avatar" onClick={onToggleSelect}>
						<Avatar
							size="s"
							src={model.correspondents.from[0].avatars.default}
						/>
					</div>
				</div>

				<Swipeable
					underlay={actions}
					content={itemRow}
				/>
			</a>
		);
	}
}
