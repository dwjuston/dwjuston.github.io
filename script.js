document.addEventListener('DOMContentLoaded', function() {
    // Simulated fetch for Table of Contents
    const tocData = {
        bookName: 'Example Book',
        chapters: [
            { name: 'Chapter 1', episodes: [1, 2] },
            { name: 'Chapter 2', episodes: [3, 4] },
        ]
    };

    // Simulated fetch for Episodes
    const episodesData = {
        '1': { text: 'Welcome to Chapter 1, Episode 1', audioUrl: 'audio1.mp3', imageUrl: 'image1.jpg' },
        '2': { text: 'Welcome to Chapter 1, Episode 2', audioUrl: 'audio2.mp3', imageUrl: 'image2.jpg' },
        '3': { text: 'Welcome to Chapter 2, Episode 3', audioUrl: 'audio3.mp3', imageUrl: 'image3.jpg' },
        '4': { text: 'Welcome to Chapter 2, Episode 4', audioUrl: 'audio4.mp3', imageUrl: 'image4.jpg' },
        // Add more episodes as needed
    };

    const tocPanel = document.getElementById('toc-panel');
    const contentPanel = document.getElementById('content-panel');
    const continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.id = 'continue-button';
    contentPanel.appendChild(continueButton);

    // Populate Table of Contents based on fetched data
    tocData.chapters.forEach(chapter => {
        let chapterElem = document.createElement('div');
        chapterElem.textContent = chapter.name;
        chapterElem.classList.add('chapter');
        tocPanel.appendChild(chapterElem);

        chapter.episodes.forEach(episodeNumber => {
            let episodeElem = document.createElement('div');
            episodeElem.textContent = `Chapter ${chapter.name}: Episode ${episodeNumber}`;
            episodeElem.classList.add('episode');
            episodeElem.addEventListener('click', () => loadEpisode(episodeNumber));
            tocPanel.appendChild(episodeElem);
        });
    });

    // Load Episode Content
    function loadEpisode(episodeId) {
        const episodeContent = episodesData[episodeId]/* Fetch the episode content based on episodeId */;
        const contentPanel = document.getElementById('content-panel');
        contentPanel.innerHTML = episodeContent; // Replace existing content
    }
    // Toggle Table of Contents Visibility
    document.getElementById('toggle-toc-btn').addEventListener('click', function() {
        document.body.classList.toggle('toc-hidden');
    });

    // Assume each episode item has a class 'episode' and is selectable
    document.querySelectorAll('.episode').forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'selected' class from all episodes
        document.querySelectorAll('.episode').forEach(ep => ep.classList.remove('selected'));
        // Add 'selected' class to clicked episode
        this.classList.add('selected');
        // Load the associated content
        const episodeId = this.getAttribute('data-episode-id'); // Ensure you set this attribute when generating the ToC
        loadEpisode(episodeId);
    });

    document.getElementById('continue-button').addEventListener('click', function() {
        const selectedEpisode = document.querySelector('.episode.selected');
        const nextEpisode = selectedEpisode.nextElementSibling; // Adjust logic if your DOM structure differs
        if (nextEpisode && nextEpisode.classList.contains('episode')) {
            selectedEpisode.classList.remove('selected');
            nextEpisode.classList.add('selected');
            const episodeId = nextEpisode.getAttribute('data-episode-id');
            loadEpisode(episodeId);
        }
    });
});

    // Style "Continue" Button
    continueButton.style.padding = '10px 20px';
    continueButton.style.fontSize = '16px';
    continueButton.style.color = '#fff';
    continueButton.style.backgroundColor = '#007bff';
    continueButton.style.border = 'none';
    continueButton.style.borderRadius = '5px';
    continueButton.style.cursor = 'pointer';
    continueButton.style.marginTop = '20px';
});
