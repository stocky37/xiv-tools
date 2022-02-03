import {Tooltip} from '@mui/material';
import {Box, BoxProps} from '@mui/system';
import {Image} from 'mui-image';
import type {FC} from 'react';
import actionIcon from 'util/actionIcon';
import {Action, Item} from 'util/types';

export type ActionIconProps = {
	action?: Action | Item;
	duration?: number;
} & BoxProps;

export const actionSize = 46;

const style = {
	':hover': {
		cursor: 'pointer',
	},
};

const ActionIcon: FC<ActionIconProps> = ({action, sx = {}, duration = 500, ...props}) => (
	<Tooltip title={action?.name ?? ''} disableInteractive>
		<Box sx={{...style, ...sx}} {...props}>
			{action && (
				<Image
					src={actionIcon(action)}
					height={actionSize}
					width={actionSize}
					duration={duration}
					{...props}
				/>
			)}
		</Box>
	</Tooltip>
);

export default ActionIcon;