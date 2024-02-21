// Define the data to be loaded
const episodeDataList = [
        {
            title: "Chapter 1: Introduction",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            audioUrl: "https://example.com/audiofile1.mp3",
            imageUrl: "https://source.unsplash.com/random/800x600?nature"
        },
        {
            title: "Chapter 2: The Journey Begins",
            mainText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
            audioUrl: "https://example.com/audiofile2.mp3",
            imageUrl: "https://source.unsplash.com/random/800x600?forest"
        },
        {
            title: "Chapter 3: The First Challenge",
            mainText: "At vero eos et accusamus et iusto odio dignissimos ducimus...",
            audioUrl: "https://example.com/audiofile3.mp3",
            imageUrl: "https://source.unsplash.com/random/800x600?mountain"
        }
        // Add more episodes as needed
    ];

let currentEpisodeIndex = 0; // Start with the first episode


function loadEpisodeData(index) {
    episodeData = episodeDataList[index]
    // Update the content dynamically
    document.querySelector('h2').textContent = episodeData.title;
    document.querySelector('main p').textContent = episodeData.mainText;
    document.querySelector('audio source').src = episodeData.audioUrl;
    document.querySelector('figure img').src = episodeData.imageUrl;

    // Reload the audio element to apply the new source
    document.querySelector('audio').load();

    currentEpisodeIndex = index;
}

function goToNextEpisode() {
    // Increment the episode index to load the next episode
    loadEpisode(currentEpisodeIndex + 1);
}

// Attach the goToNextEpisode function to the continue button's click event
document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    goToNextEpisode();
});

// Load the initial episode when the page is ready
document.addEventListener('DOMContentLoaded', () => loadEpisode(currentEpisodeIndex));