function loadChapterData() {
    // Define the data to be loaded
    const chapterData = {
        title: "Chapter 1: asd (1)",
        mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
        audioUrl: "https://example.com/audiofile.mp3",
        imageUrl: "https://source.unsplash.com/random/800x600?landscape"
    };

    // Update the content dynamically
    document.querySelector('h2').textContent = chapterData.title;
    document.querySelector('main p').textContent = chapterData.mainText;
    document.querySelector('audio source').src = chapterData.audioUrl;
    document.querySelector('figure img').src = chapterData.imageUrl;

    // Reload the audio element to apply the new source
    document.querySelector('audio').load();
}

// Call the function to update the page content
document.addEventListener('DOMContentLoaded', loadChapterData);

function preventDefaultAction(event) {
    event.preventDefault();
    // Add further functionality here for the continue button
}