/* scripts.js */
function joinCommunity() {
  alert('Thank you for your interest! Community registration opens soon.');
}

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! We will contact you soon.');
});

// Load blog posts dynamically
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("blog-container");
  if (!container) return;

  try {
    const response = await fetch("posts.json");
    const posts = await response.json();

    container.innerHTML = posts.map(post => `
      <article class="blog-card">
        <img src="${post.image}" alt="${post.title}" class="blog-thumb" />
        <div class="blog-info">
          <h2><a href="${post.url}">${post.title}</a></h2>
          <p class="meta">By ${post.author} | ${post.date}</p>
          <p>${post.excerpt}</p>
          <a href="${post.url}" class="btn">Read More</a>
        </div>
      </article>
    `).join('');
  } catch (error) {
    container.innerHTML = "<p>Unable to load blog posts at this time.</p>";
  }
});

