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
    document.querySelector('audio').play().catch(e => console.error("Autoplay was prevented.", e));

    currentEpisodeIndex = index;
    
}

function goToNextEpisode() {
    // Increment the episode index to load the next episode
    loadEpisodeData(currentEpisodeIndex + 1);
}

// Attach the goToNextEpisode function to the continue button's click event
document.querySelector('#continueButton').addEventListener('click', (event) => {
    event.preventDefault();
    goToNextEpisode();
});

// Load the initial episode when the page is ready
document.addEventListener('DOMContentLoaded', () => loadEpisodeData(currentEpisodeIndex));

function toggleTableOfContents() {
    const toc = document.getElementById('tableOfContents');
    toc.classList.toggle('active');
}

function populateTableOfContents() {
    const toc = document.getElementById('tableOfContents');
    toc.innerHTML = `
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#" onclick="loadEpisodeData(0); toggleTableOfContents();">Chapter 1: Introduction</a></li>
            <li><a href="#" onclick="loadEpisodeData(1); toggleTableOfContents();">Chapter 2: The Journey Begins</a></li>
            <li><a href="#" onclick="loadEpisodeData(2); toggleTableOfContents();">Chapter 3: The First Challenge</a></li>
            <!-- Add more chapters as needed -->
        </ul>
    `;
}

// Make sure to call populateTableOfContents() after defining episodes
populateTableOfContents();