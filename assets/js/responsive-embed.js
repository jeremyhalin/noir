"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
    var postContent = document.querySelector(".gh-content");

    if (postContent) {
        // get all embed in a post's content
        var embeds = postContent.querySelectorAll([
            'iframe[src*="player.vimeo.com"]',
            'iframe[src*="youtube.com"]',
            'iframe[src*="youtube-nocookie.com"]',
            'iframe[src*="kickstarter.com"][src*="video.html"]',
            "object",
            "embed",
        ]);

        // for each embed, add a responsive parent and position
        // embed with absolute
        embeds.forEach(function (embed) {
            // add parent with custom CSS class
            var parent = embed.parentNode;
            var wrapper = document.createElement("div");
            wrapper.classList.add("responsive-embed-container");

            // set the wrapper as child (instead of the element)
            parent.replaceChild(wrapper, embed);
            // set element as child of wrapper
            wrapper.appendChild(embed);
        });
    }
});
