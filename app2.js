const box = document.querySelector('#box');
const tooltip = document.querySelector('#tooltip');

Popper.createPopper(box, tooltip, {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

// box.addEventListener('mouseenter' , () => tooltip.setAttribute('data-show', ''))
// box.addEventListener('mouseleave' , () => tooltip.removeAttribute('data-show', ''))