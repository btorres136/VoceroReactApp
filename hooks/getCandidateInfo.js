import * as React from 'react';
import { db } from "../constants/Firebase";

//Connect to firebase and get the name and the coordinates of all cities of Puerto Rico (only once)
export default function getCandidateInfo(props){
    const { party, type } = props.route.params;
    const [candidate, setcandidate] = React.useState([]);
    const [retrived, setretrived] = React.useState(false);
    
    React.useEffect(() => {
        db.ref("/"+type+"/"+party).on(("value"), (snapshot) => {
            const data = snapshot.val();
            console.log(type);
            const newval = [];
            for (let value in data) { 
                newval.push({
                    Nombre: data[value],
                });
            }
            setcandidate(newval);
            setretrived(true);
        });
    }, []);

    return [retrived, candidate];
}
