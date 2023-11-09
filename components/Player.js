import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePlayerContext } from '../providers/PlayerProvider';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const Player = () => {

    const [sound, setSound] = useState();
    const { track } = usePlayerContext();
    const [pause, setPause] = useState(true)


    useEffect(() => {
        playTrack();
    }, [track])

    const playTrack = async () => {
        //console.log(sound, "sound")
        setPause(true)
        if (sound) {
            await sound.unloadAsync();
        }

        if (!track?.preview_url) {
            return
        }

        const { sound: newSound } = await Audio.Sound.createAsync({
            uri: track.preview_url
        })
        setSound(newSound)
        await newSound.playAsync();
    }

    if (!track) {
        return null;
    }

    const pauseMusic = async () => {
        console.log(pause, "pause")
        if (!sound) {
            return
        }
        setPause(true)

        if (pause) {
            setPause(false)
            sound.pauseAsync();
        } else {
            sound.playAsync();
        }


    }
    const image = track.album.images?.[0];

    return (
        <View style={styles.container}>
            <View style={styles.player}>
                {image && <Image source={{ uri: image.url }} style={styles.image} />}

                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{track.name}</Text>
                    <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
                </View>

                <Ionicons
                    name={'heart-outline'}
                    size={20}
                    color={'white'}
                    style={{ marginHorizontal: 10 }}
                />
                <Ionicons
                    onPress={() => pauseMusic()}
                    disabled={!track?.preview_url}
                    name={pause === false ? 'play' : 'stop'}
                    size={22}
                    color={track?.preview_url ? 'white' : 'gray'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        top: -75,
        height: 75,
        padding: 10,
    },
    player: {
        backgroundColor: '#286660',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 3,
        paddingRight: 15,
    },
    title: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'lightgray',
        fontSize: 12,
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        marginRight: 10,
        borderRadius: 5,
    },
});

export default Player;