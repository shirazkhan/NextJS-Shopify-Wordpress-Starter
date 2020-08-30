import React from 'react'
import {Primary, Secondary} from '../../src/styled/App';
import {PageHeading} from '../../src/styled/Content';
import axios from 'axios';
import parse from 'html-react-parser';
import { useRouter } from 'next/router'

export default function Article({data,title,content,id}) {
    
  const router = useRouter();
  const { slug } = router.query;

  return (
      <>
        <Primary>
          <PageHeading>{title}</PageHeading>
              {parse(content)}
        </Primary>
        <Secondary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
        </Secondary>
      </>
  )
}

export async function getStaticProps(context) {

  const { slug } = context.params;

  const res = await axios(
  `https://www.bakedbyanintrovert.com/wp-json/wp/v2/posts/?slug=${slug}`,
  );
  const data = res.data[0];
  const title = res.data[0].title.rendered;
  const content = res.data[0].content.rendered;
  const id = res.data[0].id;

  return {
    props: {
      data,
      title,
      content,
      id
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "dr-pepper-cupcakes" } } // See the "paths" section below
    ],
    fallback: false // See the "fallback" section below
  };
}