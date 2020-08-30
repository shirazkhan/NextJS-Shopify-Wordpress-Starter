import React, {useReducer} from 'react';
import '../src/index.css';
import { MainGrid, Header, NavBar, Brand, NavButton, NavUILabel, NavInputUI,
         Hamburger, NavSideMenu, NavSideMenuShadow, NavLinks, NavLink,
         NightButton, SwitchUI, SwitchInputUI, SwitchSliderUI, NavMobHFade, NavMobHSpacer,
         Footer, Content, HamburgerInner1, HamburgerInner2, NavMobHMenu, NavMobHOverflow, NavFilter } from '../src/styled/App';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {

  // Reducer

  const initialState = {
    nightMode: false,
    postId: 0,
    
  };

  const reducer = (prevState, action) => {
    switch(action.type){
      case 'toggleNightMode':
        return {...prevState, nightMode: !prevState.nightMode};
    default:
      throw new Error();
    }
  }

  const [globalState,dispatch] = useReducer(reducer,initialState);

    return <>
        <MainGrid>
            <NavFilter />
            <Header>
                <NavBar>
                <Brand><h2>Shiraz Khan</h2></Brand>
                <NavButton>
                    <NavUILabel>
                    <Hamburger>
                        <NavInputUI />
                        <HamburgerInner1 /> <HamburgerInner2 />
                        <NavMobHMenu>
                        <NavMobHOverflow>
                            <NavMobHSpacer></NavMobHSpacer>
                            <Link href="/"><NavLink>Home</NavLink></Link>
                            <Link href="/test"><NavLink>Test</NavLink></Link>
                            <Link href="/article"><NavLink>Articles</NavLink></Link>
                            <Link href="/"><NavLink>Contact</NavLink></Link>
                            <NavLink href="/">Blahfafaaff</NavLink>
                            <NavLink href="/">Aohfohaif</NavLink>
                            <NavLink href="/">Portfakjfolio</NavLink>
                            <NavLink href="/">DDContact</NavLink>
                            <NavMobHSpacer></NavMobHSpacer>
                        </NavMobHOverflow>
                        <NavMobHFade />
                        </NavMobHMenu>
                    </Hamburger>
                    </NavUILabel>
                </NavButton>
                <NavLinks>
                    <Link href="/"><NavLink>Home</NavLink></Link>
                    <Link href="/test"><NavLink>Test</NavLink></Link>
                    <Link href="/article"><NavLink>Articles</NavLink></Link>
                    <Link href="/"><NavLink>Contact</NavLink></Link>
                </NavLinks>
                <NightButton>
                    <SwitchUI>
                    <SwitchInputUI />
                    <SwitchSliderUI />
                    </SwitchUI>
                </NightButton>
                </NavBar>
            </Header>
            <Content>
                {/* Content Goes Here */}
                <Component {...pageProps} />
                {/* ///////////////// */}
            </Content>

            <Footer>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Illo at, similique delectus blanditiis labore nesciunt est officiis atque, 
                perspiciatis tenetur, quae ad ipsa ipsum veniam quas enim quod rem adipisci error? 
                Consectetur a odio cumque rerum dolores adipisci quos voluptatem.
            </Footer>
        </MainGrid>
    </>
  }
  
  export default MyApp