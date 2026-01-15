const container = document.getElementById('blog-posts-container');

const renderPosts = () => {
  if (!container || !blogPosts) return;

  container.innerHTML = blogPosts.map(post => `
    <article class="blog-card">
      <div class="card-header">
        <span class="week-label">${post.week}</span>
        <span class="date-label">${post.date}</span>
      </div>
      <hr class="card-divider" />
      <div class="card-body">
        <h2 class="entry-title">${post.title}</h2>
        <p class="entry-text">${post.content}</p>
      </div>
      <div class="card-footer">
        <span class="timestamp">${post.timestamp}</span>
      </div>
    </article>
  `).join('');
};

document.addEventListener('DOMContentLoaded', renderPosts);
