import {ActionIcon} from "@mantine/core";
import {IconChevronUp} from "@tabler/icons";
import {Outlet} from "react-router-dom";
import {useWindowScroll} from "@mantine/hooks";
import {motion} from "framer-motion";
import {SpotlightCustomProvider} from "../../provider/SpotlightCustomProvider.jsx";
import React from "react";

export const BackToTop = () => {
	const [scroll, scrollTo] = useWindowScroll();

	return (

			<SpotlightCustomProvider>
			{scroll.y <= 800 ? null : <TopButton scrollTo={scrollTo}/>}
			<Outlet/>
			</SpotlightCustomProvider>

	);
};

const TopButton = ({scrollTo}) => {
	return (
		<motion.div
			style={{position: "fixed", bottom: 80, right: 15, zIndex: 9999}}
			initial={{scale: 0, rotate: 360}}
			animate={{rotate: 0, scale: 1}}
			whileHover={{scale: 1.2, rotate: 360}}
			transition={{type: "spring", stiffness: 260, damping: 20}}>
			<ActionIcon
				onClick={() => scrollTo({y: -50})}
				color="blue"
				size="lg"
				radius="lg"
				variant="filled"
				children={<IconChevronUp size={26}/>}/>
		</motion.div>
	);
};