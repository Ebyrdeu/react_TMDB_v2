import {useParams} from "react-router-dom";
import {useMovieStaff} from "../../hooks/useMovieStaff.js";
import {createStyles, Tabs} from "@mantine/core";
import {CasCrewCard} from "./SingleMovie.CastCrew";
import {useSimilarMovie} from "../../hooks/useSimilarMovie.js";

const useStyles = createStyles(() => ({
		castWrapper: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
		},
	}),
);

export const Bottom = () => {

	const {id} = useParams();
	const {data, isLoading} = useMovieStaff(id);
	const {data: similarMovie, N} = useSimilarMovie(id);
	const {classes} = useStyles(undefined, undefined);

	if (isLoading) return;

	// About Keys - in TMDB sometime one person could play or have different jobs so it's needed to separate them
	const cast = data?.data.cast.map((data, i) => <CasCrewCard data={data} key={data.id + `S` + i}/>);
	const crew = data?.data.crew.map((data, i) => <CasCrewCard data={data} key={data.id + `S` + i}/>);
	const movie = similarMovie?.data.results.map((data, i) => <CasCrewCard data={data} key={data.id + `S` + i}/>);

	return (
		<div style={{margin: "0 auto", paddingTop: 100}}>
			<Tabs defaultValue="cast">
				<Tabs.List position="center">
					<Tabs.Tab value="cast" children={"Cast"}/>
					<Tabs.Tab value="crew" children={"Crew"}/>
					<Tabs.Tab value="movies" children={"Similar Movies"}/>
				</Tabs.List>

				<Tabs.Panel value="cast" pt="xs">
					<div className={classes.castWrapper} children={cast}/>
				</Tabs.Panel>

				<Tabs.Panel value="crew" pt="xs">
					<div className={classes.castWrapper}>
						<div className={classes.castWrapper} children={crew}/>
					</div>
				</Tabs.Panel>

				<Tabs.Panel value="movies" pt="xs">
					<div className={classes.castWrapper}>
						<div className={classes.castWrapper} children={movie}/>
					</div>
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

