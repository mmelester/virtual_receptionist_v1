/*
 * playBeep(duration, frequency, volume)
 *
 * This function plays a beep sound using the Web Audio API.
 *
 * Parameters:
 *   - duration: The length of the beep in milliseconds (default: 200 ms).
 *   - frequency: The pitch of the beep in Hertz (default: 440 Hz).
 *   - volume: The loudness of the beep (default: 0.5; range: 0 to 1).
 *
 * How It Works:
 *   1. Creates an AudioContext instance for managing audio operations.
 *   2. Sets up an oscillator node with the specified frequency and a 'sine' waveform.
 *   3. Configures a gain node to control the volume.
 *   4. Connects the oscillator to the gain node, then connects the gain node to the audio output.
 *   5. Starts the oscillator immediately and stops it after the given duration (converted from ms to seconds).
 *
 * The function is exported using CommonJS syntax.
 */
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