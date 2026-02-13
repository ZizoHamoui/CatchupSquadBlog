const container = document.getElementById('blog-posts-container');

/**
 * Helper function to transform body objects into HTML strings
 */
const createBodyContent = (section) => {
  switch (section.type) {
    case 'paragraph':
      return `<p class="entry-text">${section.content}</p>`;
    
    case 'list':
      const listItems = section.items.map(item => `<li>${item}</li>`).join('');
      return `<ul class="entry-list">${listItems}</ul>`;
    
    case 'image':
      return `
        <div class="card-image-container">
          <img src="${section.src}" alt="${section.alt || 'Blog Image'}" class="card-image">
        </div>`;

    case 'image-pair':
      const imgs = section.images.map(img =>
        `<div class="image-pair-item">
          <img src="${img.src}" alt="${img.alt || 'Blog Image'}" class="card-image">
        </div>`
      ).join('');
      return `<div class="image-pair-container">${imgs}</div>`;

    default:
      return '';
  }
};

const renderPosts = () => {
  if (!container || !blogPosts) return;

  container.innerHTML = blogPosts.map(post => {
    // Generate all body sections
    const bodyHtml = post.body.map(section => createBodyContent(section)).join('');

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
  }).join('');
};

document.addEventListener('DOMContentLoaded', renderPosts);
