// Gallery interactivity for downloads.html
document.addEventListener('DOMContentLoaded', function() {
  var galleryCards = document.querySelectorAll('.gallery-card');
  if (galleryCards.length > 0) {
    galleryCards.forEach(function(card) {
      card.addEventListener('click', function() {
        var img = card.querySelector('.gallery-img');
        var title = card.querySelector('.card-title');
        var desc = card.querySelector('.card-text');
        if (img && title && desc) {
          var modalImg = document.getElementById('galleryModalImg');
          var modalTitle = document.getElementById('galleryModalLabel');
          var modalDesc = document.getElementById('galleryModalDesc');
          if (modalImg && modalTitle && modalDesc) {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalTitle.textContent = title.textContent;
            modalDesc.textContent = desc.textContent;
            // Show modal (Bootstrap 4)
            if (window.jQuery && $('#galleryModal').modal) {
              $('#galleryModal').modal('show');
            }
          }
        }
      });
    });
  }
});
// Navbar search functionality for Index.html
document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.querySelector('.form-inline');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = document.getElementById('navbar-search-input');
      var query = input ? input.value.trim() : '';
      if (query) {
        // Redirect to results.html with query as URL parameter
        window.location.href = 'results.html?q=' + encodeURIComponent(query);
      } else {
        alert('Please enter a search term.');
      }
    });
  }

  // If on results.html, display filtered content
  if (window.location.pathname.endsWith('results.html')) {
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q') ? params.get('q').toLowerCase() : '';
    var resultsDiv = document.getElementById('search-results');
    if (resultsDiv && q) {
      // Expanded dataset from Index.html and other sections
      var data = [
        { title: 'Premium Quality', text: 'Every garment is crafted with the finest materials and attention to detail.' },
        { title: 'Custom Tailoring', text: 'Personalized fits and unique designs to match your style and personality.' },
        { title: 'Innovative Designs', text: 'Blending tradition with modern trends for a truly distinctive look.' },
        { title: 'Signature Senator Style', text: 'Our Senator designs blend cultural heritage with modern elegance. Each piece is crafted with premium fabrics, intricate embroidery, and a focus on perfect fit—making it ideal for both special occasions and everyday sophistication.' },
        { title: 'Our Design Philosophy', text: 'Rooted in individuality, quality, and innovation. Every outfit should empower confidence and express your unique story.' },
        { title: 'Discover Our Latest Collection', text: 'Explore the newest arrivals and exclusive designs at LIVIS MAISON.' },
        { title: 'Client Testimonial - Chinedu, Lagos', text: 'The Senator outfit I ordered was a perfect blend of tradition and modern style. The fit was impeccable!' },
        { title: 'Client Testimonial - Emeka, Abuja', text: 'LIVIS MAISON made my wedding suit, and I’ve never felt more confident. The attention to detail is unmatched.' },
        { title: 'Client Testimonial - Tunde, Port Harcourt', text: 'From consultation to delivery, the experience was seamless. I love my custom outfit!' },
        { title: 'Contact', text: 'Get in touch with us for your custom orders and inquiries.' },
        { title: 'About', text: 'Learn more about LIVIS MAISON and our story.' },
        { title: 'Downloads', text: 'Explore our gallery of signature looks and custom creations.' },
        { title: 'Services', text: 'Discover our range of tailoring, design, and fashion consulting services.' },
        { title: 'Policies & Conditions', text: 'Read our policies and terms for a seamless shopping experience.' },
        { title: 'Gallery - Classic Outfit', text: 'A timeless ensemble blending elegance and comfort, perfect for any occasion.' },
        { title: 'Gallery - Men\'s Collection', text: 'Discover our latest men\'s fashion, featuring sharp tailoring and modern silhouettes.' },
        { title: 'Gallery - Senator Style', text: 'Our signature Senator design, crafted for distinction and cultural pride.' },
        { title: 'Gallery - Men\'s Agbada Design', text: 'A regal Agbada design, blending tradition and modern elegance for special occasions.' },
        { title: 'Gallery - Luxury Black Agbada', text: 'Elegant senator attire with a contemporary fit, perfect for special occasions.' },
        { title: 'Gallery - Service Excellence', text: 'Experience our renowned customer service and attention to detail in every order.' },
        { title: 'Gallery - Senator\'s Idears', text: 'The essence of LIVIS MAISON—where tradition meets innovation in fashion.' },
        { title: 'Gallery - Tailoring Craft', text: 'Showcasing the artistry and precision behind every custom garment we create.' }
      ];
      var filtered = data.filter(function(item) {
        return item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q);
      });
      if (filtered.length > 0) {
        resultsDiv.innerHTML = filtered.map(function(item) {
          return '<div class="card mb-3"><div class="card-body"><h5 class="card-title">' + item.title + '</h5><p class="card-text">' + item.text + '</p></div></div>';
        }).join('');
      } else {
        resultsDiv.innerHTML = '<div class="alert alert-warning">No results found for <strong>' + q + '</strong>.</div>';
      }
    } else if (resultsDiv) {
      resultsDiv.innerHTML = '<div class="alert alert-info">Please enter a search term.</div>';
    }
  }
});
// Show success alert on form submit (demo only) for Contact.html
$(function() {
  $('#contactform').on('submit', function(e) {
    e.preventDefault();
    $('#form-success').removeClass('d-none');
    this.reset();
  });
});