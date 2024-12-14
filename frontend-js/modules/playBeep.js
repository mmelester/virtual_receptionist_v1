function playBeep(duration = 200, frequency = 440, volume = 0.5) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Set the oscillator frequency and waveform
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine'; // Other options: 'square', 'triangle', 'sawtooth'

    // Set the gain (volume)
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);

    // Connect oscillator to gain, and gain to the audio context
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start and stop the oscillator
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration / 1000); // Convert duration from ms to seconds

};
module.exports = { playBeep }