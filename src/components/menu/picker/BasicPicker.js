import { useState } from "react";
import { useSnapshot  } from "valtio";
import { state } from "../../../store/State";
import colors from "./colors.json";

export const BasicPicker = () => {
    const [nowColor, setNowColor] = useState('');
    const snap = useSnapshot(state);

    const onColorClick = (e) => {
        const {
            target: {value},
        } = e;
        setNowColor(value);
        state.items[snap.current] = value;
    }
    
    return(
        <div style={{display: 'flex'}}>
            {colors.map(({ name, color }) => {
                return (
                    <div key={name} className={nowColor === color ? "bg-border-flx now-border" : "bg-border-flx"}>
                        <button onClick={onColorClick} className={name} value={color} />
                    </div>
                )
            })}
        </div>
    )
}