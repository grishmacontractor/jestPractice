// __mocks__/sound-player.js

// Import this named export into your test file:

export const mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    console.log("function executed from mock sound player");
    return { playSoundFile: mockPlaySoundFile };
});

export default mock;