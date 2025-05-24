// JavaScript to toggle benefit content visibility and arrow rotation
document.querySelectorAll('.benefit-item').forEach((item) => {
  const header = item.querySelector('h2').parentElement; // Get the div containing h2 and svg
  const content = item.querySelector('.benefit-content');
  const arrow = item.querySelector('.arrow');

  header.addEventListener('click', () => {
    const isExpanded = content.classList.contains('expanded');

    // Close all other items
    document
      .querySelectorAll('.benefit-item .benefit-content.expanded')
      .forEach((openContent) => {
        if (openContent !== content) {
          openContent.classList.remove('expanded');
          openContent
            .closest('.benefit-item')
            .querySelector('.arrow')
            .classList.remove('rotated');
        }
      });

    // Toggle current item
    if (isExpanded) {
      content.classList.remove('expanded');
      arrow.classList.remove('rotated');
    } else {
      content.classList.add('expanded');
      arrow.classList.add('rotated');
    }
  });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
