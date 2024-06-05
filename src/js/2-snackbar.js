import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const delay = Number(e.target.delay.value);
  const state = e.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight'
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight'
      });
    });
});