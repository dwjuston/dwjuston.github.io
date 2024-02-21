// Define the data to be loaded
const chapterDataList = [
    {
        chapterTitle: "Chapter 1: Introduction",
        episodes: [
            {
                episodeNumber: 1,
                title: "1",
                mainText: "Lorem ipsum dolor sit amet ttjioadjf jjjlaa Lorem ipsum dolor sit amet ttjioadjf jjjlaa Lorem ipsum dolor sit amet ttjioadjf jjjlaa Lorem ipsum dolor sit amet ttjioadjf jjjlaa Lorem ipsum dolor sit amet ttjioadjf jjjlaa Lorem ipsum dolor sit amet ttjioadjf jjjlaa",
                audioUrl: "https://example.com/audiofile1-1.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?nature"
            },
            {
                episodeNumber: 2,
                title: "2",
                mainText: "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
                audioUrl: "https://example.com/audiofile1-2.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?water"
            },
            {
                episodeNumber: 3,
                title: "3",
                mainText: "e omnis iste natus error sit Sed ut perspiciatis und e omnis iste natus error sit Sed ut perspiciatis und e omnis iste natus error sit Sed ut perspiciatis und e omnis iste natus error sit Sed ut perspiciatis und e omnis iste natus error sit Sed ut perspiciatis und",
                audioUrl: "https://example.com/audiofile1-2.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?water"
            },
            // Add more episodes for Chapter 1 as needed
        ]
    },
    {
        chapterTitle: "Chapter 2: The Journey Begins",
        episodes: [
            {
                episodeNumber: 1,
                title: "1",
                mainText: "At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus",
                audioUrl: "https://example.com/audiofile2-1.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?mountain"
            },
            {
                episodeNumber: 2,
                title: "2",
                mainText: "Ut enim ad minima veniam, quis nostrum exercitationem ullamUt enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam",
                audioUrl: "https://example.com/audiofile2-2.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?forest"
            },
            {
                episodeNumber: 3,
                title: "3",
                mainText: "Ut qwewqeqe easdsa fdw访问团访问 strum exercitationem ullamUt enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam Ut enim ad minima veniam, quis nostrum exercitationem ullam",
                audioUrl: "https://example.com/audiofile2-2.mp3",
                imageUrl: "https://source.unsplash.com/random/800x600?forest"
            },
        ]
    }
    // Add more chapters as needed
];

let currentChapterId = 0; // Starting with the first chapter
let currentEpisodeId = 0; // Starting with the first episode

function getNextChapterAndEpisodeId(currentChapterId, currentEpisodeId) {
    // Check if there's a next episode in the current chapter
    if (currentEpisodeId + 1 < chapterDataList[currentChapterId].episodes.length) {
        // Next episode is in the same chapter
        return {
            nextChapterId: currentChapterId,
            nextEpisodeId: currentEpisodeId + 1
        };
    } else if (currentChapterId + 1 < chapterDataList.length) {
        // Current episode is the last in the current chapter, move to the next chapter
        // Assuming the next chapter has at least one episode
        return {
            nextChapterId: currentChapterId + 1,
            nextEpisodeId: 0 // Start at the first episode of the next chapter
        };
    } else {
        // Current episode is the last in the last chapter, no next chapter or episode
        // Here, you could loop back to the start or indicate the end; depends on desired behavior
        // To indicate the end, returning null or similar could work:
        return null;
    }
}

function highlightActiveToCItem(chapterIndex, episodeIndex) {
    // Remove highlight from all ToC items
    document.querySelectorAll('.toc a').forEach(a => {
        a.classList.remove('active');
    });

    // Highlight the active ToC item
    const selector = `.toc a[data-chapter-id="${chapterIndex}"][data-episode-id="${episodeIndex}"]`;
    const activeItem = document.querySelector(selector);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function loadEpisodeData(chapterIndex, episodeIndex) {
    let chapterData = chapterDataList[chapterIndex];
    let chapterTitle = chapterData.chapterTitle;
    let episodeData = chapterData.episodes[episodeIndex];
    // Update the content dynamically
    document.querySelector('.content h2').textContent = chapterTitle + " (" + episodeData.episodeNumber + ")";
    document.querySelector('main p').textContent = episodeData.mainText;
    document.querySelector('audio source').src = episodeData.audioUrl;
    document.querySelector('figure img').src = episodeData.imageUrl;

    // Reload the audio element to apply the new source
    document.querySelector('audio').load();
    document.querySelector('audio').play().catch(e => console.error("Autoplay was prevented.", e));
    
}

function goToNextEpisode() {
    const next = getNextChapterAndEpisodeId(currentChapterId, currentEpisodeId);
    if (next) {
        // Update currentChapterId and currentEpisodeId if moving to the next episode
        currentChapterId = next.nextChapterId;
        currentEpisodeId = next.nextEpisodeId;
        loadEpisodeData(currentChapterId, currentEpisodeId)
        highlightActiveToCItem(chapterId, episodeId);
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#continueButton').addEventListener('click', (event) => {
        event.preventDefault();
        goToNextEpisode();
    });
});

document.addEventListener('DOMContentLoaded', loadEpisodeData(0,0));
document.addEventListener('DOMContentLoaded', function() {
    const toggleTocBtn = document.getElementById('toggleToc');
    const toc = document.getElementById('tableOfContents');
    const content = document.querySelector('.content');

    toggleTocBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the link from navigating
        toc.classList.toggle('hidden'); // Toggle the visibility of the ToC

        if (toc.classList.contains('hidden')) {
            content.classList.remove('content-contracted');
            content.classList.add('content-expanded');
        } else {
            content.classList.remove('content-expanded');
            content.classList.add('content-contracted');
        }
    });
});

const bookName = "AAA"
const tocData = [
    {
        chapterTitle: "Chapter 3",
        episodes: ["Chapter 3 (1)", "Chapter 3 (2)", "Chapter 3 (3)"]
    },
    {
        chapterTitle: "Chapter 4",
        episodes: ["Chapter 4 (1)", "Chapter 4 (2)"]
    }
];

function loadTableOfContents(tocData) {
    const toc = document.getElementById('tableOfContents');
    toc.innerHTML = '<h2>'+bookName+'</h2>'; // Reset ToC content

    const ul = document.createElement('ul');

    tocData.forEach((chapter, chapterIndex) => {
        let chapterElem = document.createElement('li');
        chapterElem.textContent = chapter.chapterTitle;
        ul.appendChild(chapterElem);

        let episodesUl = document.createElement('ul');
        chapter.episodes.forEach((episode, episodeIndex) => {
            let episodeLi = document.createElement('li');
            let episodeLink = document.createElement('a');
            episodeLink.textContent = episode;
            // Use data attributes to store chapter and episode indices
            episodeLink.dataset.chapterId = chapterIndex;
            episodeLink.dataset.episodeId = episodeIndex;
            episodeLink.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                // Convert data attributes to numbers as they are stored as strings
                const chapterId = parseInt(this.dataset.chapterId, 10);
                const episodeId = parseInt(this.dataset.episodeId, 10);
                loadEpisodeData(chapterId, episodeId); // Call the episode loading function
                highlightActiveToCItem(chapterId, episodeId);
                // Optional: Implement highlighting logic here
            });
            episodeLi.appendChild(episodeLink);
            episodesUl.appendChild(episodeLi);
        });
        ul.appendChild(episodesUl);
    });

    toc.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTableOfContents(tocData); // Populate ToC when the page loads
});

