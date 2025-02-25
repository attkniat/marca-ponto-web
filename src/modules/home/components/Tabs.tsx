import { Tabs as TabItems, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MarkPoint } from './MarkPoint';
import { PointsHistory } from '../../pointsHistory/page';

export function Tabs() {

    return (
        <>
            <TabItems isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Marca Ponto</Tab>
                    <Tab>Pontos</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MarkPoint />
                    </TabPanel>
                    <TabPanel>
                        <PointsHistory />
                    </TabPanel>
                </TabPanels>
            </TabItems>
        </>
    );
}