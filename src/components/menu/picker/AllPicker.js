import { HexColorPicker } from "react-colorful";
import { useSnapshot  } from "valtio";
import { state } from "../../../store/State";

export const AllPicker = () => {
  const snap = useSnapshot(state);
  return(
    <div style={{display: "flex"}}>
      <HexColorPicker
        style={{height: '150px', width: '150px'}} 
        color={snap.items[snap.current]}
        onChange={color => state.items[snap.current] = color}
      />
    </div>
  );
};