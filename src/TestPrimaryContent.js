import React from 'react'
import styled from 'styled-components';
import {Content, Primary, Secondary} from './styled/App';

export default function TestPrimaryContent() {
    return (
        <Content>
          <Primary>
            <h1>A Complete Guide to Flexbox!</h1>
            <p>Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.</p>
          </Primary>
          <Secondary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          </Secondary>
        </Content>
    )
}