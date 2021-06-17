// Viewport Checker

window.addEventListener('load', (event) => {
  let target = document.querySelectorAll('.home_view');
  const config = {
    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
    rootMargin: '0px',
    threshold: 0.5
  };

  observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0){
        entry.target.classList.add('dng-view-anim')
      }
    });
  }, config);

  target.forEach(viewSection => {
    observer.observe(viewSection)
  })

});
