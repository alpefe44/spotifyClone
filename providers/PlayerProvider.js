import { createContext, useContext, useState } from 'react';


const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
    const [track, setTrack] = useState();
    return (
        <PlayerContext.Provider value={{ track, setTrack }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayerContext = () => useContext(PlayerContext);