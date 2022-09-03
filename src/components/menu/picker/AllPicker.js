import { HexColorPicker } from "react-colorful";
import { useSnapshot  } from "valtio";
import { state } from "../../../store/State";

export const AllPicker = () => {
  const snap = useSnapshot(state);
  return(
    <div style={{ transform: 'translateY(24%)'}}>
      <HexColorPicker
        style={{height: '130px', width: '130px'}} 
        color={snap.items[snap.current]}
        onChange={color => state.items[snap.current] = color}
      />
    </div>
  );
};