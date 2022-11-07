import {ActionIcon, Tooltip} from '@mantine/core';
import {IconGridDots, IconLayoutGrid, IconList, IconMoodSadDizzy} from '@tabler/icons';
import {useContext} from 'react';
import {TogglesContext} from '../../../../context/Toggles.context.jsx';
import {useNavigate} from 'react-router-dom';

export const Grid = () => {
	const {showListType, dispatch} = useContext(TogglesContext);
	const navigate = useNavigate();
	const onListChangeHandler = (listType) => dispatch({type: listType});

	return (
			<>
				<Tooltip label={'Show Big Grid'}>
					<ActionIcon
							onClick={() => onListChangeHandler('BIG_GRID')}
							variant={showListType === 1 ? 'filled' : 'transparent'} children={<IconLayoutGrid size={18}/>}/>
				</Tooltip>
				<Tooltip label={'Show Medium Grid'}>
					<ActionIcon
							onClick={() => onListChangeHandler('MEDIUM_GRID')}

							variant={showListType === 2 ? 'filled' : 'transparent'} children={<IconGridDots size={18}/>}/>
				</Tooltip>
				<Tooltip label={'Show list'}>
					<ActionIcon
							onClick={() => onListChangeHandler('SMALL_GRID')}
							variant={showListType === 3 ? 'filled' : 'transparent'} children={<IconList size={18}/>}/>
				</Tooltip>
				<Tooltip label={'Testing Ground+'}>
					<ActionIcon
							onClick={() => navigate('test')}
							variant={showListType === 3 ? 'filled' : 'transparent'} children={<IconMoodSadDizzy size={18}/>}/>
				</Tooltip>
			</>
	);
};

