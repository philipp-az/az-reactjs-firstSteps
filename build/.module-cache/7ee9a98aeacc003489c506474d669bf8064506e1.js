// tutorial1.js ---
React.render(
    React.createElement(CommentBox, {url: "comments.json", pollInterval: 20000000}),
    document.getElementById('content')
);