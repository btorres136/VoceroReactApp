import * as React from 'react';
import { db } from "../constants/Firebase";

//Connect to firebase and get the name and the coordinates of all cities of Puerto Rico (only once)
export default function getCitiesData(){
    const [cities, setcities] = React.useState();
    const [retrived, setretrived] = React.useState(false);
    
    React.useEffect(() => {
        db.ref("/Pueblos").on(("value"), (snapshot) => {
        const data = snapshot.val();
        const newval = [];
        for (let value in data) { 
            newval.push({
            municipio: data[value].municipio,
            x_lat: data[value].x_long,
            y_lat: data[value].y_lat,
            });
        }
        setcities(newval);
        setretrived(true);
        });
    }, []);

    return [retrived, cities];
}

