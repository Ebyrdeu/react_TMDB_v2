import {Image, Text} from "@mantine/core";
import {useActorTopStyles} from "./styled-components/SingleActor.Top.Styles.js";

export const Top = ({data}) => {
	const {classes} = useActorTopStyles(undefined, undefined);
	const {biography, profile_path, name, birthday, gender} = data?.data;
	return (
		<div className={classes.wrapper}>
			<div>
				{!profile_path
					? <div className={classes.bg}/>
					: <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} height={320} width={215} radius="md"
					       mt="-40px"/>}

				<div className={classes.iconsWrapper}>
					<Text ml={5} size="md" color="dimmed" children={birthday}/>
					<Text ml={5} size="md" color="dimmed" children={gender === 1 ? "female" : "male"}/>
				</div>
			</div>

			<div className={classes.description}>
				<Text size="xl" className={classes.title} weight={500} children={name}/>
				<Text size="md" color="dimmed" children={biography} lineClamp={10} pt={20}/>
			</div>

		</div>
	);
};

