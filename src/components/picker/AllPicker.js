import { HexColorPicker } from "react-colorful";
import { useSnapshot  } from "valtio";
import { state } from "../../state/State";

export const AllPicker = () => {
  const snap = useSnapshot(state);
  return(
    <div style={{display: "flex"}}>
      <HexColorPicker 
        color={snap.items[snap.current]}
        onChange={color => state.items[snap.current] = color}
      />
    </div>
  );
};