import {Stack} from '@mui/material';
import {FC} from 'react';

import JobActions from './components/JobActions';
import OtherActions from './components/OtherActions';
import RoleActions from './components/RoleActions';
import SidebarJobSelect from './components/SidebarJobSelect';

const JobSidebar: FC = () => {
	return (
		<Stack sx={{height: '100%'}} gap={2}>
			<SidebarJobSelect />
			<JobActions />
			<RoleActions />
			<OtherActions sx={{flexGrow: 1}} />
		</Stack>
	);
};

export default JobSidebar;
