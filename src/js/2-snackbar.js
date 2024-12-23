import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[type="number"]');
const button = document.querySelector('button[type=submit]');
const radioResolve = document.querySelector('input[value=fulfilled]');
const radioReject = document.querySelector('input[value=rejected]');

form.addEventListener("submit", (event)=> {
  event.preventDefault();
  submit(Number(input.value));
})

function submit(delay) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioResolve.checked) {
        resolve(delay);
      }
      // if (radioReject.checked) 
      else{
        reject(delay);
      }
    }, delay);
    console.log(typeof(delay));
  })
    .then(delay =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms
        `,
        position: 'topCenter',
      })
    )
    .catch(delay =>
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`
        ,
        position: 'topCenter',
      })
    );
    input.value = "";
}

// button.addEventListener('click', event => {
//   submit(Number(input.value));
//   });

// console.log("step 1");

// setTimeout(()=> {
//     console.log("step 2");
// }, 4000);

// new Promise ((resolve)=> {
// resolve("step 3")
// })
// .then((data)=> {
// console.log(data);
// });

// setTimeout(()=> {console.log("step 4");}, 2000)

// const promise = new Promise ((resolve, reject) => {
// resolve(10)
// });

// promise
// .then((value) => {
//    return new Promise((resolve) => {
//         resolve(value *2)
//     })
// })
// .then (value => console.log(value))

// const promise = new Promise ((resolve, reject) => {

//     setTimeout(() => {

//     resolve(5)

//     }, 2000)
// });

// promise
// .then((resolve) => {
//     console.log(resolve);
//     return resolve * 2;
// })
// .then ((resolve) => {
//     console.log(resolve);
// return resolve * 2;
// })
// .then ((resolve) => {
//     console.log(resolve);
//     return resolve * 2;
// })
// .catch((error)=> {
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finally");
// })

// const promise = new Promise ((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
// if (random > 0.5){
//     resolve("ok")
// } else{reject("oops")}
//     }, 2000)
// })

// promise
// .then((result) => {
//     console.log("then", result);
// })
// .catch((error)=> {
//     console.log("catch", error);
// })
// .finally(()=> {
//     console.log("finally");
// })
