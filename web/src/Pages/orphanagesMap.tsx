import React, { useEffect, useState } from "react";
import api from "../services/api";
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import mapIcon from '../utils/mapIcon'
import{Map, TileLayer, Marker, Popup} from 'react-leaflet'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../Images/map-marker.svg'

import '../styles/pages/orphanages-map.css'


interface Orphanage{
    id:number;
    latitude:number;
    longitude:number;
    name:string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
        api.get('orphanages').then(response=>{
            setOrphanages(response.data)
        })
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Campinas</span>
                </footer>
            </aside>
            <Map
            center={[-22.940873, -47.0680352]}
             zoom = {15}
             style={{width:'100%', height:'100%'}}>   
               <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {orphanages.map(orphanage=>{
                return(
                    <Marker
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton = {false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color='#FFF'/>
                            </Link>
                            </Popup>
                    </Marker>
                )
            })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={52} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap