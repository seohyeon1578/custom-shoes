import { useState } from "react";
import { useSnapshot  } from "valtio";
import { state } from "./State";

const colors = [
    {
        name: 'red',
        color: '#7e0b11',
    },
    {
        name: 'yellow',
        color: '#c79a49',
    },
    {
        name: 'green',
        color: '#8cad5f',
    },
    {
        name: 'blue',
        color: '#9ac5dc',
    },
    {
        name: 'purple',
        color: '#aab1db',
    },
    {
        name: 'pink',
        color: '#d6a08f',
    },
    {
        name: 'black',
        color: '#111111',
    },
    {
        name: 'white',
        color: '#d8d8d8',
    },
    {
        name: 'gray',
        color: '#595959',
    },
]

export const Picker = () => {
    const [nowColor, setNowColor] = useState('');
    const snap = useSnapshot(state);

    const onColorClick = (e) => {
        const {
            target: {value},
        } = e;
        setNowColor(value);
        state.items[snap.current] = value;
    }
    console.log(nowColor)
    return(
        <div style={{display: 'flex'}}>
            {colors.map(({ name, color }) => {
                return (
                    <div className={nowColor === color ? "bg-border-flx now-border" : "bg-border-flx"}>
                        <button onClick={onColorClick} className={name} value={color} />
                    </div>
                )
            })}
        </div>
    )
}