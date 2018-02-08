import SoundPlayer from './sound-player'
export default class SoundPlayerConsumer {
    constructor()
    {
        this.soundPlayer = new SoundPlayer();
    }

    playSomethingCool(){
        const coolSoundFileName = 'song.mp3';
        console.log('playSomethingCool of soundplayer executed......')
        this.soundPlayer.playSoundFile(coolSoundFileName)
    }
}
/*
* write below code to access above class
* let soc = new SoundPlayerConsumer();
soc.playSomethingCool();
* */