import {useNavigate, useParams} from "react-router-dom";
import {Button, Container} from "@mantine/core";
import {Top} from "./SingleActor.Top.jsx";
import {Bottom} from "./SingleActor.Bottom.jsx";
import {IconArrowLeft} from "@tabler/icons";
import {useShowSingleActor} from "../../../hooks/useShowSingleActor.js";
import {useActorComponentStyles} from "./styled-components/SingleActor.Component.Styles.js";

export const SingleActor = () => {
    const {id} = useParams();
    const {data, isLoading} = useShowSingleActor(id);
    const navigate = useNavigate();
    const {classes} = useActorComponentStyles(undefined, undefined);

    if (isLoading) return;

    return (
        <>

            <Button
                onClick={() => navigate(-1)}
                variant="filled"
                leftIcon={<IconArrowLeft size={20} stroke={2}/>}
                radius="xs"
                size="md"
                styles={{
                    root: {
                        marginLeft: 10, paddingRight: 14, height: 48,
                        position: "absolute", top: "75px", right: "20px",
                        zIndex: 9999,
                    },
                    rightIcon: {marginLeft: 5},
                }}
                children={"Back"}/>

            <div className={classes.bg}/>
            <Container size={"xl"}>
                <Top data={data}/>
                <Bottom/>
            </Container>
        </>
    );
};

