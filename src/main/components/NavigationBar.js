import "../design/NavigationBarStyle.css";
import {Tabs, TabList, TabPanels, TabPanel, Button, Box, useTab, useMultiStyleConfig} from '@chakra-ui/react';
import React, {useState} from "react";
import Home from "./Home";
import MDClub from "./MDClub";
import AboutUs from "./AboutUs";
import Academy from "./Academy";
import Contact from "./Contact";
import {MdTouchApp as TouchIcon} from "react-icons/md";

export default function NavigationBar() {
    const [menu, setMenu] = useState(false);
    const rect1 = {transform: "rotate(405deg)", position: "relative", top: 7, backgroundColor: "white"};
    const rect2 = {transform: "rotate(1485deg)", backgroundColor: "white"};
    const rect3 = {transform: "rotate(-405deg)", position: "relative", top: -7, backgroundColor: "white"};

    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({...props, ref})
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='2' className={'d-flex align-items-center'}>
                    {isSelected ? <TouchIcon size={40}/> : <span className={'NavbarTags'}>{tabProps.children}</span>}
                </Box>
            </Button>
        )
    })

    return (
        <>
            <Tabs className={'Navbar'}>
                {
                    window.innerWidth > 750 ?
                        <TabList>
                            <CustomTab>მთავარი</CustomTab>
                            <CustomTab>კლუბი</CustomTab>
                            <CustomTab>აკადემია</CustomTab>
                            <CustomTab>ვინ ვართ</CustomTab>
                            <CustomTab>კონტაქტი</CustomTab>
                        </TabList>

                        :

                        <>
                            <div className={'NavbarMenuIcon'}>
                                <div className={`NavbarBurger`} onClick={() => setMenu(!menu)}>
                                    <div style={menu ? rect1 : {}} className={'rectangle1'}></div>
                                    <div style={menu ? rect2 : {}} className={'rectangle2'}></div>
                                    <div style={menu ? rect3 : {}} className={'rectangle3'}></div>
                                </div>
                                {
                                    menu ?
                                        <div className={'menuNavbarLinks'}>
                                            <CustomTab className={'navbarLinks'}>მთავარი</CustomTab>
                                            <CustomTab className={'navbarLinks'}>კლუბი</CustomTab>
                                            <CustomTab className={'navbarLinks'}>აკადემია</CustomTab>
                                            <CustomTab className={'navbarLinks'}>ვინ ვართ</CustomTab>
                                            <CustomTab className={'navbarLinks'}>კონტაქტი</CustomTab>
                                        </div>
                                        : ""
                                }
                            </div>
                        </>
                }
                <TabPanels>
                    <TabPanel>
                        <Home/>
                    </TabPanel>
                    <TabPanel>
                        <MDClub/>
                    </TabPanel>
                    <TabPanel>
                        <Academy/>
                    </TabPanel>
                    <TabPanel>
                        <AboutUs/>
                    </TabPanel>
                    <TabPanel>
                        <Contact/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}