import {IconEye, IconStar} from '@tabler/icons';
import {Card, Center, Group, Text} from '@mantine/core';
import {motion} from 'framer-motion';
import {typeOneContainer, typeOneItem, useTypeOneStyles} from './styled-components/Movie.List.TypeOne.styles.js';

export const TypeOneSingle = ({data}) => {
  const {classes, theme} = useTypeOneStyles(undefined, undefined);

  const items = data?.data.results.map(({id, title, poster_path, vote_average, vote_count, release_date}) =>
      (
          <motion.div key={id} className="item" variants={typeOneItem}>
            <Card
                p="lg"
                m="md"
                shadow="lg"
                className={classes.card}
                radius="md">
              <div className={classes.image}
                   style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}/>
              <div className={classes.overlay}/>

              <div className={classes.content}>
                <div>
                  <Text size="lg" className={classes.title} weight={500}>{title}</Text>

                  <Group position="apart" spacing="xs">
                    <Text size="sm" className={classes.date}>{release_date}</Text>

                    <Group spacing="lg">
                      <Center>
                        <IconEye size={16} stroke={1.5} color={theme.colors.dark[2]}/>
                        <Text size="sm" className={classes.bodyText} children={vote_count}/>
                      </Center>
                      <Center>
                        <IconStar size={16} stroke={1.5} color={theme.colors.dark[2]}/>
                        <Text size="sm" className={classes.bodyText} children={vote_average}/>
                      </Center>
                    </Group>
                  </Group>
                </div>
              </div>
            </Card>
          </motion.div>
      ),
  );

  return <motion.div
      className={`${classes.wrapper}`}
      variants={typeOneContainer}
      initial="hidden"
      animate="visible"
      children={items}/>;
};

