const container = document.getElementById("blog-posts-container");

const createBodyContent = (section) => {
  switch (section.type) {
    case "paragraph":
      return `<p class="entry-text">${section.content}</p>`;

    case "list":
      const listItems = section.items
        .map((item) => `<li>${item}</li>`)
        .join("");
      return `<ul class="entry-list">${listItems}</ul>`;

    case "image":
      return `
        <div class="card-image-container">
          <img src="${section.src}" alt="${section.alt || "Blog Image"}" class="card-image">
        </div>`;

    case "video":
      return `
        <div class="card-image-container">
          <video controls class="card-image">
            <source src="${section.src}" type="video/quicktime">
            <source src="${section.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>`;

    case "youtube":
      return `
        <div class="card-image-container">
          <iframe src="${section.src}" title="${section.alt || "YouTube Video"}" class="card-image" style="aspect-ratio: 16/9; border: none;" allowfullscreen></iframe>
        </div>`;

    case "image-pair":
      const imgs = section.images
        .map(
          (img) =>
            `<div class="image-pair-item">
          <img src="${img.src}" alt="${img.alt || "Blog Image"}" class="card-image">
        </div>`,
        )
        .join("");
      return `<div class="image-pair-container">${imgs}</div>`;

    default:
      return "";
  }
};

const renderPosts = () => {
  if (!container || !blogPosts) return;

  container.innerHTML = blogPosts
    .map((post) => {
      // Generate all body sections
      const bodyHtml = post.body
        .map((section) => createBodyContent(section))
        .join("");

      return `
      <article class="blog-card">
        <div class="card-header">
          <span class="week-label">${post.week}</span>
          <span class="date-label">${post.date}</span>
        </div>

        <div class="card-content-wrapper">
          <h2 class="entry-title">${post.title}</h2>
          <div class="entry-body-container">
            ${bodyHtml}
          </div>
        </div>

        <div class="card-footer">
          <span class="timestamp">${post.timestamp}</span>
        </div>
      </article>
    `;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", renderPosts);
