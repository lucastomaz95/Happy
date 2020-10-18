import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OrphanagesDetails from './pages/OrphanagesDetails'

const {Navigator, Screen} = createStackNavigator ()

import OrphanagesMap from './pages/OrphanagesMap'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanagesData from './pages/CreateOrphanage/OrphanagesData'
import Header from './components/Header'

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f3f5'} }}>
                <Screen
                 name="OrphanagesMap" 
                 component={OrphanagesMap}
                 />
                <Screen 
                name="OrphanagesDetails" 
                component={OrphanagesDetails}
                options={{
                    headerShown: true,
                    header: ()=> <Header showCancel={false} title="Orfanato"/>
                }}
                />
                <Screen 
                name="SelectMapPosition" 
                component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header: ()=> <Header title="Selecione o mapa"/>
                }}                
                />
                <Screen
                 name="OrphanagesData" 
                 component={OrphanagesData}
                 options={{
                    headerShown: true,
                    header: ()=> <Header title="Informe os dados"/>
                }}
                 />
            </Navigator>
        </NavigationContainer>
    )    
}