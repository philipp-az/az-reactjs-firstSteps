// tutorial1.js ---
React.render(
    React.createElement(CommentBox, {url: "comments.json", pollInterval: 2000}),
    document.getElementById('content')
);