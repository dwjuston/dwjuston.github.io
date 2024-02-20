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
        '2': { text: 'Welcome to Chapter 1, Episode 2', audioUrl: 'audio2.mp3', imageUrl: 'image2.jpg' }
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
        const episode = episodesData[episodeId];
        contentPanel.innerHTML = `<h2>Chapter 1: Episode ${episodeId}</h2><p>${episode.text}</p><img src="${episode.imageUrl}" alt="Episode Image">` + contentPanel.innerHTML;
    }

    // Toggle Table of Contents Visibility
    document.getElementById('toggle-toc-btn').addEventListener('click', function() {
        const tocPanel = document.getElementById('toc-panel');
        const contentPanel = document.getElementById('content-panel');
        tocPanel.classList.toggle('hidden');
        contentPanel.classList.toggle('expanded');
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
