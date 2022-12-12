import "../design/NavigationBarStyle.css";
import {Tabs, TabList, TabPanels, TabPanel, Button, Box, useTab, useMultiStyleConfig} from '@chakra-ui/react';
import React from "react";
import Home from "./Home";
import MDClub from "./MDClub";
import AboutUs from "./AboutUs";
import Academy from "./Academy";
import Contact from "./Contact";
import {MdTouchApp as TouchIcon} from "react-icons/md";

export default function NavigationBar() {
    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='2' className={'d-flex align-items-center'}>
                    {isSelected ? <TouchIcon size={40}/> : <>{tabProps.children}</>}
                </Box>
            </Button>
        )
    })

    return (
        <>
            <Tabs>
                <TabList>
                    <CustomTab>მთავარი</CustomTab>
                    <CustomTab>კლუბი</CustomTab>
                    <CustomTab>აკადემია</CustomTab>
                    <CustomTab>ვინ ვართ</CustomTab>
                    <CustomTab>კონტაქტი</CustomTab>
                </TabList>
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