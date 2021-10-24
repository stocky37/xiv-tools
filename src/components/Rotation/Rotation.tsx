import {Stack} from '@mui/material';
import {SxProps} from '@mui/system';
import {FC} from 'react';

import {TimelineXIVAction} from '../../util/types';
import Action from '../Action';
import {DEFAULT_ACTION_SIZE} from '../Action/Action';

type Props = {
	actions: TimelineXIVAction[];
	size?: number;
	oGcdOffset?: number | string;
	oGcdRatio?: number;
	onActionClick?: (action: TimelineXIVAction, index: number) => void;
};

const Rotation: FC<Props> = ({
	actions,
	size = DEFAULT_ACTION_SIZE,
	oGcdRatio = 0.8,
	oGcdOffset = 1,
	onActionClick = () => {},
}) => {
	const gcdStyle: SxProps = {
		marginBottom: 1,
		marginTop: oGcdOffset,
	};

	return (
		<Stack direction="row" gap={0.25} flexWrap="wrap">
			{actions.map((action, index) => (
				<Action
					key={index}
					action={action}
					sx={action.onGCD ? gcdStyle : {}}
					size={action.onGCD ? size : size * oGcdRatio}
					onClick={() => {
						onActionClick(action, index);
					}}
				/>
			))}
		</Stack>
	);
};

export default Rotation;
